import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import Button3 from "./components/Button3";
import Button4 from "./components/Button4";
import Mode from "./components/ModeToggler";
import NumGuess from "./components/NumGuess";
import { Dog } from "./components/DataFlow";
import Parent from "./components/Parent";
import RegisterForm from "./components/RegisterForm";
import InputComponent from "./components/InputComponent";
import TextInputWithFocusButton from "./components/TextInputWithFocusButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <body>
        <Button1 />
        <br />
        <Button2 />
        <Button3 />
        <Button4 />
        <Mode />
        <br />
        <NumGuess />
        <Dog />
        <Parent />
        <InputComponent />
        <RegisterForm />
        <TextInputWithFocusButton />
      </body>
    </div>
  );
}

export default App;
