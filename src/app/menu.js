const pepperoniImage = require('../Images/pepperoni.jpg');
const hawaiianImage = require('../Images/hawaiian.jpg');
const cheesyBeefImage = require('../Images/cheesy-beef.jpg');

export function createMenu(element) {
    element.textContent = '';

    const container = document.createElement('div');
    container.id = 'menu-container';
    element.append(container);
    
    createTitle(container);
    
    const itemList = document.createElement('div');
    itemList.classList.add('item-list');
    container.append(itemList);
    
    const pepperoniDescrpt = 'Classic pepperoni with mozzerella cheese and tomato sauce.';
    createItem(itemList, pepperoniImage, 'Pepperoni', pepperoniDescrpt);

    const hawaiianDescrpt = 'Pineapple, beef, cheese';
    createItem(itemList, hawaiianImage, 'Hawaiian', hawaiianDescrpt);

    const cheesyBeefDescrpt = 'Cheese, Beef';
    createItem(itemList, cheesyBeefImage, 'Cheesy beef', cheesyBeefDescrpt);
}

function createTitle(element) {
    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = 'Menu';
    element.append(title);
}

function createItem(element, img, title, description) {
    const container = document.createElement('div');
    container.classList.add('item-container');
    element.append(container);

    // PREVIEW
    const imgElmt = document.createElement('img');
    imgElmt.classList.add('item-image');
    imgElmt.src = img;
    container.append(imgElmt);

    // INFORMATION
    const information = document.createElement('div');
    information.classList.add('information');
    container.append(information);

    const titleElmt = document.createElement('h4');
    titleElmt.classList.add('title');
    titleElmt.textContent = title;
    information.append(titleElmt);

    const descriptionElmt = document.createElement('p');
    descriptionElmt.classList.add('description');
    descriptionElmt.textContent = description;
    information.append(descriptionElmt);
}