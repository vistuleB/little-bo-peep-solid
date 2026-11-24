export const mobileMarginRight = "-5.5px";
export const desktopLeftMargin = "15px";
export const mobileLeftMargin = "-2px";

const LeftHeaderBlob = () => {
  return <>
    <img
      src="/non-build-img/toilet-watercolor-v2-cropped.png"
      alt="Watercolor toilet"
    />
    <span class="t-3003 t-3003-i">
      <span class="t-3003-i-url">
        ./non-build-img/toilet-watercolor-v2-cropped.png
        <span
          class="t-3003-i-copy"
          data-copy-src="./non-build-img/toilet-watercolor-v2-cropped.png"
          onclick="event.stopPropagation(); navigator.clipboard.writeText(this.dataset.copySrc); return false;"
          title="Copy image src"
        >
          {" "} ⧉
        </span>
      </span>
    </span>
  </>;
};

export default LeftHeaderBlob;