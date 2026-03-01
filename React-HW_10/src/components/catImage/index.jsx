import axios from "axios";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

const BASE_URL = "https://api.thecatapi.com/v1/images/search";

function CatImage() {

  const [catImage, setCatImage] = useState("");

  const getCatImage = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setCatImage(response.data[0].url);
    }
      catch (error) {
        console.error("Error fetching cat image:", error);
      }
    }

    useEffect(() => {
      getCatImage();
    }, []);
  

  return (
    <div className={styles.container}>
      <h1>Random Cat Image</h1>
      {catImage && (
        <img src={catImage} alt="A cute cat" style={{ marginTop: '20px', width: '400px' }} />
      )}
      <button onClick={getCatImage} className={styles.randomBtn}>Load New Image</button>
    </div>
  );
}

export default CatImage;