let textbox = document.getElementById('msg');

textbox.addEventListener('keydown', (event) => {
  console.log(`key: ${event.key}, code: ${event.code}`);
});