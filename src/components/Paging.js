import Component from './Component.js';

class Paging extends Component {
    renderTemplate() {
        return /*html*/`
            <p class="paging">
                <button>Back</button>
                <button>Next</button>
            </p>
        `;
    }
}
export default Paging;