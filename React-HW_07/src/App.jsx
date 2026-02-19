import './App.css';
import LanguageContent from './components/languageContent';
import LanguageProvider from './components/languageProvider';

function App() {
  return (
    <LanguageProvider>
      <LanguageContent />
    </LanguageProvider>
  );
}

export default App;
