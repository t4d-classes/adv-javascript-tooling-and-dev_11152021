'use strict';

class ToolHeader extends HTMLElement {

    constructor() {
        super();

        this.innerHTML = `<h1>${this.headerText}</h1>`;
    }

    get headerText() {
        return this.getAttribute('header-text') || '';
    }

}

window.customElements.define('tool-header', ToolHeader);
