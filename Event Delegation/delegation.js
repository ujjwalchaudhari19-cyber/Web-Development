//In JavaScript, if you have a large no. of event handlers on a page, these event handlers will directly impact the performance for the following reasons: 
//Each event handler is a function which is also an object, that takes up memory. The more objects in the memory, slower the performance.
//It takes time to assign event handlers, which causes a delay in the interactivity of the page.

let menu = document.querySelector('#menu');

menu.addEventListener('click', (event) => {
  let target = event.target;

  switch (target.id){
    case 'home':
      console.log("Home menu item was clicked");
      break;

    case 'dashboard':
      console.log("Dashboard menu item was clicked");
      break;

    case 'report':
      console.log('Report menu item was clicked');
      break;
  }
});