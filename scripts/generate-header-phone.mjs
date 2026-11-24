// Overlay a Sigma using a homography fitted to the screen, not a rotation.
// Re-run after changing screen corners or the symbol's normalized coordinates.
import { readFileSync, writeFileSync } from 'node:fs';
const base = new URL('../public/non-build-img/', import.meta.url);
const screen = [[1040, 69], [1522, 178], [779, 860], [195, 673]];
const unit = [[0,0], [1,0], [1,1], [0,1]];
const equations = unit.flatMap(([u,v], i) => {
  const [x,y] = screen[i];
  return [[u,v,1,0,0,0,-x*u,-x*v,x], [0,0,0,u,v,1,-y*u,-y*v,y]];
});
for (let col = 0; col < 8; col++) {
  let pivot = col;
  for (let row = col+1; row < 8; row++)
    if (Math.abs(equations[row][col]) > Math.abs(equations[pivot][col])) pivot = row;
  [equations[col], equations[pivot]] = [equations[pivot], equations[col]];
  const divisor = equations[col][col];
  equations[col] = equations[col].map(v => v/divisor);
  for (let row = 0; row < 8; row++) {
    if (row === col) continue;
    const factor = equations[row][col];
    equations[row] = equations[row].map((v,j) => v-factor*equations[col][j]);
  }
}
const h = equations.map(row => row[8]);
const project = ([u,v]) => {
  const d = h[6]*u+h[7]*v+1;
  return [(h[0]*u+h[1]*v+h[2])/d, (h[3]*u+h[4]*v+h[5])/d];
};
// Upright capital Sigma, centered on the portrait screen. Coordinates are
// fractions of screen width/height, so all strokes share its vanishing points.
const outline = [[0,0],[1,0],[1,.2],[.93,.2],[.88,.09],[.19,.09],
  [.60,.46],[.19,.91],[.88,.91],[.93,.8],[1,.8],[1,1],[0,1],
  [0,.94],[.42,.51],[0,.06]];
const points = outline.map(([x,y]) => project([.23+x*.54,.37+y*.38])
  .map(v=>v.toFixed(2)).join(',')).join(' ');
const png = readFileSync(new URL('header-phone-blank-v1.png', base)).toString('base64');
writeFileSync(new URL('header-phone-sigma-v1.svg', base),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1601 983"><image width="1601" height="983" href="data:image/png;base64,${png}"/><polygon points="${points}" fill="#333333"/></svg>\n`);
console.log('Wrote header-phone-sigma-v1.svg');
