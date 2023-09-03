function thirdExample() {
  console.log("third example");
}

function Button3() {
  return (
    <>
      <button onClick={thirdExample}>
        using a separate function declaration
      </button>
    </>
  );
}

export default Button3;
