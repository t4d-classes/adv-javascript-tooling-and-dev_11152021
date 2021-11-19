'use strict';

const template = $('<template>');

template.html(`
<form>
    <label>
        Color:
        <input type="text" name="color">
    </label>
    <button type="button">Add Color</button>
</form>
`)

class ColorForm extends HTMLElement {


    constructor() {
        super();

        $(this).append(template.contents().clone());

        this.addColorButton = $('button');
        this.colorInput = $('input');
    }

    addColor = () => {
        const color = this.colorInput.val();
        this.colorInput.val('');

        this.dispatchEvent(new CustomEvent("addcolor", { detail: { color } }))
    }

    connectedCallback() {
        this.addColorButton.on('click', this.addColor);
    }

    disconnectedCallback() {
        this.addColorButton.off('click', this.addColor);
    }

}

window.customElements.define('color-form', ColorForm);
