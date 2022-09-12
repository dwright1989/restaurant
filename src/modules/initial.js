
/* Load the page (common aspects and initial load)*/
function loadFullPage(){
    let content = document.getElementById("content");
    let commonContentDiv = loadHeader();
    content.appendChild(commonContentDiv);
    let tabContent = loadTab();
    content.appendChild(tabContent);
}

function loadHeader(){
    let commonContentDiv = document.createElement("div");
    commonContentDiv.id = "common-content";

    let bannerDiv = document.createElement("div");
    bannerDiv.id = "banner";
    let header = document.createElement("h1");
    header.innerHTML = "Billy's Bar and Burgers";

    bannerDiv.appendChild(header);
    commonContentDiv.appendChild(bannerDiv);

    // Navigation buttons
    let navigation = loadNavigation();
    commonContentDiv.appendChild(navigation);

    return commonContentDiv;
}

function loadNavigation(){
    let navigationDiv = document.createElement("div");
    navigationDiv.id = "navigation-buttons";

    // Create the links
    let homeLink = document.createElement("a");
    homeLink.classList.add("tab");
    homeLink.classList.add("active-tab");
    homeLink.id = "homeLink";
    homeLink.innerHTML= "Home";

    let menuLink = document.createElement("a");
    menuLink.classList.add("tab");
    menuLink.id = "menuLink";
    menuLink.innerHTML= "Menu";

    let contactLink = document.createElement("a");
    contactLink.classList.add("tab");
    contactLink.id = "contactLink";
    contactLink.innerHTML= "Contact";

    navigationDiv.appendChild(homeLink);
    navigationDiv.appendChild(menuLink);
    navigationDiv.appendChild(contactLink);

    return navigationDiv;

}

function loadTab(){
    let tabDiv = document.createElement("div");
    tabDiv.id = "tab";
    return tabDiv;
}

export default loadFullPage;