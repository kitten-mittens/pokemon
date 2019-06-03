import QUERY from '../QUERY.js';
const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

const api = {
    getPokemons(queryProps) {
        const query = QUERY.stringify(queryProps);
        const url = `${URL}?${query}`;
    
        return fetch(url)
            .then(response => response.json());
            
    }
};

export default api;