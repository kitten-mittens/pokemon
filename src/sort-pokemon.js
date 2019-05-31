function sortPokemon(pokemons, sortOptions) {
    const property = sortOptions.property;

    return pokemons.sort((a, b) => {
        if(a[property] < b[property]) {
            return 1;
        }
        else if(b[property] < a[property]) {
            return -1;
        }
        return 0;
    });
   
}
export default sortPokemon;