
class NumericalInput extends HTMLInputElement {
    constructor() {
        super();
        this.addEventListener('input', this.updateStyle)
    }

    updateStyle() {
        let value = Number(this.value);

        if (!isFinite(value))
            this.className = 'unknownValue';
        else
            this.className = '';
    }
}

window.customElements.define('numerical-input', NumericalInput, {extends: 'input'})