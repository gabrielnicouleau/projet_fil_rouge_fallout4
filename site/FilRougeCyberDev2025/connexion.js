// éléments à transformer
const body = document.querySelector('body');
console.log(body);
// header
const header = document.querySelector('header');
console.log(header);
const checkbox = document.querySelector('span');
console.log(checkbox);
const logo = document.querySelector('img');
console.log(logo);
const connexion = header.querySelector("div").querySelector("a");
console.log(connexion);
const breadCrumb = header.querySelector('nav').querySelectorAll('a');
console.log(breadCrumb);
// footer
const footer = document.querySelector('footer');
console.log(footer);
const links = footer.querySelectorAll("a");
console.log(links);
// contenu page



// darkmod
let darkMod = document.querySelector('input');
console.log(darkMod);
darkMod.addEventListener('click',()=>{
    if(darkMod.checked){
        logo.src = './design/darkModeLogo.png';
        body.classList.toggle('darkMod1');
        header.classList.toggle('darkMod2');
        checkbox.classList.toggle('darkMod4');
        connexion.classList.toggle('darkMod3');
        breadCrumb.forEach(element => {
                element.classList.toggle('darkMod4')
        });      
        footer.classList.toggle('darkMod2');
        links.forEach(element => {
                element.classList.toggle('darkMod4')
        });
    } else{
        logo.src = './design/logo.png';
        body.classList.toggle('darkMod1');
        header.classList.toggle('darkMod2');
        checkbox.classList.toggle('darkMod4');
        connexion.classList.toggle('darkMod3');
        breadCrumb.forEach(element => {
                element.classList.toggle('darkMod4')
        });      
        footer.classList.toggle('darkMod2');
        links.forEach(element => {
                element.classList.toggle('darkMod4')
        });
    }
});