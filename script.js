const data =  {
    en: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        intro: "Hey! I'm Thayara",
        description: "I am a web developer who is passionate about how technology shapes everything around us, and I'm glad to be a small part of it.",
        btn1: "Get in Touch<span><i class=\"fas fa-arrow-right\"></i></span>",
        aboutMe: "About me",
        aboutDescription: "",
        technologiesTitle: "Tecnologies",
        projectsTitle: "Projects",
        projectsDescription: "",
        address: "Poços de Caldas - MG, Brazil",
        social: "Find me on Social Media",
    },
    pt: {
        home: "Home",
        about: "Sobre",
        projects: "Projetos",
        contact: "Contato",
        intro: "Olá! Meu nome é Thayara",
        description: "Sou uma Desenvolvedora Web fascinada por como a tecnlogia molda tudo a nossa volta.",
        btn1:  "Entre em contato<span><i class=\"fas fa-arrow-right\"></i></span>",
        aboutme: "Sobre mim",
        aboutDescription: "",
        technologiesTitle: "Tecnologias",
        projectsTitle: "Projetos",
        projectsDescription: "",
        address: "Poços de Caldas - MG, Brasil",
        social: "Conecte-se comigo",
    },

};
// const dataTest = require('./data/languages_data.js')
const englishBtn = document.querySelector('#english');
const portuguesBtn = document.querySelector('#portugues');
const home = document.querySelector('#home');
const about = document.querySelector('#about-me');
const projects = document.querySelector('#projects');
const contact = document.querySelector('#contact');
const intro = document.querySelector('#intro');
const description = document.querySelector('#description');
const btn1 = document.querySelector('#btn1');
const aboutMe = document.querySelector('#about-me-title');
const aboutDescription = document.querySelector('#about-description');
const technologiesTitle = document.querySelector('#technologies-title');
const projectsTitle = document.querySelector('#projects-title');
const projectsDescription = document.querySelector('#projects-description');
const address = document.querySelector('#address');
const social = document.querySelector('#social');

const { pt, en } = data;
const textInEn = Object.values(en);
const textInPt = Object.values(pt);
const sections = [ home, about, projects, contact, intro, description, btn1, aboutMe, aboutDescription, technologiesTitle, projectsTitle, projectsDescription, address, social ]

const changeLanguage = (arrayValues) => {
    sections.forEach((e, index) => e === btn1 ? e.innerHTML = arrayValues[index] : e.innerText = arrayValues[index]);
};

const checkLanguage = () => {
    englishBtn.addEventListener('click', (ev) => {
            changeLanguage(textInEn);
        });
    portuguesBtn.addEventListener('click', (ev) => {
            changeLanguage(textInPt);
        });
}

checkLanguage();

