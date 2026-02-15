function CityCard({ city }) {
  return (
    <div>
      <img src={city.imageUrl} alt={city.name} width={400} />
      <h3>{city.name}</h3>
      <p>{city.description}</p>

      <ul>
        {city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityCard;