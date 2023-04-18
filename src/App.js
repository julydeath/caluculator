import { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [expression, setExpression] = useState([]);
  const [newString, setNewString] = useState("");
  const [answer, setAnswer] = useState(0);

  const handleClick = (e) => {
    setExpression((prev) => [...prev, Number(e.target.value)]);
  };
  const handleEventClick = (e) => {
    setExpression((prev) => [...prev, e.target.value]);
  };

  useEffect(() => {
    const arrayToString = () => {
      let ans = "";
      expression.forEach((el) => {
        ans = ans + el;
      });
      setNewString(ans);
    };

    arrayToString();
  }, [expression]);

  useEffect(() => {
    const calcAns = () => {
      if (typeof expression.at(-1) === "number") {
        setAnswer(eval(newString));
      }
    };
    calcAns();
  }, [newString]);

  console.log(answer);
  return (
    <div className="calculator-grid">
      <button onClick={() => setExpression([])}>AC</button>
      <button>DEL</button>
      <button value="%" onClick={handleEventClick}>
        %
      </button>
      <button value="1" onClick={handleClick}>
        1
      </button>
      <button value="2" onClick={handleClick}>
        2
      </button>
      <button value="3" onClick={handleClick}>
        3
      </button>
      <button value="*" onClick={handleEventClick}>
        *
      </button>
      <button value="4" onClick={handleClick}>
        4
      </button>
      <button value="5" onClick={handleClick}>
        5
      </button>
      <button value="6" onClick={handleClick}>
        6
      </button>
      <button value="+" onClick={handleEventClick}>
        +
      </button>
      <button value="7" onClick={handleClick}>
        7
      </button>
      <button value="8" onClick={handleClick}>
        8
      </button>
      <button value="9" onClick={handleClick}>
        9
      </button>
      <button value="-" onClick={handleEventClick}>
        -
      </button>
      <button value="0" onClick={handleClick}>
        0
      </button>
      <button className="span-two">=</button>
      <div>{expression}</div>
      <div>Answer = {answer}</div>
    </div>
  );
}

export default App;
