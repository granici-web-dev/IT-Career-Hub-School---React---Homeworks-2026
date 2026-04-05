import './App.css';
import { useState } from 'react';
import TaskForm from './components/Form';
import { Typography } from 'antd';
import CardEl from './components/CardEl';

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState('');

  const handleSubmit = () => {
    setSubmitted({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <>
      <Typography.Title level={2}>Форма с использованием Ant Design</Typography.Title>
      <TaskForm
        name={name}
        description={description}
        handleSubmit={handleSubmit}
        setName={setName}
        setDescription={setDescription}
      />

       <CardEl submitted={submitted} />
    </>
  );
}

export default App;
