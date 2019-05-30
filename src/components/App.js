import Component from './Component.js';
import Header from './Header.js';
import PokemonList from './PokemonList.js'
import api from '../services/pokemon-api.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        //this renders Header
        const header = new Header();
        const headerDOM = header.render();
        
        //this renders App/Main
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        // this renders main list
        const pokemonList = new PokemonList({ pokemons: [] });
        main.appendChild(pokemonList.render());
        
        api.getPokemons()
            .then(pokemons => {
                pokemonList.update({ pokemons });
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;