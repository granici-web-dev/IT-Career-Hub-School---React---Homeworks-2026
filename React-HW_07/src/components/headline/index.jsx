import {useContext} from 'react';
import LanguageContext from '../../context/languageContext';
import styles from './styles.module.css'

function Headline() {
  const { language } = useContext(LanguageContext);

  return <h1 className={styles.headline}>{language.title}</h1>;
}

export default Headline;
