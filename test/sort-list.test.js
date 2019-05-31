import sortPokemon from '../src/sort-pokemon.js';

const test = QUnit.test;

QUnit.module('sortlist');

const venusaur = {
    '_id': '5cef3501ef6005a77cd4fd16',
    'pokemon': 'venusaur',
    'height': 20,
    'weight': 1000,
};

const bulbasaur = {
    '_id': '5cef3501ef6005a77cd4fd17',
    'pokemon': 'bulbasaur',
    'height': 7,
    'weight': 69,
};

const pokemons = [venusaur, bulbasaur];

test('sort by heaviest', assert => {
    const sortOptions = {
        property: 'weight'
    };

    const sorted = sortPokemon(pokemons, sortOptions);

    assert.deepEqual(sorted, [venusaur, bulbasaur]);
});
