// bio object
var bio = {
	"heading" : {
		"name" : "Richard Rush",
		"role" : "Front-End Web Developer"
	},
	"contacts": {
		"mobile" : "704.626.8205",
		"email" : "rrx1571e@gmail.com",
		"github" : "bbdjjtx",
		"twitter" : "@richarderush",
		"location" : "Charlotte, NC"
	},
	"bioPic" : "images/Rush.jpg",
	"welcomeMessage" : "I am a seasoned manager with extensive data analysis and logistics operations experience and a Udacity Front-End Web Developer Nanodegree.",
	"skills" : ["Communications", "Teamwork", "Time Management", "Decision Making", "Logistics", "Programming", "Teaching", "Operations", "Vendor Management"]
};

// work object
var work = {
	"jobs":[
		{
			"title" : "Lead Logistics Analyst",
			"employer" : "AT&T",
			"dates" : "Feb, 1980 - Present - (2010-Present)",
			"location" : "Dallas, TX",
			"description" : "Vendor management of 3rd Party logistics vendor responsible for design, development and compliance with warehouse production methods and transportation costs and scanning metrics"
		},
		{
			"title" : "Package Delivery Supervisor",
			"employer" : "UPS",
			"dates" : "Jun, 1977 - Feb, 1980",
			"location" : "Seattle, WA",
			"description" : "Responsible for delivery and pickup routes in Charlotte and Northern SC with up to 21 package delivery drivers. Had customer service responsibility to research customer requests and incorporate new routes. Worked with the engineers to design most effective route system for my area driving improvements in efficiency, productivity and cost structure."
		},
		{
			"title" : "Instructor-Basic PC Literacy",
			"employer" : "Central Piedmont Community College",
			"dates" : "1989 - 2014",
			"location" : "Phoenix, AZ",
			"description" : "Instructor in Computer Information Systems teaching Basic PC Literacy course. This course provides an introduction to computers and computing. Topics include the impact of computers on society, ethical issues, and hardware/software applications, including spreadsheets, word processors, graphics, the Internet, and operating systems. Upon completion, students should be able to demonstrate an understanding of the role and function of computers and use the computer to solve problems. The course uses Microsoft Office 2007 applications (Word, Excel, and Power Point) and requires hands-on computer lab sessions with a Personal Computer. Taught this course continuously from its inception with MS-DOS, to Windows 3.1, XP, to current Windows Vista and MS Office 2007 version."
		}
	]
};

// education object
var education = {
	"schools":[
		{
			"name" : "Harvard Business School",
			"degree" : "MBA",
			"dates" : "Sep 1975 - Jun 1977",
			"location" : "Boston, MA",
			"major" : "General Management"
		},
		{
			"name" : "Brandeis University",
			"degree" : "BS",
			"dates" : "Sep 1971 - Jun 1975",
			"location" : "Park City, UT",
			"major" : "Economics"
		}
	]
};

// projects object
var projects = {
	"projects" : [
		{
			"title" : "Perfectly Natural Nail Salon",
			"dates" : "2010 - Present",
			"description" : "Drop-and-Drag website for Natural Nail Salon",
			"images" : "images/pnn.jpg"
		},
		{
			"title" : "Crossdock Application",
			"dates" : "2014 - Present",
			"description" : "MS Access Crossdock ASN, receipt and load scan tracking system",
			"images" : "images/crossdock_app.jpg"
		}
	]
};

// online courses object
var online = {
	"courses" : [
		{
			"title" : "Six-Sigma Green Belt",
			"school" : "AT&T University",
			"dates" : "2009 - 2010",
			"url" : "http://att.com/qms"
		},
		{
			"title" : "Front-End Web Developer",
			"school" : "Udacity",
			"dates" : "Nov 2014 - Jun 2015",
			"url" : "www.udacity.com"
		},
		{
			"title" : "Internet and Computing Core Certification",
			"school" : "Certiport",
			"dates" : "Jul 2012",
			"url" : "www.certiport.com"
		}
	]
};

