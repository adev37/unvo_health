let menu = document.querySelector('#menu');
let links = document.querySelector('#links');
let closed = document.querySelector('#close');

menu.addEventListener('click',()=>{
    if (links.style.display === "none") {
        links.style.display = "block";
        closed.style.display = "block";
        menu.style.display = "none"
      } else {
        links.style.display = "none";
        closed.style.display = "none";
      }
})

closed.addEventListener('click',()=>{
  if(links.style.display === "block"){
    links.style.display = "none";
    menu.style.display = "block"
    closed.style.display = "none"
  } else{
    links.style.display = "block";
    menu.style.display = "none";
  }
})