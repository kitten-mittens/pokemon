import Component from './Component.js';
// import PokemonItem from './PokemonItem.js';

class Sort extends Component {

    // render() {
    //     const form = this.renderDOM();
    //     const pokemon = new PokemonItem({ pokemon });
    //     form.addEventListener('submit', event => event.preventDefault());

    //     form.addEventListener('input', () => {
    //         const formData = new FormData(form);

    //         pokemon.sort((a, b) => a.weight - b.weight);
    //         console.log(form);
            
    //     });

    //     return form;
    // }

    renderTemplate() {
        return /*html*/`
            <form class="sort">
                <label>Sort by Weight:
                    <select name="weight">
                    <option value="heaviest">Heaviest</option>
                    <option value="lightest">Lightest</option>
                    </select>
                </label>
            </form>
        `;
    }
}
export default Sort;