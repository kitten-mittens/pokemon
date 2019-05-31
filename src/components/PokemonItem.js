import Component from './Component.js';

class PokemonItem extends Component {
    
    renderTemplate() {
        const pokemon = this.props.pokemon;
        return /*html*/ `
        <li class="pokemon-item">
        <h2>${pokemon.pokemon}</h2>
        <img src="${pokemon.url_image}" alt="${pokemon.pokemon}">
        <p>Weight: ${pokemon.weight}kg</p>
        </li>
        `;
    }
}

export default PokemonItem;


