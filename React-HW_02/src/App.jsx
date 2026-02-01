import './App.css'
import Greeting from './components/greeting';
import ShoppingList from './components/shoppingList';
import OrderStatus from './components/orderStatus';

function App() {
  const products = ['Бананы', 'Киви', 'Апельсины', 'Молоко', 'Соус', 'Хлеб'];
  const orders = [{ orderId: 123, status: 'в пути' }];

  return (
    <>
      <Greeting name="Alice" />
      <ShoppingList items={products} />

      {orders.map((order) => (
        <OrderStatus key={order.orderId} orderId={order.orderId} status={order.status} />
      ))}
    </>
  );
}


export default App
