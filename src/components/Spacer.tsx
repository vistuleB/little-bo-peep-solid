export const Spacer = (props: { height?: string }) => {
  return (
    <div
      aria-hidden="true"
      style={{ height: props.height ?? "var(--document-pause-space)" }}
    />
  );
};
