import { Style } from './style';

const config = require('./index');

class HandlerKeyboard {
    constructor() {
        this.currentIndex = 0;
        this.style = new Style();
        this.maxIndex = Object.keys(config.items).length;
    }

    decrementIndex(currentIndex) {
        return (currentIndex - 1 + this.maxIndex) % this.maxIndex;
    }

    incrementIndex(currentIndex) {
        return (currentIndex + 1) % this.maxIndex;
    }

    controls(event) {
        const currentItem = config.DOM.getElementById(`menuLink_${this.currentIndex}`);
        if (event.key === 'ArrowLeft') {
            const targetIndex = this.decrementIndex(this.currentIndex);
            const nextItem = config.DOM.getElementById(`menuLink_${targetIndex}`);
            this.style.change(currentItem, nextItem);
            this.currentIndex = targetIndex;
        } else if (event.key === 'ArrowRight' || event.key === 'Enter') {
            const targetIndex = this.incrementIndex(this.currentIndex);
            const nextItem = config.DOM.getElementById(`menuLink_${targetIndex}`);
            this.style.change(currentItem, nextItem);
            this.currentIndex = targetIndex;
        }
    }
}

export { HandlerKeyboard };
