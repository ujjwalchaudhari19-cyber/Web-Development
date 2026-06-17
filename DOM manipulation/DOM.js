const container = document.querySelector('body');

const content = document.createElement('p');
content.classList.add('redText');
content.textContent="Hey I'm Red";

container.appendChild(content);

content.style.color= 'red';

const content2 = document.createElement('h3');
content2.classList.add('blueText');
content2.textContent="I'm a blue h3!";

container.appendChild(content2);

content2.style.color= 'blue';

const div = document.createElement('div');


const h1= document.createElement('h1');
h1.textContent= "I'm in a div!";

div.appendChild(h1);
container.appendChild(div);

const p=document.createElement('p');
p.textContent = "ME TOO!";

div.appendChild(p)


