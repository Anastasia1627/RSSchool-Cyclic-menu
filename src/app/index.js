import { Menu } from './menu';

const items = {
    main: '#',
    search: '#',
    library: '#',
    settings: '#',
};

const DOM = window.document;
const targetTag = DOM.querySelector('body');

export { items, targetTag, DOM };


const menu = new Menu();
menu.create();
// menu.delete();
