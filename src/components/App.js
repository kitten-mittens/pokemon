import Component from './Component.js';
import Header from './Header.js';
import PokemonList from './PokemonList.js';
import api from '../services/pokemon-api.js';
import Paging from './Paging.js';
import hashStorage from '../hash-storage.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        //this renders Header
        const header = new Header();
        const headerDOM = header.render();
        
        //this renders App/Main
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const paging = new Paging({ totalCount: 0 });
        main.appendChild(paging.render());

        // this renders main list
        const pokemonList = new PokemonList({ pokemons: [] });
        main.appendChild(pokemonList.render());

        function loadPokemon() {
            const queryProps = hashStorage.get();

            api.getPokemons(queryProps)
                .then(pokemons => {
                    const totalCount = pokemons.count;
                    pokemonList.update({ pokemons: pokemons.results });
                    paging.update({ totalCount });
                });
        }
            
        loadPokemon();

        window.addEventListener('hashchange', () => {
            loadPokemon();
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