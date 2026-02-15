import { useEffect, useState } from "react";
import Answer from '../answer'

function MathQuiz() {

  const [score, setScore] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const generateNumbers = () => {
    setA(Math.floor(Math.random() * 100));
    setB(Math.floor(Math.random() * 100));
  };

  useEffect(() => {
    generateNumbers();
  }, [])

  const checkAnswer = (userAnswer) => {
    if (a + b === Number(userAnswer)) {
      setScore((prev) => prev + 1);
    } else {
      setScore((prev) => prev > 0 ? prev - 1 : 0);
    }

    generateNumbers();
  }

  return (
    <div>
      <h1>Math Quiz (Score: {score})</h1>
      <h2>
        {a} + {b}
      </h2>
      <Answer checkAnswer={checkAnswer} generateNumbers={generateNumbers} />
    </div>
  );
}

export default MathQuiz;