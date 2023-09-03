import Child from "./Child";

function Parent() {
  const date = new Date();
  return (
    <div>
      <Child message={date.toLocaleDateString()} />
    </div>
  );
}

export default Parent;
