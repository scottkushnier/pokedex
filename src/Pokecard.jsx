
import './Pokecard.css'

const Pokecard = (props) => {
    const imgLoc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
    return (
      <div className="pokecard">
        <p className="poke-name">{props.name}</p>
        <img className="poke-pic" src={imgLoc} />
        <p className="poke-type">Type: {props.type}</p>
        <p className="poke-exp">EXP: {props.exp} </p>
      </div>
    );
  };

export default Pokecard

