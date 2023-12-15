// const payload = 'username: obi\npassword: test';
// const res = extractUsernameAndPassword(payload)
// const username = res.username;
//const username = document.getElementById("name").value;
const form = document.getElementById('chatForm');
const msgInput = document.getElementById('chatForm');
const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Omnipotent", "OmniNET", "baphomet", "Omenicrom", "e621", "Google", "FBI", "GlowieKiller", "Satan", "SadSatan", "WormGPT"];
const randomName = getRandomName(names);

const socket = new WebSocket('ws://192.168.1.2:6969/Chat?name=' + randomName);

socket.addEventListener('open', (Event) => {
    console.log('Connection made: ', Event);
    socket.send(username + " has joined!");
});

socket.addEventListener('message', (Event) => {
    console.log(Event.data);
    if (Event.data.name !== username)
    {
        displayThatShit(Event.data);
    }
    
});

function EnterKey(event) {
    var x = event.code;
    if(x == "Enter") {
        sendMessage();
    }    
}

function setUserName() {
    var nameInput = document.getElementById('nameInput');
    var userName = document.getElementById('userName');

}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }
  

function displayThatShit(message) {
    const wtfdidyoujustbringtothisunholyrealm = document.getElementById("chatShow");
    const MElement = document.createElement('p');
    MElement.textContent = message;
    if (!message.includes(username))
    {
        wtfdidyoujustbringtothisunholyrealm.appendChild(MElement);
    }
}

function getRandomName(nameList) {
    // Check if the nameList is empty
    if (nameList.length === 0) {
      return "No names in the list.";
    }
  
    // Generate a random index within the range of the array
    const randomIndex = Math.floor(Math.random() * nameList.length);
  
    // Retrieve the random name from the list
    const randomName = nameList[randomIndex];
  
    return randomName;
  }


function sendMessage() {
    var messageText = document.querySelector('.chatMsg').textContent;
    var chatShow = document.getElementById('chatShow');
    if (messageText.trim() !== '')
    {
        chatShow.innerHTML += '<p>You: ' + messageText + '</p>';
        socket.send(username + ": " + messageText);
        document.querySelector('.chatMsg').textContent = '';
    }
}

function enableSendButton() {
    var messageText = document.querySelector('.chatMsg').textContent;
    var sendButton = document.getElementById('sendButton');

    if (messageText.trim() !== '') {
        sendButton.disabled = false;
    } else {
        sendButton.disabled = true;
    }
}
