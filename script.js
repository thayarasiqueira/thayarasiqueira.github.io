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
        aboutDescription: `The first thing I would mention about myself is that I believe my intense curiosity has taken me to many places. This is how I studied and experienced different subjects such as: martial arts, music, body awareness, metalearning, magic cubes, and technology. This is also how I started playing the violin in a social project at the age of 13, and quickly won several scholarships and opportunities that took me from the countryside of Minas Gerais to a bachelor's degree in violin at University of São Paulo (being the first person in my family to enter a university), to a festival in Italy, and to a Master's Degree with a full scholarship in Canada.

        While living in Canada, during the pandemic, I started a project of an online music school with twelve other teachers, where I had created a new method of asynchronous lessons with more frequent and shorter interactions. That was when I started to investigate tools and study about technologies.
        My first contact with programming was love at first sight! It seemed like something that united all my curiosities and search for challenging stimuli in one place.

        Since then, I have been falling more and more in love with developing solutions. I started my studies as a Full Stack Web Developer at Trybe in January 2022, where I will finish my 1500+ hours of classes and 30+ projects at the beginning of January 2023.
        
        Besides the activities I already mentioned, I really enjoy watching series and movies, playing RPG video games, board games, going to the gym, traveling, and spending quality time with my family and friends.`,
        tests: 'Tests',
        technologiesTitle: "Tecnologies",
        projectsTitle: "Projects",
        projectsDescription: "Here are some of the projects I have developed, you can click on the GitHub link on each image to see more details:",
        address: "Poços de Caldas - MG, Brazil",
        social: "Find me on Social Media",
    },
    pt: {
        home: "Início",
        about: "Sobre",
        projects: "Projetos",
        contact: "Contato",
        intro: "Olá! Meu nome é Thayara",
        description: "Sou uma Desenvolvedora Web fascinada por como a tecnologia molda tudo a nossa volta.",
        btn1:  "Entre em contato<span><i class=\"fas fa-arrow-right\"></i></span>",
        aboutme: "Sobre mim",
        aboutDescription: `A primeira coisa que eu mencionaria sobre mim, é que eu acredito que a minha curiosidade intensa me levou a muitos lugares. Foi assim que estudei e vivenciei temas distintos como: artes marciais, música, consciência corporal, metalearning, cubos mágicos e tecnologia. Também foi assim que começando a tocar violino em um projeto social com 13 anos, rapidamente conquistei diversas bolsas e oportunidades que me levaram do interior de MG a um bacharel em violino na USP (sendo a primeira pessoa da minha família a ingressar em uma universidade), a um festival na Itália e a um mestrado com bolsa prêmio 100% mais ajuda de custo mensal no Canadá.

        Enquanto morava no Canadá, durante a pandemia, iniciei um projeto de uma escola de música online com mais doze professores, onde havia criado um método novo de aulas assíncronas com interações mais frequentes e mais curtas. Foi quando comecei a investigar ferramentas e a estudar sobre tecnologias.
        No meu primeiro contato com programação, foi amor à primeira vista! Parecia algo que unia todas as minhas curiosidades e busca por estímulos desafiadores em um lugar só. 
        
        Desde então, venho me apaixonando a cada dia mais por desenvolver soluções. Iniciei meus estudos como Desenvolvedora Web Full Stack na Trybe em janeiro de 2022, onde conluirei minhas mais de 1500 horas de aulas e mais de 30 projetos no início de janeiro de 2023.

        Além das atividades que já mencionei, gosto muito de assistir séries e filmes, jogos de video game RPG, jogos de tabuleiro, ir à academia, viajar e passar tempo de qualidade com minha família e amigos.`,
        tests: 'Testes',
        technologiesTitle: "Tecnologias",
        projectsTitle: "Projetos",
        projectsDescription: "Aqui estão alguns dos projetos desenvolvidos por mim, você pode clicar no link do GitHub em cada uma das imagens para ver mais detalhes:",
        address: "Poços de Caldas - MG, Brasil",
        social: "Conecte-se comigo",
    },

};
// const dataTest = require('./data/languages_data.js')
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
const social = document.querySelector('#social');
const form = document.querySelector('#form');

const { pt, en } = data;
const textInEn = Object.values(en);
const textInPt = Object.values(pt);
const sections = [ home, about, projects, contact, intro, description, btn1, aboutMe, aboutDescription, tests, technologiesTitle, projectsTitle, projectsDescription, address, social ]

const changeLanguage = (arrayValues) => {
    sections.forEach((e, index) => e === btn1 ? e.innerHTML = arrayValues[index] : e.innerText = arrayValues[index]);
};

const setTextEn = () => {
    aboutDescription.innerText = textInEn[8];
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
