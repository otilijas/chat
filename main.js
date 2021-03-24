let msg = 'Veikia';
console.log(msg);

const container = document.querySelector('.container-1')
let message = document.querySelector('#writtenMessage')
let username = document.querySelector('#username')

document.querySelector('#submit').addEventListener('click', function () {
    if (message.value && username.value) {
        let newMessage = document.createElement('p');
        newMessage.className = 'message right';
        let newUser = document.createElement('p');
        newUser.className = 'user';
        newMessage.innerHTML = message.value;
        newUser.innerHTML = username.value;
        container.appendChild(newMessage);
        container.appendChild(newUser);
        message.value = "";
        username.value = "";
        console.log('added');
    }
})
