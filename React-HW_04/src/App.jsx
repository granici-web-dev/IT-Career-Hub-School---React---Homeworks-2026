import { useState } from "react";
import './App.css';
import CitySelector from './components/citySelector';
import CityCard from "./components/cityCard";

function App() {
  const cities = [
    {
      name: 'Tokyo',
      description:
        'The capital of Japan, known for its neon lights, crowds, and modern architecture.',
      imageUrl:
        'https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/gettyimages-1390815938?_a=BAVAZGID0',
      facts: [
        'Tokyo is the most populous metropolitan area in the world.',
        'The Tokyo Tower, one of the tallest structures in Japan, is located here.',
        'Tokyo hosts numerous cultural events and festivals.',
      ],
    },
    {
      name: 'Kyoto',
      description:
        'A city on the island of Honshu, famous for its many classical Buddhist temples, gardens, imperial palaces, Shinto shrines, and traditional wooden houses.',
      imageUrl:
        'https://www.kiwi.com/stories/wp-content/uploads/2022/05/best-things-in-kyoto-center-tower_body.jpg',
      facts: [
        'Kyoto is home to more than 1,600 Buddhist temples.',
        'The city served as the capital of Japan for over a thousand years.',
      ],
    },
    {
      name: 'Osaka',
      description:
        'A city in the central part of Honshu, known for its modern attractions and vibrant nightlife.',
      imageUrl:
        'https://photos.smugmug.com/Osaka/Osaka-Categories/i-f7XZKj7/1/LKtXzRwDm3zVS4LsRFrQQq6bBqrDTgJsJnhbVnTCS/L/First_Time_in_Osaka-L.jpg',
      facts: [
        'Osaka is famous for its castle, which played a key role in the unification of Japan in the 16th century.',
        'The city is considered the culinary capital of Japan.',
      ],
    },
    {
      name: 'Hokkaido',
      description:
        'The northernmost island of Japan, known for its nature, snow festivals, and unique culture.',
      imageUrl:
        'https://cdn.cheapoguides.com/wp-content/uploads/sites/3/2020/05/asahikawa-hokkaido-iStock-823846930-1024x600.jpg',
      facts: [
        'Hokkaido offers excellent conditions for winter sports, especially skiing and snowboarding.',
        'In summer, the island attracts tourists with its blooming lavender fields.',
      ],
    },
    {
      name: 'Nagoya',
      description:
        'A city in central Honshu, known for its industrial influence and historical landmarks.',
      imageUrl:
        'https://assets-guidebook.isango.com/wp-content/uploads/2021/04/Nagoya-featured.jpg',
      facts: [
        'Nagoya is one of Japan’s most important industrial cities and a center of automobile manufacturing.',
        'The famous Nagoya Castle with its golden dolphin ornaments is located here.',
      ],
    },
  ];

  const [selectedCity, setSelectedCity] = useState(cities[0]);

  const handleCityChange = (cityName) => {
    const city = cities.find((c) => c.name === cityName);
    setSelectedCity(city);
  };


  return (
    <>
      <CitySelector cities={cities} onSelectCity={handleCityChange} />
      <CityCard city={selectedCity} />
    </>
  );
}

export default App;
