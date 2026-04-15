import { useSelector } from 'react-redux';

function Result() {
  const score = useSelector((state) => state.questionnaire.score);

  if (score === null) return null;

  return <h2>Your Score: {score}</h2>;
}

export default Result;
