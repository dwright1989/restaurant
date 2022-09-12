function loadHomePage(){
    let content = document.getElementById("content");
    let tab = document.getElementById("tab");
    tab.innerHTML="";
    let home = loadHomeContent();
    let about = loadAboutContent();
    let openingHours = loadOpeningHours();

    home.appendChild(about);
    home.appendChild(openingHours);
    tab.appendChild(home);
    assignClass();
    content.appendChild(tab);
}

function loadHomeContent(){
    let homeDiv = document.createElement("div");
    homeDiv.id = "home-content";
    homeDiv.classList.add("tab-content");
    return homeDiv;
}

function loadAboutContent(){
    let aboutDiv = document.createElement("div");
    aboutDiv.id = "about";
    // Heading
    let aboutHeading = document.createElement("h1");
    aboutHeading.id = "about-heading";
    aboutHeading.innerHTML = "About";
    // Paragraph
    let aboutParagraph = document.createElement("p");
    aboutParagraph.id ="about-para";
    aboutParagraph.innerHTML = "Billy's Bar and Burgers was established in 1992 by Billy Hanson and his son Kevin. Since then, their business has gone on to win several awards including BURGER OF THE YEAR in 2021. Billy's Bar and Burgers sells a variety of drinks including coffee, cocktails, craft beer and alcohol free beveridges. Come along and try the best burgers in town!"

    aboutDiv.appendChild(aboutHeading);
    aboutDiv.appendChild(aboutParagraph);
    

    return aboutDiv;
}

function loadOpeningHours(){

    let openingHoursDiv = document.createElement("div");
    openingHoursDiv.id = "opening-hours";

    //Heading
    let openingHoursHeading = document.createElement("h2");
    openingHoursHeading.innerHTML = "Opening Hours";
    // Times 
    let timesDiv = document.createElement("div");
    timesDiv.id = "times";
    let paraOne = document.createElement("p");
    paraOne.innerHTML = "Sunday-Wednesday: 10am - 11pm";
    let paraTwo = document.createElement("p");
    paraTwo.innerHTML = "Thursday: 10am - 12pm";
    let paraThree = document.createElement("p");
    paraThree.innerHTML = "Friday: 10am - 2am";
    let paraFour = document.createElement("p");
    paraFour.innerHTML = "Saturday: 10am - 2am";

    timesDiv.appendChild(paraOne);
    timesDiv.appendChild(paraTwo);
    timesDiv.appendChild(paraThree);
    timesDiv.appendChild(paraFour);

    openingHoursDiv.appendChild(openingHoursHeading);
    openingHoursDiv.appendChild(timesDiv);
    return openingHoursDiv;
}

function assignClass(){
    // Assign correct class
    let homeLink = document.getElementById("homeLink");
    homeLink.classList.add("active-tab");

    //remove from others
    let menuLink = document.getElementById("menuLink");
    menuLink.classList.remove("active-tab");
    let contactLink = document.getElementById("contactLink");
    contactLink.classList.remove("active-tab");
}


export default loadHomePage;