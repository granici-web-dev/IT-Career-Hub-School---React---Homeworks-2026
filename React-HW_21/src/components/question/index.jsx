import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion } from '../../features/questionnaire/questionnaireSlice';

function Question({ question }) {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.questionnaire.answers);

  return (
    <div>
      <h3>{question.text}</h3>
      {question.options.map((option) => (
        <label key={option} style={{ display: 'block' }}>
          <input
            type="radio"
            name={`question-${question.id}`}
            checked={answers[question.id] === option}
            onChange={() => dispatch(answerQuestion({ questionId: question.id, answer: option }))}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default Question;
