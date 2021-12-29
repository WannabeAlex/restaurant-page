import { createHome } from '../app/home.js';
import { createMenu } from '../app/menu.js';
import { createContact } from './contact.js';

import '../styles/index.css';
import '../styles/home.css';
import '../styles/menu.css';
import '../styles/contact.css';

const content = document.querySelector('#content');
const homeNav = document.querySelector('#home-nav');
const menuNav = document.querySelector('#menu-nav');
const contactNav = document.querySelector('#contact-nav');

createHome(content);

homeNav.addEventListener('click', () => {
    createHome(content);
});

menuNav.addEventListener('click', () => {
    createMenu(content);
});

contactNav.addEventListener('click', () => {
    createContact(content);
});