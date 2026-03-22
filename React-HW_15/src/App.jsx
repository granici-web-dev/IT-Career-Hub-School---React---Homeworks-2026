import { useState, useCallback, useMemo } from 'react';
import './App.css';
import UserList from './components/UserList';

const userList = [
  { id: 1, name: 'Alexander' },
  { id: 2, name: 'Maria' },
  { id: 3, name: 'Dmitry' },
  { id: 4, name: 'Anna' },
  { id: 5, name: 'Sergey' },
  { id: 6, name: 'Elena' },
  { id: 7, name: 'Andrey' },
  { id: 8, name: 'Olga' },
  { id: 9, name: 'Maxim' },
  { id: 10, name: 'Anastasia' },
  { id: 11, name: 'Ivan' },
  { id: 12, name: 'Ekaterina' },
  { id: 13, name: 'Artem' },
  { id: 14, name: 'Natalia' },
  { id: 15, name: 'Mikhail' },
];

function App() {
  const [filter, setFilter] = useState('');

  const filterUsers = useCallback((text) => {
    return userList.filter((user) => {
      return user.name.toLowerCase().includes(text.toLowerCase())
    })
  }, []);

  const filteredUsers = useMemo(() => filterUsers(filter), [filter, filterUsers]);

  return (
    <>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Поиск по имени..."
      />
      <UserList users={filteredUsers} />
    </>
  );
}

export default App;
