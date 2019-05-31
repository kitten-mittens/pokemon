import Component from './Component.js';
import Header from './Header.js';
import PokemonList from './PokemonList.js';
import api from '../services/pokemon-api.js';
import Paging from './Paging.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        //this renders Header
        const header = new Header();
        const headerDOM = header.render();
        
        //this renders App/Main
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const paging = new Paging();
        main.appendChild(paging.render());

        // this renders main list
        const pokemonList = new PokemonList({ pokemons: [] });
        main.appendChild(pokemonList.render());

        function loadPokemon() {
            const params = window.location.hash.slice(1);

            const searchParams = new URLSearchParams(params);
            const search = searchParams.get('search');

            api.getPokemons(search)
                .then(pokemons => {
                    pokemonList.update({ pokemons });
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