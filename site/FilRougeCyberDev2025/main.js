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
// navigation
const nav = document.querySelector('main').querySelector('nav').querySelectorAll('a');
console.log(nav);
// footer
const footer = document.querySelector('footer');
console.log(footer);
const links = footer.querySelectorAll("a");
console.log(links);
// contenu page
const intro = document.querySelector('main').querySelector('section').querySelector('article');
console.log(intro);
const search = body.querySelector('section').querySelector('form').querySelector('button');
console.log(search);
const filtreDiv = body.querySelector('section').querySelectorAll('div');
console.log(filtreDiv);
const filters = filtreDiv[1].querySelectorAll('button');
console.log(filters);
const filterList = filtreDiv[1].querySelectorAll('ul');
console.log(filterList);


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
        nav.forEach(element => {
                element.classList.toggle('darkMod3')
        });
        intro.style.backgroundColor = 'var(--darkColor3)';
        intro.style.color = 'var(--darkColor2)';
        intro.classList.toggle('darkMod3');
        search.classList.toggle('darkMod5')
        search.style.backgroundColor = 'var(--darkColor2)';
        search.style.color = 'var(--darkColor1)';
        filters.forEach(element =>{
                element.style.backgroundColor='var(--darkColor2)';
                element.style.boxShadow = 'var(--fontColor2) 1px 0 10px';
        });
        filterList.forEach(element =>{
                element.style.backgroundColor = 'var(--darkColor2)'
        });
        localStorage.setItem('darkModeCase', 'true'); //!stockage dans le local storage
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
        nav.forEach(element => {
                element.classList.toggle('darkMod3')
        });
        intro.style.backgroundColor = 'var(--mainColor1)';
        intro.style.color = 'var(--fontColor2)';
        intro.classList.toggle('darkMod3');
        search.classList.toggle('darkMod5');
        search.style.backgroundColor = 'var(--search)';
        search.style.color = 'var(--fontColor2)';
        filters[0].style.backgroundColor='var(--filter1)';
        filters[1].style.backgroundColor='var(--filter2)';
        filters[2].style.backgroundColor='var(--filter3)';
        filters.forEach(element =>{
                element.style.boxShadow = 'var(--fontColor1) 6px 6px 10px';
        });
        filterList.forEach(element =>{
                element.style.backgroundColor = 'var(--mainColor1)'
        });
        localStorage.setItem('darkModeCase', 'false'); //!stockage dans le local storage
    }
});

// !-----à retravailler-----!
// stockage dans le local storage du darkMod
// darkMod.checked = localStorage.getItem('darkModeCase');

// if (localStorage.getItem('darkModCase') ==='true'){
//         darkMod.checked = true;
//         logo.src = './design/darkModeLogo.png';
//         body.classList.add('darkMod1');
//         header.classList.add('darkMod2');
//         checkbox.classList.add('darkMod4');
//         connexion.classList.add('darkMod3');
//         breadCrumb.forEach(element => {
//                 element.classList.add('darkMod4')
//         });      
//         footer.classList.add('darkMod2');
//         links.forEach(element => {
//                 element.classList.add('darkMod4')
//         });
//         nav.forEach(element => {
//                 element.classList.add('darkMod3')
//         });
//         intro.style.backgroundColor = 'var(--darkColor3)';
//         intro.style.color = 'var(--darkColor2)';
//         intro.classList.add('darkMod3');
//         search.classList.add('darkMod5')
//         search.style.backgroundColor = 'var(--darkColor2)';
//         search.style.color = 'var(--darkColor1)';
//         filters.forEach(element =>{
//                 element.style.backgroundColor='var(--darkColor2)';
//                 element.style.boxShadow = 'var(--fontColor2) 1px 0 10px';
//         });
//         filterList.forEach(element =>{
//                 element.style.backgroundColor = 'var(--darkColor2)'
//         });
// }  else {
//         darkMod.checked = false;
//         logo.src = './design/logo.png';
//         body.classList.remove('darkMod1');
//         header.classList.remove('darkMod2');
//         checkbox.classList.remove('darkMod4');
//         connexion.classList.remove('darkMod3');
//         breadCrumb.forEach(element => {
//                 element.classList.remove('darkMod4')
//         });      
//         footer.classList.remove('darkMod2');
//         links.forEach(element => {
//                 element.classList.remove('darkMod4')
//         });
//         nav.forEach(element => {
//                 element.classList.remove('darkMod3')
//         });
//         intro.style.backgroundColor = 'var(--mainColor1)';
//         intro.style.color = 'var(--fontColor2)';
//         intro.classList.remove('darkMod3');
//         search.classList.remove('darkMod5');
//         search.style.backgroundColor = 'var(--search)';
//         search.style.color = 'var(--fontColor2)';
//         filters[0].style.backgroundColor='var(--filter1)';
//         filters[1].style.backgroundColor='var(--filter2)';
//         filters[2].style.backgroundColor='var(--filter3)';
//         filters.forEach(element =>{
//                 element.style.boxShadow = 'var(--fontColor1) 6px 6px 10px';
//         });
//         filterList.forEach(element =>{
//                 element.style.backgroundColor = 'var(--mainColor1)'
//         });
//         localStorage.setItem('darkModeCase', 'false');
// }
