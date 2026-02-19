import { useState } from 'react';
import LanguageContext from '../../context/languageContext'

const english = { title: 'English language was chosen' };
const german = { title: 'Deutsch ist ausgewählt' };

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(english);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, english, german }}>
      {children}
    </LanguageContext.Provider>
  );
}


export default LanguageProvider;
