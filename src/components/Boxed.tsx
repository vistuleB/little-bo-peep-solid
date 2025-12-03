const Boxed = (props: any) => {
  return (
    <div class="flex justify-center">
      <div
        class="inline-block border border-red-400 p-4 my-[1.5em] mx-4"
        style={props.style}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Boxed;
