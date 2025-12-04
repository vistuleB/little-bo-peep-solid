const Boxed = (props: any) => {
  return (
    <div class="flex justify-center">
      <div
        class="inline-block border border-red px-[1.4em] py-[1.2em] my-[1.5em] mx-4"
        style={props.style}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Boxed;
