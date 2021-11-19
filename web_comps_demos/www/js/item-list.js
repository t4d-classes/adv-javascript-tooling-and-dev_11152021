'use strict';

class ItemList extends HTMLElement {

    #items = [];

    constructor() {
        super();

        this.unorderedList = $("<ul>");

        $(this).append(this.unorderedList);
    }

    get items() {
        return this.#items;
    }

    set items(items) {

        if (this.#items === items) {
            return;
        }

        this.#items = items;

        this.unorderedList.empty();

        this.#items.forEach(item => {
            this.unorderedList.append($("<li>").text(item));
        });
    }

}

window.customElements.define('item-list', ItemList);
