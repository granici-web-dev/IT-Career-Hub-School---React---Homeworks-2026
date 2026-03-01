import { useEffect, useState } from 'react';

function ListItems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  useEffect(() => {
    console.log('Компонент ListItems обновлен');
  }, []);

  return (
    <div>
      <form onSubmit={addItem}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {items.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default ListItems;
