const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

const api = {
    getPokemons(search) {
        let url = URL;
        if(search) {
            const searchParams = new URLSearchParams();
            searchParams.set('pokemon', search);
            const query = searchParams.toString();
            url = `${URL}?${query}`;
        }
        
        return fetch(url)
            .then(response => response.json())
            .then(response => response.results);
    }
};

export default api;