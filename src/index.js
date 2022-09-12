import './style.css';
import bannerImg from './background.jpg';
import drinkImg from './drink.jpg';
import burgerImg from './burger.jpg';


/*
This file loads the page and navigation bar*/

import loadFullPage from './modules/initial';
import loadHomePage from './modules/home';
import loadMenuPage from './modules/menu';
/*import loadContactPage from './modules/contact';*/

/* Add event listeners to the navigation bar */

loadPage();

/* Load the page*/

function loadPage(){
    loadFullPage();
    loadHomePage();
    addEL();
}

function addEL(){
    const homeButton = document.getElementById('homeLink');
    const menuButton = document.getElementById('menuLink');
    const contactButton = document.getElementById('contactLink');

    homeButton.addEventListener('click', loadHomePage);
    menuButton.addEventListener('click', loadMenuPage);
    //contactButton.addEventListener('click', loadContactPage );
}



