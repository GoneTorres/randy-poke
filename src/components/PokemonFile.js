import PokemonPicture from './PokemonPicture';
import './PokemonFile.css';

function PokemonFile(props){
    return (
        <div className='pokemonFile'>
            <h2>{props.name}</h2>
            <div className="type1">{props.type1}</div>
            <div className="type2">{props.type2}</div>
            <PokemonPicture name={props.name} className="pic"></PokemonPicture>
            <p>{props.description}</p>
        </div>
    )
};
export default PokemonFile;
