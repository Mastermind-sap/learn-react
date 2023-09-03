//Parent
function Dog() {
  return <Puppy name="Max" bowlShape="square" bowlStatus="full" />;
}

//Child
function Puppy(props) {
  return (
    <div>
      {props.name} has <Bowl bowlShape="square" bowlStatus="full" />
    </div>
  );
}

//Grandchild
function Bowl(props) {
  return (
    <span>
      {props.bowlShape}-shaped bowl, and it's currently {props.bowlStatus}
    </span>
  );
}

export {Dog};
