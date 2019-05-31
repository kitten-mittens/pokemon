import PokemonItem from '../src/components/PokemonItem.js';

const test = QUnit.test;

QUnit.module('Pokemon Item');

test('renders template from data', assert => {
    const pokemon = {
        '_id': '5cef3501ef6005a77cd4fd16',
        'pokemon': 'venusaur',
        'color_1': '#78C850',
        'color_2': '#A040A0',
        'color_f': '#81A763',
        'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
        'pokedex': 'http://www.pokemon.com/us/pokedex/venusaur'
    };

    const pokemonItem = new PokemonItem({ pokemon });
    const rendered = pokemonItem.renderTemplate();
    
    assert.htmlEqual(rendered, /*html*/`
        <li class="pokemon-item">
            <h2>venusaur</h2>
            <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" alt="venusaur">
        </li>
    `);
});
