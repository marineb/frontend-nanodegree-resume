var bio = {
  "name": "Marine Boudeau",
  "title": "Front-end developer",
  "skills": [
    "HTML", "CSS", "Product Design", "Interaction Design", "User Experience Design"
  ],
  "contacts": {
    "mobile": "718-306-4448",
    "email": "m14868@gmail.com",
    "twitter": "marineboudeau",
    "github": "marineb",
    "location": "Brooklyn, NY"
  },
  "pic": "https://pbs.twimg.com/profile_images/514738027839893504/cLnPXQ_X.jpeg",
  "welcome": "Hi, it's me. I like to build things."
}

HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.title);
$("#header").prepend(HTMLheaderName+HTMLheaderRole);

HTMLbioPic = HTMLbioPic.replace("%data%", bio.pic);
$("#header").prepend(HTMLbioPic);

HTMLWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcome);
$("#header").append(HTMLWelcomeMsg);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkills);
  }
}

HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(HTMLmobile);
HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(HTMLemail);
HTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(HTMLtwitter);
HTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(HTMLgithub);
HTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(HTMLlocation);



var work = {
  "jobs": [
  {
    "employer": "New York Public Radio / WNYC",
    "title": "Head of product and ux design",
    "role": "Leads product development across platforms (web and mobile), Designs interfaces, Follows agile / lean ux process.",
    "dates": "2011 to present",
    "location": "New York"
  },
  {
    "employer": "NBC Universal",
    "title": "Senior User Experience Designer",
    "role": "Led design of The Feast (thefeast.com), NBC Local's lifestyle property Designed NBC Local Media Labs (nbclocalmedialabs.com) presented at Google I/O 2010 Responsible for requirements gathering, wireframes, designs, HTML & CSS prototypes and usability expertise.",
    "dates": "2008 to 2011",
    "location": "New York"
  }
]};

work.display = function() {
  if (work.jobs.length > 0) {
    for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var jobEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var jobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var jobRole = HTMLworkDescription.replace("%data%", work.jobs[job].role);
      var jobDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(jobEmployer+jobTitle+jobDates+jobRole);
    }
  }
}

work.display();


var projects = {
  "projects" : [
  {
    "title": "Feelio",
    "date": "2014",
    "description": "Can I get by with just shorts today? Will I need an extra layer later? Feelio will tell you. No more trying to figure out what to wear from an impersonal weather forecast. The idea of Feelio started out a couple of years ago as a mobile app that could help people figure out what to wear every day. Then we thought, wouldn't it be easier to just get that friendly info delivered straight to your inbox every morning when you wake up? In February 2014, we made that happen.",
    "images": [
      "http://feelio.cc/images/phone-hand.png",
      "http://feelio.cc/images/lady-2.png"
    ]
  },
  {
    "title": "Another Project",
    "date": "2013",
    "description": "Blahblabasd jaks djkas djka skdj ajksd asdhlajs jasdh jasdh",
    "images": [
    "https://placekitten.com/g/395/395",
    "https://placekitten.com/g/395/395"
    ]
  }
]};



projects.display = function() {
    for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);
      var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      var projectDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
      var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(projectTitle+projectDate+projectDescription);
      for (image in projects.projects[project].images) {
        var projectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(projectImage);
      }
    }
}

projects.display();


$("#mapDiv").append(googleMap);
