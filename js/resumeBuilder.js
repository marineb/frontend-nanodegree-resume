var bio = {
  "name": "Marine Boudeau",
  "role": "Front-end developer",
  "skills": [
    {
      "name": "HTML/CSS",
      "value": "15"
    },
    {
      "name": "Javascript",
      "value": "15"
    },
    {
      "name": "Product Design",
      "value": "20"
    },
    {
      "name": "User Experience Design",
      "value": "20"
    },
    {
      "name": "Analytics",
      "value": "10"
    },
    {
      "name": "Product Management",
      "value": "20"
    },

  ],
  "contacts": {
    "mobile": "718-000-0000",
    "email": "me@gmail.com",
    "twitter": "marineboudeau",
    "github": "marineb",
    "location": "Brooklyn, NY"
  },
  "pic": "https://pbs.twimg.com/profile_images/514738027839893504/cLnPXQ_X.jpeg",
  "welcome": "Hi, it's me. I like to build things."
};

var work = {
  "jobs": [
{
  "employer": "New York Public Radio / WNYC",
  "title": "Head of product and ux design",
  "role": "Leads product development across platforms (web and mobile), Designs interfaces, Follows agile / lean ux process.",
  "dates": "2011 to present",
  "location": "New York",
  "url": "http://wnyc.org"
},
{
  "employer": "NBC Universal",
  "title": "Senior User Experience Designer",
  "role": "Led design of The Feast (thefeast.com), NBC Local's lifestyle property Designed NBC Local Media Labs (nbclocalmedialabs.com) presented at Google I/O 2010 Responsible for requirements gathering, wireframes, designs, HTML & CSS prototypes and usability expertise.",
  "dates": "2008 to 2011",
  "location": "New York",
  "url": "http://nbcuniversal.com"
  }
]};

var projects = {
  "projects" : [
{
  "title": "Feelio.cc",
  "date": "2014",
  "description": "Can I get by with just shorts today? Will I need an extra layer later? Feelio will tell you. No more trying to figure out what to wear from an impersonal weather forecast. The idea of Feelio started out a couple of years ago as a mobile app that could help people figure out what to wear every day. Then we thought, wouldn't it be easier to just get that friendly info delivered straight to your inbox every morning when you wake up? In February 2014, we made that happen.",
  "url": "http://feelio.cc",
  "images": [
  "http://feelio.cc/images/phone-hand.png",
  "http://feelio.cc/images/lady-2.png"
  ]
},
{
  "title": "Another Project",
  "date": "2013",
  "description": "Blahblabasd jaks djkas djka skdj ajksd asdhlajs jasdh jasdh",
  "url": "http://google.com",
  "images": [
  "https://placekitten.com/g/395/395",
  "https://placekitten.com/g/395/395"
  ]
}
]};

var education = {
  "schools" : [
  {
    "name": "Northeastern University",
    "location": "Boston, MA",
    "degree": "BS in Business Administration",
    "majors": ["Marketing", "International Business"],
    "date": "2001-2005",
    "url": "http://www.northeastern.edu/"
  },
  {
    "name": "Reims Management School",
    "location": "Reims, France",
    "degree": "BS in Business Administration",
    "majors": ["Marketing", "International Business"],
    "date": "2001-2005",
    "url": "http://www.neoma-bs.fr/"
  }
  ],
  "onlineCourses": [
  {
    "title": "Front-end nanodegree",
    "school": "Udacity",
    "date": "2014-2015",
    "url": "http://udacity.com"
  },
  {
    "title": "Computer Science Fundamentals",
    "school": "General Assembly",
    "date": "2014",
    "url": "http://generalassembly.com"
  }
  ]
};


bio.display = function() {
  HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
  HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(HTMLheaderName+HTMLheaderRole);
  HTMLbioPic = HTMLbioPic.replace("%data%", bio.pic);
  $("#header").prepend(HTMLbioPic);
  HTMLWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcome);
  $("#header").append(HTMLWelcomeMsg);
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill].name);
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
}

work.display = function() {
  if (work.jobs.length > 0) {
    for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var jobEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("%url%", work.jobs[job].url);
      var jobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var jobRole = HTMLworkDescription.replace("%data%", work.jobs[job].role);
      var jobDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var jobLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(jobEmployer+jobTitle+jobDates+jobLoc+jobRole);
    }
  }
}

projects.display = function() {
    for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);
      var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("%url%", projects.projects[project].url);
      var projectDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
      var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(projectTitle+projectDate+projectDescription);
      for (image in projects.projects[project].images) {
        var projectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(projectImage);
      }
    }
}

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var sName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("%url%", education.schools[school].url);
    var sDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var sDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
    var sLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(sName+sDegree+sDates+sLocation);
    for (major in education.schools[school].majors) {
      var sMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
      $(".education-entry:last").append(sMajor);
    }
  }
  $("#education").append(HTMLonlineClasses);
  for (course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);
    var oTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("%url%", education.onlineCourses[course].url);
    var oSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var oDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
    var oUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
    $(".education-entry:last").append(oTitle+oSchool+oDates+oUrl);
  }
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);


// Chart Stuff

d3.select(".chart")
  .selectAll("div")
    .data(bio.skills)
  .enter().append("div")
    .style("width", function(d) { return d.value * 10 + "px"; })
    .text(function(d) { return d.name; });
