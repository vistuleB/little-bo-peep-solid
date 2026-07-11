
const HeaderBlob = () => {
  return <>
    <img src="/non-build-img/loading_screen.png" />
    <span class="t-3003 t-3003-i">
      <span class="t-3003-i-url">
        ./non-build-img/loading_screen.png
        <span
          class="t-3003-i-copy"
          data-copy-src="./non-build-img/loading_screen.png"
          onclick="event.stopPropagation(); navigator.clipboard.writeText(this.dataset.copySrc); return false;"
          title="Copy image src"
        >
          {" "} ⧉
        </span>
      </span>
    </span>
  </>;
};

export default HeaderBlob;