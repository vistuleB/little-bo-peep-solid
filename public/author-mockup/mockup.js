const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fixtures = {
 'bt3/bt3.wly': `|> Section\n    handle=distance-in-the-plane\n\n    Two points in the plane.\n\n    The horizontal and vertical distances\n    form a right triangle.\n\n    By the Pythagorean theorem,\n\n    $$\n    d^2 = (x_2-x_1)^2 + (y_2-y_1)^2\n    $$\n\n    |> NoIndent\n    Taking the square root gives\n    the distance between the points.\n`,
 'bt3/__parent.wly': `|> Bootcamp\n    handle=pythagorean-theorem\n    title=The Pythagorean Theorem\n`,
 'ch6.wly': `|> Section\n    handle=function-signatures\n\n    We associate units not only to numbers,\n    but also to functions.\n\n    |> Example\n        Consider a function of time.\n`,
 '__parent.wly': `|> Book\n\n    |> ChapterSelection\n        >>dimensional-analysis\n        >>pythagorean-theorem\n`
};
const paths=[...new Set([...(window.mockFileCatalog||[]),...Object.keys(fixtures)])].sort();
const commands=['gleam run -- --only bt3','gleam run','gleam run -- --only ch6','gleam run -- --only ch4','gleam run -- --only bt2'];
const branches=[
 {name:'codex-suggestions',out:3,in:0,opened:true,command:commands[0]},
 {name:'develop',out:0,in:2,opened:true,command:commands[1]},
 {name:'chapter-reordering',out:0,in:0,opened:false,command:commands[1]},
 {name:'old-trig-draft',out:2,in:0,opened:true,missing:true,command:commands[1]}
];
for (const branch of branches) branch.recentCommands = [branch.command, ...commands.filter(c => c !== branch.command)].slice(0,5);
function blankState(){return {saved:{...fixtures},revision:0,build:null,error:null,syncError:null,file:'bt3/bt3.wly',recent:['bt3/bt3.wly','bt3/__parent.wly','ch6.wly'],locations:{},lastSource:null,previewScroll:0};}
const states=Object.fromEntries(branches.map(b=>[b.name,blankState()]));
let active=branches[0],mode='preview',drafts={},goggles=false,busy=false,notice='',forceFailure=false,sourceWarning='';
const state=()=>states[active.name];
const savedText=(s,f)=>s.saved[f]??`!! Mockup content for ${f}\n!! The actual file is not loaded or modified.\n\n|> Section\n\n    Edit this illustrative paragraph.\n`;
const textFor=f=>drafts[f]??savedText(state(),f);
const dirtyFiles=()=>Object.keys(drafts).filter(f=>drafts[f]!==savedText(state(),f));
const dirty=()=>dirtyFiles().length>0;
function snapshot(s,command){return {revision:s.revision,command,files:{...s.saved},included:command.includes('--only ch6')?['ch6.wly']:command.includes('--only bt3')?['bt3/__parent.wly','bt3/bt3.wly']:['bt3/__parent.wly','bt3/bt3.wly','ch6.wly']};}
state().build=snapshot(state(),active.command);
function notify(t){notice=t;$('#notice').textContent=t;}
function capture(){if(mode==='preview')state().previewScroll=$('#screen').scrollTop;if(mode==='source'){const e=$('.source-editor');if(e)state().locations[state().file]={start:e.selectionStart,end:e.selectionEnd,scroll:e.scrollTop};}}
function closeSheet(){$('#sheet-host').innerHTML='';}
function sheet(html,cls=''){const old=document.activeElement;$('#sheet-host').innerHTML=`<div class="scrim"><section class="sheet ${cls}" role="dialog" aria-modal="true" aria-label="Authoring action"><div class="handle"></div>${html}</section></div>`;const dialog=$('.sheet');dialog.querySelector('button,input')?.focus();dialog.onkeydown=e=>{if(e.key!=='Tab')return;const els=[...dialog.querySelectorAll('button,input,summary')].filter(el=>!el.disabled&&el.getClientRects().length);if(e.shiftKey&&document.activeElement===els[0]){e.preventDefault();els.at(-1)?.focus();}else if(!e.shiftKey&&document.activeElement===els.at(-1)){e.preventDefault();els[0]?.focus();}};document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>{closeSheet();old?.focus();});}
function setMode(next){capture();mode=next;goggles=false;notify('');render();}
function commit(){const changed=dirtyFiles();for(const f of changed)state().saved[f]=drafts[f];if(changed.length){active.out++;state().revision++;}drafts={};return changed.length;}
function render(){
 $('#active-branch').classList.toggle('blocked',!!state().syncError);
 $('#active-branch').innerHTML=`<span>⑂ &nbsp;${esc(active.name)}</span><span class="pill-state">${state().syncError?'Sync blocked':`${active.out} ↑ / ${active.in} ↓`} &nbsp;⌄</span>`;
 document.querySelectorAll('[data-mode]').forEach(b=>{b.classList.toggle('active',b.dataset.mode===mode);b.setAttribute('aria-current',b.dataset.mode===mode?'page':'false');});
 $('.phone').classList.toggle('keyboard-open',$('#keyboard-toggle').checked&&mode==='source');
 if(mode==='branches')renderBranches();else if(mode==='source')renderSource();else renderPreview();
 $('#notice').textContent=notice;
}
function renderBranches(){
 $('#screen').innerHTML=`<div class="page-padding"><div class="heading-row"><h2>Branches</h2><button class="text-button" id="refresh">↻ Refresh</button></div><div class="build-settings"><div class="setting-top"><span>Build for ${esc(active.name)}</span><button id="settings-command">Change</button></div><code>${esc(active.command)}</code><p>${state().build?'Preview available · revision '+state().build.revision:'No successful build yet'}</p><button id="branch-build" ${busy?'disabled':''}>${busy?'Building…':'Build preview →'}</button></div>${branches.map((b,i)=>`<article class="branch-card ${b===active?'selected':''}"><div class="branch-title">${b===active?'<span class="dot"></span>':''}<button data-branch="${i}" ${busy?'disabled':''}>${esc(b.name)}</button>${b===active?'<span class="selected-label">Active</span>':''}</div>${b.missing?'<span class="missing">Missing on GitHub</span>':!b.opened?'<p class="muted" style="margin:12px 0">On GitHub · not opened on server</p>':''}${b.opened?`<div class="counts"><div><strong>${b.out}</strong><span>outgoing ↑</span></div><div><strong>${b.missing?'—':b.in}</strong><span>incoming ↓</span></div></div>`:''}${states[b.name].syncError?`<div class="error-box">${esc(states[b.name].syncError)}<br>Your saved draft is still available.</div>`:''}<div class="card-footer"><span>${b.opened?'At last check':'No server draft'}</span><button class="small-button" ${busy?'disabled':''} ${b===active?'id="sync"':`data-branch="${i}"`}>${b===active?'↕ Sync branch':b.opened?'Select':'Open'}</button></div></article>`).join('')}<div class="info-box">Refresh checks GitHub without changing your files.<br>Only Sync reconciles the branch.</div></div>`;
 $('#actionbar').innerHTML='';$('#settings-command').onclick=()=>commandPicker(false);$('#branch-build').onclick=()=>commandPicker(true);$('#sync').onclick=sync;
 $('#refresh').onclick=()=>{notify('Checking GitHub…');document.querySelectorAll('.counts strong').forEach(e=>e.textContent='?');setTimeout(()=>{render();notify('Branch list refreshed. No files changed.');},500);};
 document.querySelectorAll('[data-branch]').forEach(b=>b.onclick=()=>requestBranch(branches[+b.dataset.branch]));
}
function requestBranch(next,after){if(next===active){after?.();return;}capture();
 const proceed=()=>{active=next;active.opened=true;goggles=false;sourceWarning='';closeSheet();notify('');render();after?.();};
 if(!dirty())return proceed();
 sheet(`<h2>Before switching branches</h2><p>${dirtyFiles().length} file(s) have uncommitted edits on <strong>${esc(active.name)}</strong>.</p><p>Switch to <strong>${esc(next.name)}</strong>?</p><button class="primary" id="commit-switch">Commit & switch</button><button class="danger" id="discard-switch">Discard & switch</button><button class="quiet" data-close>Cancel</button>`);
 $('#commit-switch').onclick=()=>{commit();proceed();};$('#discard-switch').onclick=()=>{drafts={};proceed();};
}
function renderSource(){const s=state(),file=s.file,location=s.lastSource;
 $('#screen').innerHTML=`<div class="source-page"><div class="file-bar"><button class="file-button" id="pick-file"><span>▧</span><span>${esc(file)}</span><span>⌄</span></button><div class="file-status"><span id="dirty-state"></span><span>.wly only</span></div></div>${location?.file===file?`<div class="source-location"><span>${sourceWarning||`From preview · line ${location.line}`}</span><button id="return-preview">Back to passage ↗</button></div>`:''}<div class="editor-wrap"><div class="line-numbers" aria-hidden="true"></div><textarea class="source-editor" aria-label="Writerly source" spellcheck="false" autocapitalize="off" autocomplete="off" wrap="off"></textarea></div><div class="source-help">Draft in this tab only. Commit to keep it.</div></div>`;
 const editor=$('.source-editor');editor.value=textFor(file);const loc=s.locations[file];if(loc){editor.setSelectionRange(loc.start,loc.end);editor.scrollTop=loc.scroll;}
 const updateLines=()=>$('.line-numbers').textContent=Array.from({length:editor.value.split('\n').length},(_,i)=>i+1).join('\n');updateLines();$('.line-numbers').scrollTop=editor.scrollTop;
 editor.oninput=()=>{drafts[file]=editor.value;updateLines();updateDirty();notify('');};editor.onscroll=()=>$('.line-numbers').scrollTop=editor.scrollTop;
 $('#pick-file').onclick=()=>{capture();pickFile();};$('#return-preview')?.addEventListener('click',()=>setMode('preview'));updateDirty();
}
function updateDirty(){const n=dirtyFiles().length;$('#dirty-state').textContent=n?`${n} file${n===1?'':'s'} with uncommitted edits`:'All changes committed';$('#dirty-state').classList.toggle('dirty-text',n>0);
 $('#actionbar').innerHTML=`<button class="discard" id="discard" ${!n?'disabled':''}>Discard</button><button id="commit" ${!n?'disabled':''}>Commit${n>1?' all':''}</button><button class="primary" id="build" ${busy?'disabled':''}>${busy?'Building…':'Build ▴'}</button>`;
 $('#discard').onclick=()=>{capture();sheet(`<h2>Discard pending edits?</h2><p>Restore ${n} modified file(s) to the last committed version.</p><button class="danger" id="confirm-discard">Discard changes</button><button class="quiet" data-close>Keep editing</button>`);$('#confirm-discard').onclick=()=>{drafts={};closeSheet();render();notify('Restored committed source.');};};
 $('#commit').onclick=()=>{capture();const count=commit();render();notify(`Committed ${count} file(s). Preview unchanged until Build.`);};$('#build').onclick=()=>{capture();commandPicker(true);};
}
function openFile(file,line=null,excerpt=null){capture();state().file=file;state().recent=[file,...state().recent.filter(f=>f!==file)].slice(0,3);sourceWarning='';if(line!==null){const text=textFor(file);let offset=text.split('\n').slice(0,line-1).join('\n').length+(line>1?1:0);if(excerpt){const normalized=text.split('\n').map(l=>l.trim()).join('\n');const found=normalized.indexOf(excerpt);if(found>=0){line=normalized.slice(0,found).split('\n').length;const sourceLines=text.split('\n');offset=sourceLines.slice(0,line-1).join('\n').length+(line>1?1:0)+(sourceLines[line-1].length-sourceLines[line-1].trimStart().length);}else{sourceWarning='Source changed · showing last-built location';}}state().lastSource={file,line};state().locations[file]={start:offset,end:offset,scroll:Math.max(0,(line-4)*22)};}else{const offset=state().locations[file]?.start||0;state().lastSource={file,line:textFor(file).slice(0,offset).split('\n').length};}closeSheet();mode='source';goggles=false;notify('');render();if(line!==null){$('.source-editor').focus({preventScroll:true});}}
function buildTree(){const root={dirs:{},files:[]};for(const path of paths){const bits=path.split('/');let node=root;for(const d of bits.slice(0,-1))node=node.dirs[d]??=( {dirs:{},files:[]} );node.files.push(path);}return root;}
const tree=buildTree();let openedDirs=new Set(['bt3']);
function treeMarkup(node,prefix=''){return Object.entries(node.dirs).map(([name,child])=>{const path=prefix?prefix+'/'+name:name;return `<details data-dir="${esc(path)}" ${openedDirs.has(path)?'open':''}><summary>${esc(name)} <small>${countFiles(child)}</small></summary>${treeMarkup(child,path)}</details>`;}).join('')+node.files.map(f=>fileButton(f)).join('');}
function countFiles(node){return node.files.length+Object.values(node.dirs).reduce((n,v)=>n+countFiles(v),0);}
function fileButton(f,recent=false){return `<button class="${recent?'recent-file':'tree-file'} ${f===state().file?'selected':''}" data-file="${esc(f)}">${recent?'↶ &nbsp;':''}${esc(recent?f:f.split('/').at(-1))}${drafts[f]!==undefined&&drafts[f]!==savedText(state(),f)?' •':''}</button>`;}
function pickFile(){sheet(`<div class="tree-header"><h2>Source files</h2><button data-close>Done</button></div><input class="file-search" aria-label="Find a Writerly file" placeholder="Find a file or folder…"><div class="tree-content"></div><div class="tree-footer">${paths.length} paths · illustrative contents · no file creation</div>`,'tree-sheet');
 function paint(query=''){const q=query.trim().toLowerCase();$('.tree-content').innerHTML=q?`<div class="tree-label">MATCHING PATHS</div>${paths.filter(f=>f.toLowerCase().includes(q)).map(f=>fileButton(f,true)).join('')||'<p class="muted">No matching files.</p>'}`:`<div class="tree-label">RECENT</div>${state().recent.map(f=>fileButton(f,true)).join('')}<div class="tree-label">SRC / CONTENT</div><div class="file-tree">${treeMarkup(tree)}</div>`;document.querySelectorAll('[data-file]').forEach(b=>b.onclick=()=>openFile(b.dataset.file));document.querySelectorAll('[data-dir]').forEach(d=>d.ontoggle=()=>d.open?openedDirs.add(d.dataset.dir):openedDirs.delete(d.dataset.dir));}
 paint();$('.file-search').oninput=e=>paint(e.target.value);
}
// Mockup validation only. The real server must validate again and invoke a
// fixed executable with parsed arguments and shell:false, in a fixed directory.
function commandError(command) {
 if (!/^gleam[ \t]+run(?:[ \t]|$)/.test(command)) return 'Start the command with gleam run.';
 if (/[\r\n\x00-\x1f;&|<>`$\\]/.test(command)) return 'Use one command, without shell operators or substitutions.';
 if (/(?:^|\s)--local(?:\s|$)/.test(command)) return '--local is for desktop editing; source links are added automatically here.';
 return '';
}
function commandPicker(run){
 const recent=active.recentCommands;
 sheet(`<h2>${run?'Build preview':'Build command'}</h2>${run&&dirty()?'<p>Pending edits will be committed first.</p>':''}${recent.map((cmd,i)=>`<label class="command command-recent"><input type="radio" name="command" value="${i}" ${cmd===active.command?'checked':''}><code>${esc(cmd)}</code></label>`).join('')}<label class="command command-custom"><span><input type="radio" name="command" value="custom" ${!recent.includes(active.command)?'checked':''}> Custom:</span><input id="custom-command" aria-label="Custom build command" type="text" placeholder="gleam run …" value="${!recent.includes(active.command)?esc(active.command):''}" spellcheck="false" autocapitalize="off" autocomplete="off"></label><div id="command-error" role="alert" hidden></div><button class="primary" id="apply-command">${run?(dirty()?'Commit & build':'Build'):'Use this command'}</button><button class="quiet" data-close>Cancel</button>${run?`<label class="check"><input type="checkbox" id="fail-build" ${forceFailure?'checked':''}> Mockup: simulate a build error</label>`:''}`);
 const custom=$('#custom-command'),error=$('#command-error');
 const clearError=()=>{error.hidden=true;custom.removeAttribute('aria-invalid');};
 custom.onfocus=()=>{document.querySelector('[name=command][value=custom]').checked=true;clearError();};
 custom.oninput=clearError;
 document.querySelectorAll('[name=command]').forEach(r=>r.onchange=clearError);
 $('#apply-command').onclick=()=>{
  const selected=document.querySelector('[name=command]:checked').value;
  const command=(selected==='custom'?custom.value:recent[+selected]).trim();
  const message=commandError(command);
  if(message){error.textContent=message;error.hidden=false;if(selected==='custom')custom.setAttribute('aria-invalid','true');return;}
  active.command=command;
  active.recentCommands=[command,...recent.filter(c=>c!==command)].slice(0,5);
  const fail=!!$('#fail-build')?.checked;forceFailure=false;
  if(run){capture();commit();closeSheet();startBuild(fail);}else{closeSheet();render();notify('Build command saved for this branch.');}
 };
}
function startBuild(fail){busy=true;const s=state(),name=active.name,next=snapshot(s,active.command);render();notify('Building committed revision '+next.revision+'…');setTimeout(()=>{busy=false;if(fail){s.error='Writerly parse error\nbt3/bt3.wly:16\nUnexpected indentation in paragraph.';render();notify('Build failed. Your source commit is saved.');sheet(`<h2>Build failed</h2><p>${s.build?'The previous successful preview is still available.':'There is no successful preview yet.'} You can continue editing.</p><pre>${esc(s.error)}</pre><button class="primary" id="back-source">Return to source</button><button data-close>Close</button>`);$('#back-source').onclick=()=>{closeSheet();setMode('source');};}else{s.build=next;s.error=null;render();notify('Preview ready for '+name+'.');sheet(`<h2>Preview ready</h2><p>Built revision ${next.revision} of <strong>${esc(name)}</strong>.</p><button class="primary" id="view-build">View preview</button><button class="quiet" data-close>Keep editing</button>`);$('#view-build').onclick=()=>{closeSheet();setMode('preview');};}},800);}
let fragments=[];
function fragment(file,line,text,tag='p'){const id=fragments.length;fragments.push({file,line,text});return `<${tag} data-fragment="${id}" ${goggles?`tabindex="0" role="button" aria-label="Edit ${esc(file)}, line ${line}" title="${esc(file)}:${line}"`:''}>${esc(text)}</${tag}>`;}
function sourceParagraphs(build,file){const lines=savedText({saved:build.files},file).split('\n');let html='',buffer=[],start=0,math=false;const flush=()=>{if(buffer.length){html+=fragment(file,start+1,buffer.join('\n'),math?'pre':'p');buffer=[];}};for(let i=0;i<lines.length;i++){const raw=lines[i],t=raw.trim();if(t==='$$'){flush();math=!math;continue;}if(!t||t.startsWith('|>')||t.startsWith('!!')||/^[\w-]+=/.test(t)){flush();continue;}if(!buffer.length)start=i;buffer.push(raw.trim());}flush();return html;}
const diagram=`<svg viewBox="0 0 300 150" aria-label="Right triangle between two points" role="img"><path d="M45 120 H255 V20 Z" fill="#eaf0e4" stroke="#658069" stroke-width="1.5"/><path d="M240 120 V105 H255" fill="none" stroke="#658069"/><circle cx="45" cy="120" r="4" fill="#365d47"/><circle cx="255" cy="20" r="4" fill="#365d47"/><text x="18" y="133" fill="#52664e" font-family="Georgia" font-style="italic">P</text><text x="264" y="21" fill="#52664e" font-family="Georgia" font-style="italic">Q</text><text x="125" y="143" fill="#75836e" font-size="13">x₂ − x₁</text><text x="262" y="80" fill="#75836e" font-size="13">y₂ − y₁</text><text x="134" y="59" fill="#52664e" font-family="Georgia" font-style="italic">d</text></svg>`;
function renderPreview(){const s=state(),build=s.build;$('#actionbar').innerHTML='';
 if(!build){$('#screen').innerHTML=`<div class="empty-preview"><div class="empty-symbol">▤</div><h2>No preview yet</h2><p>This branch needs its first successful build.<br>Opening Preview doesn’t start one.</p><div class="build-settings"><code>${esc(active.command)}</code></div><button class="primary" id="first-build" ${busy?'disabled':''}>${busy?'Building…':'Build preview'}</button></div>`;$('#first-build').onclick=()=>commandPicker(true);return;}
 fragments=[];const missing=s.lastSource&&!build.included.includes(s.lastSource.file),stale=s.revision-build.revision;
 const status=s.error?'Last build failed · previous preview':stale?`${stale} commit(s) since this build`:dirty()?'Uncommitted source edits · preview unchanged':'Latest committed build';
 let body='';if(build.included.includes('bt3/bt3.wly')){const titleSource=build.files['bt3/__parent.wly']||fixtures['bt3/__parent.wly'];const title=titleSource.split('\n').find(l=>l.trim().startsWith('title='))?.trim().slice(6)||'The Pythagorean Theorem';body+=`<span class="chapter-label">Bootcamp 3</span>${fragment('bt3/__parent.wly',3,title,'h2')}${diagram}${sourceParagraphs(build,'bt3/bt3.wly')}`;}
 if(build.included.includes('ch6.wly'))body+=`<span class="chapter-label">Dimensional Analysis</span>${sourceParagraphs(build,'ch6.wly')}`;
 $('#screen').innerHTML=`<div class="preview-toolbar"><div class="toolbar-top"><button class="goggles-button ${goggles?'on':''}" id="goggles" aria-pressed="${goggles}">◉◉ &nbsp;${goggles?'Goggles on':'Blame goggles'}</button><button class="text-button" id="preview-build" ${busy?'disabled':''}>${busy?'Building…':'Build ▴'}</button></div><div class="preview-substatus">${esc(status)}</div></div>${goggles?'<div class="goggles-hint">Tap an outlined passage to edit its source.</div>':''}${missing?'<div class="error-box">The last source file isn’t in this build. Showing your previous reading position.</div>':''}<article class="book ${goggles?'goggles':''}">${body}</article><div class="preview-demo">MOCK PREVIEW · SOURCE LINKS ARE SIMULATED</div>`;
 $('#preview-build').onclick=()=>commandPicker(true);$('#goggles').onclick=()=>{const top=$('#screen').scrollTop;goggles=!goggles;renderPreview();$('#screen').scrollTop=top;};
 document.querySelectorAll('[data-fragment]').forEach(el=>{if(!goggles)return;const open=()=>{const f=fragments[+el.dataset.fragment];s.previewScroll=$('#screen').scrollTop;openFile(f.file,f.line,f.text);};el.onclick=open;el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}};});
 $('#screen').scrollTop=s.previewScroll;
 if(s.lastSource&&!missing&&!goggles){const loc=s.lastSource;let index=fragments.findIndex(f=>f.file===loc.file&&f.line>=loc.line);if(index<0)index=fragments.findLastIndex(f=>f.file===loc.file);const target=document.querySelector(`[data-fragment="${index}"]`);if(target){target.classList.add('jump-highlight');const screen=$('#screen');const rect=target.getBoundingClientRect(),sr=screen.getBoundingClientRect();if(rect.top<sr.top+90||rect.bottom>sr.bottom)screen.scrollTop+=rect.top-sr.top-100;}}
}
function sync(){if(dirty()){sheet('<h2>Commit before syncing</h2><p>Commit or discard pending edits before exchanging commits with GitHub.</p><button class="primary" id="sync-source">Return to source</button><button data-close>Cancel</button>');$('#sync-source').onclick=()=>{closeSheet();setMode('source');};return;}busy=true;const b=active,s=state();render();notify('Fetching and reconciling with GitHub…');setTimeout(()=>{busy=false;if(b.missing){s.syncError='Sync failed: target branch missing on GitHub.';notify('Sync failed. Editing is still available.');}else{if(b.in)s.revision++;b.out=0;b.in=0;s.syncError=null;notify('Branch synchronized. Preview unchanged until Build.');}render();},700);}
$('#active-branch').onclick=()=>setMode('branches');document.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>setMode(b.dataset.mode));
$('#keyboard-toggle').onchange=()=>{if($('#keyboard-toggle').checked)setMode('source');else{capture();render();}};$('#hide-keyboard').onclick=()=>{capture();$('#keyboard-toggle').checked=false;render();};
window.addEventListener('keydown',e=>{if(e.key==='Escape')closeSheet();});
document.querySelectorAll('[data-scenario]').forEach(b=>b.onclick=()=>{closeSheet();if(b.dataset.scenario==='goggles'){setMode('preview');if(state().build){goggles=true;renderPreview();}}if(b.dataset.scenario==='tree'){capture();pickFile();}if(b.dataset.scenario==='unbuilt')requestBranch(branches[1],()=>setMode('preview'));if(b.dataset.scenario==='failure'){forceFailure=true;commandPicker(true);}});
window.addEventListener('beforeunload',e=>{if(dirty()){e.preventDefault();e.returnValue='';}});
render();