// encapsulate the heading
bio.heading.display = function () {
	var formattedName = HTMLheaderName.replace("%data%", bio.heading.name);
	var	formattedRole = HTMLheaderRole.replace("%data%", bio.heading.role);	
	$("#header").prepend([formattedName] + [formattedRole]);
};

bio.heading.display();

// encapsulate the contacts
bio.contacts.display = function() {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedwelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").append([formattedbioPic]);
	$("#header").append([formattedwelcomeMessage]);
	$("#topContacts").append([formattedMobile]);
	$("#topContacts").append([formattedEmail]);
	$("#topContacts").append([formattedGithub]);
	$("#topContacts").append([formattedTwitter]);
	$("#topContacts").append([formattedLocation]);
	$("#footerContacts").append([formattedMobile]);
	$("#footerContacts").append([formattedEmail]);
	$("#footerContacts").append([formattedGithub]);
	$("#footerContacts").append([formattedTwitter]);
	$("#footerContacts").append([formattedLocation]);
};

bio.contacts.display();

// encapsulate the skills
bio.skills.display = function() {
	if(bio.skills.length > 0) {
		$("#header").append([HTMLskillsStart]);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[8]);
		$("#skills").append(formattedSkill);
	}
};

bio.skills.display();

// encapsulate the work
work.display = function () {
	for (job in work.jobs) {
		$("#workExperience").append([HTMLworkStart]);
		var formattedEmployer = HTMLworkEmployer.replace
		("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace
		("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace
		("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace
		("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace
		("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

work.display();

// encapsulate the projects
projects.display = function () {
	for (project in projects.projects) {
		$("#projects").append([HTMLprojectStart]);
		
		var formattedTitle = HTMLprojectTitle.replace
		("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace
		("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedtDescription = HTMLprojectDescription.replace
		("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedtDescription);

		if (projects.projects[project].images.length > 0) {
			var formattedImage = HTMLprojectImage.replace
			("%data%", projects.projects[project].images);
			$(".project-entry:last").append(formattedImage);
		}
	}
};

projects.display();

// encapsulate education
education.display = function () {
	for (school in education.schools) {
		$("#education").append([HTMLschoolStart]);

		var formattedschoolName = HTMLschoolName.replace
		("%data%", education.schools[school].name);
		var formattedschoolDegree = HTMLschoolDegree.replace
		("%data%", education.schools[school].degree);
		$(".education-entry:last").append
		(formattedschoolName + formattedschoolDegree);
		
		var formattedtschoolDates = HTMLschoolDates.replace
		("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedtschoolDates);

		var formattedtschoolLocation = HTMLschoolLocation.replace
		("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedtschoolLocation);

		var formattedtschoolMajor = HTMLschoolMajor.replace
		("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedtschoolMajor);
	}
};

education.display();

// encapsulate online courses
online.display = function() {
	$(".education-entry:last").append([HTMLonlineClasses]);
	for (course in online.courses) {
		var formattedonlineTitle = HTMLonlineTitle.replace
		("%data%", online.courses[course].title);
		var formattedonlineSchool = HTMLonlineSchool.replace
		("%data%", online.courses[course].school);
		$(".education-entry:last").append
		(formattedonlineTitle + formattedonlineSchool);

		var formattedonlineDates = HTMLonlineDates.replace
		("%data%", online.courses[course].dates);
		$(".education-entry:last").append(formattedonlineDates);

		var formattedonlineURL = HTMLonlineURL.replace
		("%data%", online.courses[course].url);
		$(".education-entry:last").append(formattedonlineURL);
	}
};

online.display();

// encapsulate the internationalization
function inName(name){
	name = bio.heading.name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
	name[0].slice(1).toLowerCase();
	return name[0] +" "+name[1];
};

$("#main").append(internationalizeButton);

// google map API
$("#mapDiv").append(googleMap);