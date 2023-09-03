function Button1() {
  return (
    <>
      <button
        onClick={function () {
          console.log("first example");
        }}
      >
        An inline anonymous ES5 function event handler
      </button>
    </>
  );
}

export default Button1;
