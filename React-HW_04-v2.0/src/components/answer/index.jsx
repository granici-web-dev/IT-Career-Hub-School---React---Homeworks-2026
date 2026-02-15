import {useState} from 'react'

function Answer({ checkAnswer }) {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    checkAnswer(input);
    setInput('');
  }

  const handleCheck = (event) => {
    setInput(event.target.value);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h3>Your answer:</h3>
      <input onChange={handleCheck} type="text" value={input} />
      <input type="submit" value="Check" />
    </form>
  );
}

export default Answer;
