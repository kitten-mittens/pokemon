import Component from './Component.js';
import hashStorage from '../hash-storage.js';

class Sort extends Component {

    render() {
        const form = this.renderDOM();
        const select = form.querySelector('select');

        form.addEventListener('submit', event => event.preventDefault());

        form.addEventListener('input', () => {
            const direction = select.value;
            hashStorage.set({ sort: 'weight', direction });
        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form class="sort">
                <label>Sort by Weight:
                    <select name="weight" id="weight">
                    <option value="" hidden disabled selected></option>
                    <option value="desc">Heaviest</option>
                    <option value="asc">Lightest</option>
                    </select>
                </label>
            </form>
        `;
    }
}
export default Sort;