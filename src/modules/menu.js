function loadMenuPage(){
    let content = document.getElementById("content");
    let tab = document.getElementById("tab");
    tab.innerHTML="";
    let menu = loadMenuContent();
    let menuHeading = loadMenuHeading();
    let menuItems = loadMenuItemsContent();
    let extraMenuContent = loadExtraMenuContent();

    menu.appendChild(menuHeading);
    menu.appendChild(menuItems);
    menu.appendChild(extraMenuContent);
    tab.appendChild(menu);
    assignClass()
    content.appendChild(tab);
}

function loadMenuContent(){
    let menuDiv = document.createElement("div");
    menuDiv.id = "menu-content";
    menuDiv.classList.add("tab-content");
   
    return menuDiv;
}

function loadMenuHeading(){
    let menuHeading = document.createElement("h2");
    menuHeading.innerHTML = "Menu";
    return menuHeading;
}

function loadMenuItemsContent(){
    let menuDiv = document.createElement("div");
    menuDiv.id = "menu-items";
    let foodMenu = document.createElement("div");
    foodMenu.id = "food-menu";
    let foodHeading = document.createElement("h3");
    foodHeading.classList.add("menu-label");
    foodHeading.innerHTML="Food Menu";

    let drinksMenu = document.createElement("div");
    drinksMenu.id = "drinks-menu";
    let drinksHeading = document.createElement("h3");
    drinksHeading.classList.add("menu-label");
    drinksHeading.innerHTML="Drinks Menu";

    

    foodMenu.appendChild(foodHeading);
    drinksMenu.appendChild(drinksHeading);
    menuDiv.append(foodMenu);
    menuDiv.append(drinksMenu);


    return menuDiv;
}

function loadExtraMenuContent(){
    let para = document.createElement("p");
    para.id = "menu-para";
    para.innerHTML = "Vegetarian, Vegan and Gluten Free Menus also available.";
    return para;
}

function assignClass(){
     // Assign correct class
     let menuLink = document.getElementById("menuLink");
     menuLink.classList.add("active-tab");
 
     //remove from others
     let homeLink = document.getElementById("homeLink");
     homeLink.classList.remove("active-tab");
     let contactLink = document.getElementById("contactLink");
     contactLink.classList.remove("active-tab");
}




export default loadMenuPage;