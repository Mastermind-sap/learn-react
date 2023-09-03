function NumGuess() {
  const handleClick = () => {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);
    let userInput = prompt("type a number");
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  };
  return (
    <div>
      <h1>Number Guessing Game Task</h1>
      <button onClick={handleClick}>Play</button>
    </div>
  );
}

export default NumGuess;
