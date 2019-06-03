import Component from './Component.js';
import Search from './Search.js';
import Sort from './Sort.js';

class Header extends Component {
    
    render() {
        const dom = this.renderDOM();
        const search = new Search();
        dom.appendChild(search.render());

        const sort = new Sort();
        dom.appendChild(sort.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <header>
                <h1>PokeDex</h1>
            </header>
        `;
    }
}
export default Header; 