var bio = {
        "name": "Elize Geldenhuys",
        "role": "Front End Developer",
        "contacts": {
            "mobile": "361-443-2084",
            "email": "elizegeldenhuys14@gmail.com",
            "github": "https://github.com/Oumastrooi",
            "location": "Austin, Tx"
        },
        "welcomeMessage": "Welcome to my Udacity online resume!",
        "skills": ["HTML/CSS", "Javascript", "Angular 4", "Website Design"],
        "bioPic": "images/fry.jpg",
        display: function() {
            $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
            $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
            $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
            $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
            $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
            $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
            $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
        }
}
bio.display();

var education = {
    "schoools": [
        {
        "name": "Texas State University",
        "location": "San Marcos, Tx",
        "degree": "B.A",
        "majors": "Computer Science",
        "dates": "2012-2017"
        },
        {
        "name": "Texas State University",
        "location": "San Marcos, Tx",
        "degree": "B.F.A",
        "majors": "Graphic Design",
        "dates": "2012-2017"
        }
    ],
    "onlineCourses": [
        {
        "title": "Front End Development Nanodegree",
        "school": "Udacity",
        "dates": "2017 - Present",
        "url": "udacity.com"
        },
        {
        "title": "Angular 4",
        "school": "Udemy",
        "dates": "2017 - Present",
        "url": "udemy.com"
        }
    ],
    display: function() {

    }
}

var work = {
    "jobs": [
        {
        "employer": "Telogis",
        "title": "Software Engineer",
        "location": "Austin, Tx",
        "dates": "July - Present",
        "description": "Build a library of Angular UI components that are brand specific to make it easier for developers to build web tools."
        },
        {
        "employer": "USAA",
        "title": "IT Intern",
        "location": "San Antonio",
        "dates": "Summer 2016",
        "description": "Worked on an agile team to help clean up legacy code to decrease runtime and increase productivity."
        }
    ],
    display: function() {

    }
}

var projects = {
    projects: [{
        "title": "Terra by Osprey",
        "dates": "Fall 2016",
        "description": "Product Design",
        "images": "images/terra.png"
    },
    {
        "title": "Tempo for Intuit",
        "dates": "Fall 2016",
        "description": "Mobile Design, App Design",
        "images": "images/tempo.png"
    },
    {
        "title": "Behind the Design",
        "dates": "Spring 2017",
        "description": "Front End Development",
        "images": "images/behind-the-design.png"
    },
    {
        "title": "cumulo",
        "dates": "Spring 2017",
        "description": "Front End Development",
        "images": "images/cumulo.png"
    },
    {
        "title": "Article Mockup",
        "dates": "Summer 2017",
        "description": "Front End Development",
        "images": "images/article-mockup-png"
    },
    {
        "title": "Animal Trading Cards",
        "dates": "Summer 2017",
        "description": "Front End Development",
        "images": "images/animal-trading-card.png"
    },
    {
        "title": "Portfolio Site",
        "dates": "Summer 2017",
        "description": "Front End Development",
        "images": "images/portfolio-site.png"
    }
],
    display: function() {

    }
}
