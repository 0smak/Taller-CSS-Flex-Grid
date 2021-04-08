'use strict';

let showNav = false

const flipNav = () => {
    showNav = !showNav;
    document.querySelector('#navbar').style.display = !!showNav ? 'block' : 'none';
}

document.querySelector('#hamburger').addEventListener('click', flipNav, false);

window.onunload = () => {
    document.querySelector('#hamburger').clickListener.removeEventListener('click', flipNav);
    return;
}