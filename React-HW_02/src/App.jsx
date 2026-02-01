import './App.css'
import Greeting from './components/greeting';
import ShoppingList from './components/shoppingList';

function App() {
  const products = ['Бананы', 'Киви', 'Апельсины', 'Молоко', 'Соус', 'Хлеб']

  return (
    <>
      <Greeting name={'Alice'} />
      <ShoppingList items={products} />
    </>
  );
}

export default App
