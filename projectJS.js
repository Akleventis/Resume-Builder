function hi() {
  var flyWindow = window.open("", "", "width=600,height=800");
  flyWindow.document.write("<html><head>");
  var styleStr = '<link rel="stylesheet" href="flyWindow.css"></link>';
  styleStr +=
    '<link rel="preconnect" href="https://fonts.gstatic.com"/><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet"></link>';
  flyWindow.document.write(styleStr);
  flyWindow.document.write("</head>");
  flyWindow.document.write("<body>");

  mainHeading(flyWindow.document);
  createEducation(flyWindow.document);
  createTechnicalSkills(flyWindow.document);
  createProfessionalExperience(flyWindow.document);

  flyWindow.document.write("</body>");
  flyWindow.document.write("</html>");
}

function mainHeading(flyWindow) {
  var name = document.getElementById("name").value;
  var state = document.getElementById("state").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var sites = document.getElementsByName("site");
  var site = "";
  for (let i = 0; i < sites.length; i++) {
    if (sites[i].value.length == 0) break;
    site += " | " + sites[i].value;
  }
  flyWindow.write('<h1 class="header">' + name + "</h1>");
  flyWindow.write('<p class="header">' + state + " | " + phone + " | " + email + site + "</p>");
}

function createEducation(flyWindow) {
  var schools = document.getElementsByName("school");
  var degrees = document.getElementsByName("degree");
  var gradDate = document.getElementsByName("gradDate");
  var edStr = '<h4 class="educationHeader">Education</h4>';
  edStr +=
    '<p class="schoolInfo">' +
    schools[0].value +
    ", " +
    degrees[0].value +
    '<span class="gradSpan">' +
    "Graduation " +
    gradDate[0].value +
    "</span></p>";
  if (schools[1].value.length != 0) {
    edStr += "<p>" + schools[1].value + ", " + degrees[1].value + '<span class="gradSpan">' + "Graduation " + gradDate[1].value + "</span></p>";
  }
  flyWindow.write(edStr);
}

function createTechnicalSkills(flyWindow) {
  var skills = document.getElementsByName("skill");
  skillStr = "<h4>Technical Skills</h4>";
  skillStr += '<ul style="margin-bottom: 15;">';
  for (let i = 0; i < skills.length; i++) {
    if (skills[i].value.length == 0) break;
    skillStr += "<li>";
    skillStr += skills[i].value;
    skillStr += "</li>";
  }
  skillStr += "</ul>";
  flyWindow.write(skillStr);
}

function createProfessionalExperience(flyWindow) {
  var companies = document.getElementsByName("company");
  var locations = document.getElementsByName("location");
  var positions = document.getElementsByName("position");
  var startDates = document.getElementsByName("startDate");
  var endDates = document.getElementsByName("endDate");
  var bullets0 = document.getElementsByName("bullet0");
  var bullets1 = document.getElementsByName("bullet1");
  var bullets2 = document.getElementsByName("bullet2");
  var bulletArr = [bullets0, bullets1, bullets2];
  jobStr = "<h4>Professional Experience</h4>";
  for (let i = 0; i < companies.length; i++) {
    if (companies[i].value.length == 0) break;
    var currentBullet = bulletArr[i];
    jobStr +=
      '<p class="company">' +
      companies[i].value +
      " - " +
      locations[i].value +
      '<span class="gradSpan">' +
      startDates[i].value +
      "  -  " +
      endDates[i].value +
      "</span></p>";
    jobStr += '<p class="position">' + positions[i].value + "</p>";
    jobStr += "<ul>";
    for (let j = 0; j < currentBullet.length; j++) {
      if (currentBullet[j].value.length == 0) break;
      jobStr += "<li>" + currentBullet[j].value + "</li>";
    }
    jobStr += "</ul>";
  }
  flyWindow.write(jobStr);
}






function addSkill(x) {
  if (x < 3) {
    var br = document.createElement("br");
    var skills = document.getElementsByName("skill");
    var textArea = document.createElement("textarea");
    textArea.name = "skill";
    textArea.cols = "30";
    textArea.rows = "2";
    skills[skills.length - 1].after(br, textArea);
    x++
  }
}

function addBullet(n, x) {
  if (x<3) {
    var br = document.createElement("br");
    var bullets = document.getElementsByName(n);
    var textArea = document.createElement("textarea");
    textArea.name = n;
    textArea.cols = "30";
    textArea.rows = "4";
    bullets[bullets.length - 1].after(br, textArea);
    x+=1
  }
}
function addBullet1(n, x) {
  if (x<3) {
    var br = document.createElement("br");
    var bullets = document.getElementsByName(n);
    var textArea = document.createElement("textarea");
    textArea.name = n;
    textArea.cols = "30";
    textArea.rows = "4";
    bullets[bullets.length - 1].after(br, textArea);
    x+=1
  }
}

function createSite(x) {
  if (x<3) {
    var sites = document.getElementsByName("site");
    var text = document.createElement("input");
    text.name = "site";
    text.type = "text";
    sites[sites.length - 1].after(text);
  }
}

function clicks(){
  var sclick = 0
  var bclick = 0
  var b1click = 0
  var tclick = 0
  document.getElementById("sclick").addEventListener('click', function(){
    sclick += 1;
    createSite(sclick)
  })
  document.getElementById("bclick").addEventListener('click', function(){
    bclick += 1;
    addBullet('bullet0', bclick)
  })
  document.getElementById("tclick").addEventListener('click', function(){
    tclick += 1;
    addSkill(tclick)
  })
  document.getElementById("b1click").addEventListener('click', function(){
    b1click += 1;
    addBullet1('bullet1', b1click)
  })
}


