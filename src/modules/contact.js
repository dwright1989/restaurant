function loadContactPage(){
    let content = document.getElementById("content");
    let tab = document.getElementById("tab");
    tab.innerHTML="";
    let contact = loadContactContent();
    tab.appendChild(contact);
    assignClass();
    content.appendChild(tab);
}

function loadContactContent(){
    let contactDiv = document.createElement("div");
    contactDiv.id = "contact-content";
    contactDiv.classList.add("tab-content");

    let contactUs = document.createElement("h2");
    contactUs.innerHTML = "Contact Us";
    let phone = document.createElement("h3");
    phone.innerHTML = "Phone";
    let phoneNumber = document.createElement("p");
    phoneNumber.innerHTML = "01234 56690";
    let email = document.createElement("h3");
    email.innerHTML = "Email";
    let emailAddress = document.createElement("p");
    emailAddress.innerHTML = "billyburgers@burgers.com";
    let location = document.createElement("h3");
    location.innerHTML = "Location";
    let locationAddress = document.createElement("p");
    locationAddress.innerHTML = "123 Made Up Road, Fantasyland";

    contactDiv.appendChild(contactUs);
    contactDiv.appendChild(phone);
    contactDiv.appendChild(phoneNumber);
    contactDiv.appendChild(email);
    contactDiv.appendChild(emailAddress);
    contactDiv.appendChild(location);
    contactDiv.appendChild(locationAddress);

    return contactDiv;
}




function assignClass(){
    // Assign correct class
    let contactLink = document.getElementById("contactLink");
    contactLink.classList.add("active-tab");

    //remove from others
    let menuLink = document.getElementById("menuLink");
    menuLink.classList.remove("active-tab");
    let homeLink = document.getElementById("homeLink");
    homeLink.classList.remove("active-tab");
}


export default loadContactPage;