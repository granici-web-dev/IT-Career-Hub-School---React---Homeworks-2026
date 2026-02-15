import './App.css';
import Headline from './components/headline';
import Logo from './components/logo'
import Socials from './components/socialsIcons';
import Subtitle from './components/subtitle';

function App() {
  return (
    <>
      <Logo />
      <div className='container'>
        <Headline />
        <Subtitle />
        <Socials />
      </div>
    </>
  );
}

export default App;
