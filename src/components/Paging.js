import Component from './Component.js';
import hashStorage from '../hash-storage.js';

function getCurrentPage() {
    const queryProps = hashStorage.get();
    let page = queryProps.page ? parseInt(queryProps.page) : 1;
    return page;
}

class Paging extends Component {
    render() {
        const dom = this.renderDOM();

        //gets dom for buttons
        const prevButton = dom.querySelector('.prev');
        const nextButton = dom.querySelector('.next');

        //prevents prev button from going back too far
        if(!prevButton) {
            return dom;
        }    

        function updatePage(change) {
            let page = getCurrentPage();
            page += change;
            hashStorage.set({ page });
        }

        prevButton.addEventListener('click', () => {
            updatePage(-1);
        });
            
        nextButton.addEventListener('click', () => {
            updatePage(1);
        });
        
        return dom;
    
    }
    renderTemplate() {
        const currentPage = getCurrentPage();
        const perPage = 20;
        const totalCount = this.props.totalCount;

        if(!totalCount) {
            return /*html*/ `
                <p>Whoops! No Pokemon</p>
            `;
        }
        const lastPage = Math.ceil(totalCount / perPage);

        return /*html*/`
            <p class="paging">
                <button class="prev" ${currentPage === 1 ? 'disabled' : ''}><img class="buttons" src="./assets/pokemon.png" alt="Back Button"></button>
                <span>Page ${currentPage} of ${lastPage}</span>
                <button class="next" ${currentPage === lastPage ? 'disabled' : ''}><img class="buttons" src="./assets/pokemon.png" alt="Next Button"></button>
            </p>
        `;
    }
}
export default Paging;
