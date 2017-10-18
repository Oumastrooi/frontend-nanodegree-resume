var data = '%data%';

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
            $("#footerContacts").append(HTMLmobile.replace(data, bio.contacts.mobile));
            $("#footerContacts").append(HTMLemail.replace(data, bio.contacts.email));
            $("#footerContacts").append(HTMLgithub.replace(data, bio.contacts.github));
            $("#footerContacts").append(HTMLlocation.replace(data, bio.contacts.location));
            $("#header").prepend(HTMLheaderRole.replace(data, bio.role));
            $("#header").prepend(HTMLheaderName.replace(data, bio.name));
            $("#header").append(HTMLbioPic.replace(data, bio.bioPic));
            $("#header").append(HTMLwelcomeMsg.replace(data, bio.welcomeMessage));
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function(skill){
                $('#skills').append(HTMLskills.replace(data, skill));
            });
        }
};

bio.display();

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
        work.jobs.forEach(function(job){
            $('#workExperience').append(HTMLworkStart);

            var formattedJob =
                HTMLworkEmployer.replace(data, job.employer) + HTMLworkTitle.replace(data, job.title) +
                HTMLworkDates.replace(data, job.dates) +
                HTMLworkLocation.replace(data, job.location) +
                HTMLworkDescription.replace(data, job.description);

            $('.work-entry:last').append(formattedJob);
        });
    }
};

work.display();

var projects = {
    projects: [{
        "title": "Terra by Osprey",
        "dates": "Fall 2016",
        "description": "Product Design",
        "images": 'http://via.placeholder.com/150x150'
    },
    {
        "title": "Tempo for Intuit",
        "dates": "Fall 2016",
        "description": "Mobile Design, App Design",
        "images": 'http://via.placeholder.com/150x150'
    },
    {
        "title": "Behind the Design",
        "dates": "Spring 2017",
        "description": "Front End Development",
        "images": 'http://via.placeholder.com/150x150'
    },
    {
        "title": "cumulo",
        "dates": "Spring 2017",
        "description": "Front End Development",
        "images": 'http://via.placeholder.com/150x150'
    },
    {
        "title": "Article Mockup",
        "dates": "Summer 2017",
        "description": "Front End Development",
        "images": 'http://via.placeholder.com/150x150'
    },
    {
        "title": "Animal Trading Cards",
        "dates": "Summer 2017",
        "description": "Front End Development",
        "images": 'http://via.placeholder.com/150x150'
    },
    {
        "title": "Portfolio Site",
        "dates": "Summer 2017",
        "description": "Front End Development",
        "images": 'http://via.placeholder.com/150x150'
    }
],
    display: function() {
        projects.projects.forEach(function(project){
            $('#projects').append(HTMLprojectStart);

            var formattedProject =
                HTMLprojectTitle.replace(data, project.title) + HTMLprojectDates.replace(data, project.dates) +
                HTMLprojectDescription.replace(data, project.description) +
                HTMLprojectImage.replace(data, project.images);

            $('.project-entry:last').append(formattedProject);
        });
    }
};

projects.display();

var education = {
    "schools": [
        {
        "name": "Texas State University",
        "location": "San Marcos, Tx",
        "degree": "B.A",
        "majors": ["Computer Science"],
        "dates": "2012-2017"
        },
        {
        "name": "Texas State University",
        "location": "San Marcos, Tx",
        "degree": "B.F.A",
        "majors": ["Graphic Design"],
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
        $('#education').append(HTMLschoolStart);
        education.schools.forEach(function(school){
            var formattedSchool =
                HTMLschoolName.replace(data, school.name) + HTMLschoolDegree.replace(data, school.degree) +
                HTMLschoolDates.replace(data, school.dates) +
                HTMLschoolLocation.replace(data, school.location) +
                HTMLschoolMajor.replace(data, school.majors);

            $('.education-entry:last').append(formattedSchool);
        });

        $('.education-entry:last').append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(school){
            var formattedSchool =
                HTMLonlineTitle.replace(data, school.title) + HTMLonlineSchool.replace(data, school.school) +
                HTMLonlineDates.replace(data, school.dates) +
                HTMLonlineURL.replace(data, school.url);
            $('.education-entry').append(formattedSchool);
        });
    }
};

education.display();

$('#mapDiv').append(googleMap);
