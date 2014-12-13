var bio = {
  "name": "Marine Boudeau",
  "skills": [
    "HTML", "CSS", "Product Design", "Interaction Design", "User Experience Design"
  ]
}

var work = {
  "jobs": [
  {
    "company": "NBC Universal",
    "title": "Senior User Experience Designer"
  },
  {
    "company": "WNYC",
    "title": "Head of Product & User Experience Design"
  }
  ]
}


HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(HTMLheaderName);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#header").append(formattedSkills);
  }
}
