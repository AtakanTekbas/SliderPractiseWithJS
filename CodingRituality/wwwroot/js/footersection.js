/*footer section js*/

/*start of footer section >  contact section events */
/*Email Icon Events*/

const footerSectionEmail = document.getElementById("footerSectionEmail");

footerSectionEmail.addEventListener("mouseover", () => {
    footerSectionEmail.style.top = "23%";
});

footerSectionEmail.addEventListener("mouseout", () => {
    footerSectionEmail.style.top = "30%";
});


/*Phone Icon Events*/

const footerSectionPhone = document.getElementById("footerSectionPhone");

footerSectionPhone.addEventListener("mouseover", () => {
    footerSectionPhone.style.top = "23%";
});

footerSectionPhone.addEventListener("mouseout", () => {
    footerSectionPhone.style.top = "30%";
});

/*Linkedin Icon Events*/

const footerSectionLinkedin = document.getElementById("footerSectionLinkedin");

footerSectionLinkedin.addEventListener("mouseover", () => {
    footerSectionLinkedin.style.top = "23%";
});

footerSectionLinkedin.addEventListener("mouseout", () => {
    footerSectionLinkedin.style.top = "30%";
});

/*Github Icon Events*/

const footerSectionGithub = document.getElementById("footerSectionGithub");

footerSectionGithub.addEventListener("mouseover", () => {
    footerSectionGithub.style.top = "23%";
});

footerSectionGithub.addEventListener("mouseout", () => {
    footerSectionGithub.style.top = "30%";
});

/* end of footer section >  contact section events */

/*start of footer section > contact information events */

const footerSectionInformationDiv = document.getElementById("ContactInformation");
const footerSectionInformationP = document.getElementById("ContactInformationP");

footerSectionEmail.addEventListener("click", () => {
    footerSectionInformationDiv.style.visibility = "visible";
    footerSectionInformationP.style.visibility = "visible";
    footerSectionInformationP.innerHTML = "atakantekbas@outlook.com";
});

footerSectionPhone.addEventListener("click", () => {
    footerSectionInformationDiv.style.visibility = "visible";
    footerSectionInformationP.style.visibility = "visible";
    footerSectionInformationP.innerHTML = "+90 123 4567890";
});

footerSectionLinkedin.addEventListener("click", () => {
    footerSectionInformationDiv.style.visibility = "visible";
    footerSectionInformationP.style.visibility = "visible";
    footerSectionInformationP.innerHTML = "linkedin.com/in/atakantekbas/";
});

footerSectionGithub.addEventListener("click", () => {
    footerSectionInformationDiv.style.visibility = "visible";
    footerSectionInformationP.style.visibility = "visible";
    footerSectionInformationP.innerHTML = "github.com/AtakanTekbas";
});

/*end of footer section > contact information events */
