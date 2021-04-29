import "./PokemonPicture.css";

function PokemonPicture(props) {
  const name = "https://img.pokemondb.net/artwork/large/" + props.name.toLowerCase() + ".jpg";
  return (
    <div>
      <img src={name} alt="Pokémon" />
    </div>
  );
};

export default PokemonPicture;
