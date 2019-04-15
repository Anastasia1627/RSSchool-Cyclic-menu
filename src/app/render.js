const config = require('./index');

class Render {
    start() {
        const navigation = config.DOM.createElement('nav');
        const fragment = config.DOM.createDocumentFragment();
        const array = Object.keys(config.items);
        array.forEach((elem, index) => {
            const linkItem = config.DOM.createElement('a');
            linkItem.setAttribute('href', config.items[elem]);
            linkItem.id = `menuLink_${index}`;
            linkItem.classList.add('menuLink');
            linkItem.innerHTML = `${elem.toUpperCase()}`;
            if (index === 0) {
                linkItem.classList.add('active');
            }
            fragment.appendChild(linkItem);
        });
        config.targetTag.appendChild(navigation);
        navigation.classList.add('keyboardMenu');
        navigation.appendChild(fragment);
    }
}

export { Render };
