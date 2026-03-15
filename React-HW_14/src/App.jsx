import './App.css';
import User from './components/user';
import Headline from './components/headline';
import UserForm from './components/userForm'

function App() {
  return (
    <>
      <Headline title={'User profile'} />
      <User />
      <UserForm />
    </>
  );
}

export default App;
