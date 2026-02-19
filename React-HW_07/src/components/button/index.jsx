import { useContext } from 'react';
import LanguageContext from '../../context/languageContext';
import styles from './styles.module.css'

function Button() {
  const { setLanguage, english, german } = useContext(LanguageContext);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === english ? german : english));
  };

  return <button className={styles.button} onClick={toggleLanguage}>Switch language</button>;
}

export default Button;
