import data from './data/languages_data.js';

const englishBtn = document.querySelector('#english');
const portuguesBtn = document.querySelector('#portugues');
const home = document.querySelector('#home');
const about = document.querySelector('#about-me');
const projects = document.querySelector('#projects-nav');
const contact = document.querySelector('#contact-nav');
const intro = document.querySelector('#intro');
const description = document.querySelector('#description');
const btn1 = document.querySelector('#btn1');
const aboutMe = document.querySelector('#about-me-title');
const aboutDescription = document.querySelector('#about-description');
const tests = document.querySelector('#tests');
const technologiesTitle = document.querySelector('#technologies-title');
const projectsTitle = document.querySelector('#projects-title');
const projectsDescription = document.querySelector('#projects-description');
const address = document.querySelector('#address');
const form = document.querySelector('#form');

const { pt, en } = data;
console.log(data, en, pt);
const textInEn = Object.values(en);
const textInPt = Object.values(pt);
const sections = [ home, about, projects, contact, intro, description, btn1, aboutMe, aboutDescription, tests, technologiesTitle, projectsTitle, projectsDescription, address ]

const changeLanguage = (arrayValues) => {
    sections.forEach((e, index) => e === btn1 ? e.innerHTML = arrayValues[index] : e.innerText = arrayValues[index]);
};

const setTextEn = () => {
    const description = textInEn.filter(e => e.includes('first'))
    aboutDescription.innerText = description;
}

const checkLanguage = () => {
    englishBtn.addEventListener('click', () => {
            changeLanguage(textInEn);
        });
    portuguesBtn.addEventListener('click', () => {
            changeLanguage(textInPt);
        });
}

checkLanguage();

const emailForm = () => {
    btn1.addEventListener('click', () => {
        form.style.display = 'flex';
    })
}

emailForm();

window.onload = setTextEn();
