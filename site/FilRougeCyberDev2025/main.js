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
// boutons et filtre
const nav = document.querySelector('main').querySelector('nav').querySelectorAll('a');
console.log(nav);
const filtreDiv = body.getElementsByClassName('filtersButtons');
const filters = filtreDiv[0].querySelectorAll('button');
console.log(filters);
const filterList = filtreDiv[0].querySelectorAll('ul');
console.log(filterList);
const search = document.getElementById('searchButton');
console.log(search);
// footer
const footer = document.querySelector('footer');
console.log(footer);
const links = footer.querySelectorAll("a");
console.log(links);
// contenu page
const intro = document.querySelector('article');
console.log(intro);


// dark Mod
let darkMod = document.querySelector('input');
console.log(darkMod);
darkMod.addEventListener('click',()=>{
    if(darkMod.checked){
// header
        logo.src = './design/darkModeLogo.png';
        body.classList.add('darkMod1');
        header.classList.add('darkMod2');
        checkbox.classList.add('darkMod1');
        checkbox.classList.add('darkMod5');
        connexion.classList.remove('interaction1');
        connexion.classList.add('darkMod6')
        breadCrumb[0].classList.remove('interaction2');
        breadCrumb[0].classList.add('darkMod5')
// footer
        footer.classList.add('darkMod2');
        links[0].classList.remove('interaction2');
        links[0].classList.add('darkMod5');
        links[1].classList.remove('interaction2');
        links[1].classList.add('darkMod5');
        links[2].classList.remove('interaction2');
        links[2].classList.add('darkMod5');
        links[3].classList.remove('interaction2');
        links[3].classList.add('darkMod5');
// Navigation
        nav[0].classList.remove('interaction');
        nav[0].classList.add('darkMod3');
        nav[1].classList.remove('interaction');
        nav[1].classList.add('darkMod3');
        nav[2].classList.remove('interaction');
        nav[2].classList.add('darkMod3');
        nav[3].classList.remove('interaction');
        nav[3].classList.add('darkMod3');
// main
        intro.classList.add('darkMod2');
        intro.classList.add('darkMod5');
        search.classList.remove('search');
        search.classList.add('searchDark');
        filters[0].classList.remove('filter1');
        filters[0].classList.add('filter1Dark');
        filters[1].classList.remove('filter2');
        filters[1].classList.add('filter2Dark');
        filters[2].classList.remove('filter3');
        filters[2].classList.add('filter3Dark');
        filterList[0].classList.remove('color2');
        filterList[0].classList.add('darkMod4');
        filterList[1].classList.remove('color2');
        filterList[1].classList.add('darkMod4');
        filterList[2].classList.remove('color2');
        filterList[2].classList.add('darkMod4');
    }else {
// header
        logo.src = './design/logo.png';
        body.classList.remove('darkMod1');
        header.classList.remove('darkMod2');
        checkbox.classList.remove('darkMod1');
        checkbox.classList.remove('darkMod5');
        connexion.classList.add('interaction1');
        connexion.classList.remove('darkMod6')
        breadCrumb[0].classList.add('interaction2');
        breadCrumb[0].classList.remove('darkMod5')
// footer
        footer.classList.remove('darkMod2');
        links[0].classList.add('interaction2');
        links[0].classList.remove('darkMod5');
        links[1].classList.add('interaction2');
        links[1].classList.remove('darkMod5');
        links[2].classList.add('interaction2');
        links[2].classList.remove('darkMod5');
        links[3].classList.add('interaction2');
        links[3].classList.remove('darkMod5');
// Navigation
        nav[0].classList.add('interaction');
        nav[0].classList.remove('darkMod3');
        nav[1].classList.add('interaction');
        nav[1].classList.remove('darkMod3');
        nav[2].classList.add('interaction');
        nav[2].classList.remove('darkMod3');
        nav[3].classList.add('interaction');
        nav[3].classList.remove('darkMod3');
// main
        intro.classList.remove('darkMod2');
        intro.classList.remove('darkMod5');
        search.classList.add('search');
        search.classList.remove('searchDark');
        filters[0].classList.add('filter1');
        filters[0].classList.remove('filter1Dark');
        filters[1].classList.add('filter2');
        filters[1].classList.remove('filter2Dark');
        filters[2].classList.add('filter3');
        filters[2].classList.remove('filter3Dark');
        filterList[0].classList.add('color2');
        filterList[0].classList.remove('darkMod4');
        filterList[1].classList.add('color2');
        filterList[1].classList.remove('darkMod4');
        filterList[2].classList.add('color2');
        filterList[2].classList.remove('darkMod4');
    }
    
});