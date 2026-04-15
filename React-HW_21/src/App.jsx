import { useSelector, useDispatch } from 'react-redux';
import { submitAnswers } from './features/questionnaire/questionnaireSlice';
import Question from './components/question';
import Result from './components/result';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionnaire.questions);

  return (
    <div className='container'>
      <h1>Questionnaire</h1>
      {questions.map((q) => (
        <Question key={q.id} question={q} />
      ))}
      <button className='btn' onClick={() => dispatch(submitAnswers())}>Submit</button>
      <Result />
    </div>
  );
}

export default App;