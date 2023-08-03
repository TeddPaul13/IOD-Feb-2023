import { useState } from "react";

const Calculate = () => {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [result, setResult] = useState(null);

  function handleNum1(event) {
    setNum1(parseInt(event.target.value));
  }
  function handleNum2(event) {
    setNum2(parseInt(event.target.value));
  }

  function GetAnswer(event) {
    console.log(event);
    event.preventDefault();
    switch (event.target.operators.value) {
      case "+":
        setResult(num1 + num2);
        break;
      case "-":
        setResult(num1 - num2);
        break;
      case "/":
        setResult(num1 / num2);
        break;
      case "*":
        setResult(num1 * num2);
        break;
      default:
    }
  }

  return (
    <div className="calcpage">
      <h1>Calculator App</h1>
      <form onSubmit={GetAnswer}>
        <div>
          <input
            type="text"
            value={num1}
            onChange={handleNum1}
            placeholder="Enter First Number"
          />
        </div>
        <div>
          <select name="operators" id="operators">
            <option value="">Select Operator</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="/">/</option>
            <option value="*">*</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            value={num2}
            onChange={handleNum2}
            placeholder="Enter First Number"
          />
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>

      <div>
        <p>Result:{result}</p>
      </div>
    </div>
  );
};

export default Calculate;
