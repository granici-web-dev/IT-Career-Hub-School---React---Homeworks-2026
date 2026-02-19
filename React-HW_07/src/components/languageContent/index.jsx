import { useContext } from "react";
import Button from "../button";
import Headline from "../headline";
import LanguageContext from '../../context/languageContext';

function LanguageContent() {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <Headline title={language.title} />
      <Button />
    </div>
  );
}

export default LanguageContent;