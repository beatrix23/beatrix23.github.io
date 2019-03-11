console.info("my first js file")

var name = "Beatrix";
var employed = false;

console.warn("employed");
console.warn(employed);

console.info("Name:");
console.info(name);

name = "Bea";

console.info("Name:");
console.info(name);

function getWelcomeMsg() {
    return "Wellcome to my page!";
}


function getColor() {
    var date = new Date ();
    console.log(date.getMinutes());
    if(date.getMinutes() > 18) {
         return "green"
    }
    return "red";

}


var wellcome = getWelcomeMsg();
console.info(wellcome);

var summaryElement = document.getElementById("summary");
console.info("summaryElement", summaryElement);
var color = getColor();
summaryElement.style.color = color;

//first example
function hideHomePage() {
    document.getElementById('home-page').style.display = 'none';
}
 
function showSkillsPage() {
    document.getElementById('skills-page').style.display = 'block';
}
function clickOnHome() {
    hidePage('skills-page');
    hidePage('languages-page');
    hidePage('about-page');
    showPage('home-page');
 }

function clickOnSkills() {
   // hideHomePage();
   // showSkillsPage();
   hidePage('home-page');
   hidePage('languages-page');
   hidePage('about-page');
   showPage('skills-page');
}

function clickOnLanguages() {
    hidePage('home-page');
    hidePage('about-page');
    hidePage('skills-page');
    showPage('languages-page');
}

function clickOnAbout () {
    hidePage('home-page');
    hidePage('skills-page');
    hidePage('languages-page');
    showPage('about-page');
}
//first exemple-end

function hidePage(page) {
    document.getElementById(page).style.display = 'none';
}
 
function showPage(page) {
    document.getElementById(page).style.display = 'block';
}