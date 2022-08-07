// Write your code here!
document.querySelector("main");
main.remove();

const newHeader=document.createElement('h1');

newHeader.setAttribute('id','victory');

document.body.appendChild(newHeader);

newHeader.textContent="YOUR-NAME is the champion";