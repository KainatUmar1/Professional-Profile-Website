let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

const profileData = {
    about: {
        intro: "I am pursuing a Bachelor of Science in Computer Science (BSCS) at Information Technology University, with a solid foundation in computer science principles and a diverse skill set that includes C++, C#, Python, HTML, CSS, JavaScript, data structures, algorithms, MongoDB, and SQL databases. I have also completed a certification in Microsoft Office, further enhancing my proficiency in essential productivity tools.",
        experience: "I have gained hands-on experience with cloud technologies and their applications, which has deepened my interest in both cloud computing and data analytics. I am eager to explore the intersection of these fields and apply my skills to innovative projects.",
        extracurriculars: "Beyond academics, I actively participate in extracurricular activities, societies, and volunteer work, where I’ve honed my leadership, communication, and teamwork skills.",
        opportunities: "I am passionate about gaining practical experience through internships, part-time roles, or collaborative projects, particularly in data analytics and cloud computing. I am excited to connect with professionals in the tech industry to learn from their experiences and explore potential opportunities for collaboration."
    },
    education: [
        {
            year: "2020",
            level: "School",
            description: "I have done my Matriculation with Computer Science as my Major in A+ Grade, from Unique Group of Institutions."
        },
        {
            year: "2020-2022",
            level: "College",
            description: "I have done my Intermediate in Computer Science in A+ Grade, from Punjab Group of Colleges."
        },
        {
            year: "2022-Present",
            level: "University",
            description: "Pursuing Bachelor of Science in Computer Science from Information Technology University, with a solid foundation in computer science principles and a diverse skill set in programming languages."
        }
    ],
    projects: [
        {
            title: "Quranic Insights | HTML",
            description: "Quranic Insights is an application designed to explore the profound wisdom of the Quran, providing access to all Surahs enriched with translations, offering spiritual guidance, scholarly study & personal reflection, using the power of MongoDB, JavaScript, & HTML."
        },
        {
            title: "Redis Database | CPP",
            description: "This project implements various Redis data structures using C++. The implementation includes several key functionalities for Redis data structures such as Strings, Hashes, Sets, Sorted Sets, and Lists."
        },
        {
            title: "Paint App | Python",
            description: "It is a simple paint application created using Python and the Tkinter library. It allows users to draw various shapes, lines, and curves on a canvas,  provides several tools for drawing, including brushes, lines, rectangles, ovals, circles, and curves, with options for color & fill."
        },
        {
            title: "Chess Game | CPP",
            description: "The Chess Game is designed to provide a comprehensive & engaging chess-playing experience, featuring various advanced functionalities. Developed using SFML, the game includes essential chess mechanics & additional features of Chess Game."
        },
        {
            title: "Shogi Game | CPP",
            description: "This is the traditional Japanese board game, Shogi(Japanese chess), is a 2-player strategy game that offers deep strategic gameplay with its unique set of rules and piece movements, rules implementation, game state saving, pieces legalities, board display, piece capture mechanics, CLI, and much more."
        },
        {
            title: "Snake Game | CPP",
            description: "This project encapsulates the classic Snake Game, a timeless favorite. The game is built using C++. Whether you're a seasoned developer or a beginner looking to explore game development, this project provides an excellent opportunity to delve into coding and have fun along the way."
        }
    ],
    skills: {
        programming: ["C++", "C#", "Python", "JavaScript", "HTML/CSS"],
        databases: ["SQL", "MongoDB", "Redis", "Azure"],
        cloud: ["MS Azure", "AWS", "GCP", "ADF"],
        tools: ["GitHub", "MongoDB Atlas", "VS Code", "Visual Studio"]
    }
};

document.querySelector('.about-content').innerHTML = `
    <p>${profileData.about.intro}</p>
    <p>${profileData.about.experience}</p>
    <p>${profileData.about.extracurriculars}</p>
    <p>${profileData.about.opportunities}</p>
`;

const educationContainer = document.querySelector('.timeline-items');
educationContainer.innerHTML = '';
profileData.education.forEach(item => {
    educationContainer.innerHTML += `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">${item.year}</div>
            <div class="timeline-content">
                <h3>${item.level}</h3>
                <p>${item.description}</p>
            </div>
        </div>
    `;
});

const projectsContainer = document.querySelector('.projects-container');
projectsContainer.innerHTML = '';
profileData.projects.forEach(project => {
    projectsContainer.innerHTML += `
        <div class="projects-box">
            <div class="projects-info">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
            </div>
        </div>
    `;
});

const skillsContainer = document.querySelector('.skills-container');
skillsContainer.innerHTML = '';
Object.keys(profileData.skills).forEach(skillCategory => {
    const skillsList = profileData.skills[skillCategory].map(skill => `<li>${skill}</li>`).join('');
    skillsContainer.innerHTML += `
        <div class="skill-category">
            <h3>${skillCategory.charAt(0).toUpperCase() + skillCategory.slice(1)}</h3>
            <ul>${skillsList}</ul>
        </div>
    `;
});