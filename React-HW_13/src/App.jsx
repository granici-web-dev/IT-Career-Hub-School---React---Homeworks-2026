import Filter from './components/Filter';
import UserList from './components/UserList';

function App() {
  return (
    <div className="max-w-lg mx-auto p-10">
      <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">User List</h1>
      <Filter />
      <UserList />
    </div>
  );
}

export default App;
