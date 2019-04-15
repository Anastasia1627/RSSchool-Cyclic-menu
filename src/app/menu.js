import { Render } from './render';
import { HandlerKeyboard } from './handlerKeyboard';

const config = require('./index');


class Menu {
    buildHandler() {
        const handler = new HandlerKeyboard();
        this.handlerKeyboard = function (e) {
            handler.controls(e);
        }
    }

    create() {
        const render = new Render();
        render.start();
        this.buildHandler();
        config.DOM.addEventListener('keydown', this.handlerKeyboard);
    }

    delete() {
        config.DOM.removeEventListener('keydown', this.handlerKeyboard);
        const navigation = config.DOM.querySelector('.keyboardMenu');
        config.targetTag.removeChild(navigation);
    }
}

export { Menu };
