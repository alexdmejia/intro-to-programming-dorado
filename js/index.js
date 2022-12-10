const today = new Date();
const thisYear = today.getFullYear();
const footer= document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML= "Alexis Mejia, " + thisYear + ' \u00A9'; //how to append this quote?
footer.appendChild(copyright);
const skills =[
    "HTML",
    "Javascript",
    "Github",
    "CSS"
];
const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector('ul');
for(i=0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}

//4.3
const messageForm =document.querySelector("form[name='leave_message']");
messageForm.addEventListener("submit" , handleMessageForm);
function handleMessageForm(e){
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value; //console.log(name+email+message);
    const messageSection = document.querySelector("#messages")
    const messageList = messageSection.querySelector("ul")
    const newMessage = document.createElement('li');
    newMessage.innerHTML= `<a href= 'mailto: ${email}'> ${name} </a> <span>${message}</span>`
    const removeButton = document.createElement('button');
    removeButton.innerText = "remove";
    removeButton.setAttribute ("type" , "button");
    removeButton.addEventListener("click" , removeMessage);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    e.target.reset();
}

function removeMessage(e){
    const listItem = e.target.parentNode;
    listItem.remove();
}




