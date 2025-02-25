const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = "Alexis Mejia, " + thisYear + " \u00A9"; //how to append this quote?
footer.appendChild(copyright);
const Skills = ["HTML", "Javascript", "CSS", "Github"];
const skillsSection = document.querySelector("#Skills");
const skillsList = skillsSection.querySelector("ul");
for (i = 0; i < Skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerHTML = Skills[i];
  skillsList.appendChild(skill);
}

//4.3
const messageForm = document.querySelector("form[name='leave_message']");
messageForm.addEventListener("submit", handleMessageForm);
function handleMessageForm(e) {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value; //console.log(name+email+message);
  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href= 'mailto: ${email}'> ${name} </a> <span>${message}</span>`;
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.setAttribute("type", "button");
  removeButton.addEventListener("click", removeMessage);
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  e.target.reset();
}

function removeMessage(e) {
  const listItem = e.target.parentNode;
  listItem.remove();
}

//lesson-6-1
// var repositories = "";
// var githubRequest = new XMLHttpRequest();
// githubRequest.open("GET", "https://api.github.com/users/alexdmejia/repos");
// githubRequest.onload = function () {
//   repositories = JSON.parse(githubRequest.responseText);
//   renderHtml(repositories);
//   setTarget();
// };


// lesson 6-2 promises and API 
const fetchRequest = fetch("https://api.github.com/users/alexdmejia/repos" , {
  mode: 'cors',
  method: 'GET',
});
//the variable returns a JSON
fetchRequest.then((response) => {
  if (!response.ok){
    throw new Error ('Response status is not OK');
  }
  return response.json();
}).then((repositories) => {
  renderHtml(repositories);
  setTarget();
}).catch((error) => {
  console.error('Error Fetching : ' + error);
});

//using DOM selector to connect with html element
function renderHtml(repositories) {
  var projectSection = document.querySelector("#Projects");
  var projectList = projectSection.querySelector("ul");

  for (let i = 0; i < repositories.length; i++) {
    let project = document.createElement("li");
    //style more
    project.innerHTML = `<a href = ${repositories[i].html_url} > ${repositories[i].name} </a> <p class = "projectDescription"> ${repositories[i].description} </p>`;
    projectList.appendChild(project);
  }
  projectSection.appendChild(projectList);
}
// githubRequest.send();

//open tags <a> in new window
function setTarget() {
  let targetBlank = document.querySelectorAll("section a");
  for (let i = 0; i < targetBlank.length; i++) {
    targetBlank[i].setAttribute("target", "_blank");
  }
}

//adds burger icon to nav when it reaches smaller px
let burgerIcon = document.getElementById("icon");
  burgerIcon.addEventListener('click' , myIcon);

  function myIcon () {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  };
  
// ==================================
// =          SCROLL ANIMATION         =
// ==================================

//IO is a class that takes callback fnx, it observes multiple elements or entries at the same time, allowing the scroll animation.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting) {
      entry.target.classList.add('show'); 
    } 
    else {
      entry.target.classList.remove('show');
    }
   });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


  

