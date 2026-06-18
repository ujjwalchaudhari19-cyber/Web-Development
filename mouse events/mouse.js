let btn= document.querySelector('#btn')


btn.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});
//This prevents the menu pop up when the right key is pressed

btn.addEventListener('mouseup', (e) => {
  let msg = document.querySelector('#msg');
  switch (e.button){  //Switch case is used instead of long if-else conditionals to look cleaner
    case 0:
      msg.textContent='Left mouse button clicked';
      break;

    case 1:
      msg.textContent='Middle mouse button clicked';
      break;

    case 2:
      msg.textContent = 'Right mouse button clicked';
      break;

    default:
      msg.textContent = `Unknown mouse button code: ${event.button}`;
  }
});

