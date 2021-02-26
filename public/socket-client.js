const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMessage = document.querySelector('#txtMessage');
const btnSend = document.querySelector('#btnSend');

const socket = io();

socket.on('connect', () => {
  lblOnline.style.display = '';
  lblOffline.style.display = 'none';
});

socket.on('disconnect', () => {
  lblOffline.style.display = '';
  lblOnline.style.display = 'none';
});

socket.on('send-message', message => {
  console.log(message);
});

btnSend.addEventListener('click', () => {
  const message = txtMessage.value;
  const payload = {
    message,
    id: 'asdsad',
    date: new Date().getTime(),
  };

  socket.emit('send-message', payload, id => {
    console.log('sever', id);
  });
});
