function CitySelector({ cities, onSelectCity }) {
  return (
    <select onChange={(e) => onSelectCity(e.target.value)}>
      {cities.map((city) => (
        <option key={city.name} value={city.name}>
          {city.name}
        </option>
      ))}
    </select>
  );
}

export default CitySelector;
