import SharedProps from "./types/SharedProps";
import ImageOrSideImage from "./ImageOrSideImage";
import styleJoin from "~/utils/styleJoin";

type InlineImageProps = SharedProps & {
  src: string;
  width?: string;
  height?: string;
  intrinsicWidth?: string | number;
  intrinsicHeight?: string | number;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  marginLeft?: string;
  marginRight?: string;
};

const InlineImage = (props: InlineImageProps) => {
  const intrinsicAspectRatio = () => {
    if (props.width && props.height) return undefined;
    if (!props.intrinsicWidth || !props.intrinsicHeight) return undefined;
    return `${props.intrinsicWidth} / ${props.intrinsicHeight}`;
  };

  const useNativeDimensions = () => !props.width && !props.height;

  return (
    <>
      <ImageOrSideImage
        loading="lazy"
        class={`bg-cover inline-block relative ${props.class}`}
        style={styleJoin(
          {
            width: props.width || (props.height ? "auto" : undefined),
            height: props.height || (props.width ? "auto" : undefined),
            aspectRatio: intrinsicAspectRatio(),
            top: props.top,
            right: props.right,
            bottom: props.bottom,
            left: props.left,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight,
          },
          props.style,
        )}
        src={props.src}
        width={useNativeDimensions() ? props.intrinsicWidth : undefined}
        height={useNativeDimensions() ? props.intrinsicHeight : undefined}
      ></ImageOrSideImage>
    </>
  );
};

export default InlineImage;
