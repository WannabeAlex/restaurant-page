export function createContact(element) {
    element.textContent = '';

    const container = document.createElement('div');
    container.id = 'contact-container';
    element.append(container);

    createTitle(container);

    const itemList = document.createElement('div');
    itemList.classList.add('item-list');
    container.append(itemList);

    createItem(itemList, 'Manager', '555-555-5555', 'defnotfake@superreal.com');
    createItem(itemList, 'Random', '555-555-5555', 'defnotfake@superreal.com');
}

function createTitle(element) {
    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = 'Contact Us';

    element.append(title);
}

function createItem(element, title, ...info) {
    const container = document.createElement('div');
    container.classList.add('item-container');
    element.append(container);

    const titleElmt = document.createElement('h4');
    titleElmt.classList.add('title');
    titleElmt.textContent = title;
    container.append(titleElmt);

    const information = document.createElement('div');
    information.classList.add('information');
    container.append(information);

    for (const i of info) {
        const item = document.createElement('div');
        item.textContent = i;
        information.append(item);
    }
}