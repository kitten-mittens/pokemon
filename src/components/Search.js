import Component from './Component.js';

class Search extends Component {
    render() {
        const form = this.renderDOM();
        const input = form.querySelector('input');

        form.addEventListener('submit', event => {
            event.preventDefault();
            const searchParams = new URLSearchParams();
            searchParams.set('search', input.value);
            window.location.hash = searchParams.toString();
        });

        function setInputFromHash() {
            const params = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(params);
            const search = searchParams.get('search');
            input.value = search;
        }
        
        setInputFromHash();
        

        window.addEventListener('hashchange', () => {
            setInputFromHash();
        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
         <form class="search-form">
         <input name="search">
         <button class="search">⚡</button>
         </form>   
        `;
    }
}
export default Search;