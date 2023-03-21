let urlLogin = "http://localhost:2000/login";
import user from "../db.json" assert { type: "json" };
console.log(user.login);

let id = user.login.length;

let username = document.querySelector('.username');

fetch(`${urlLogin}/${id}`)
.then(res => res.json())
.then((data => hername(data)))

function hername(e) {
  let name=e.loginName
  username.innerHTML = name

}

let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');
hamburger.addEventListener('click', (e) => {
  console.log(e.target)
  menu.classList.toggle('d-none')
})


// slider start
// const slider = document.querySelector(".slider"),
//   active = document.querySelector("#active"),
//   line1 = document.querySelector("#line1"),
//   line2 = document.querySelector("#line2"),
//   line3 = document.querySelector("#line3");
// line1.addEventListener("click", function () {
//   slider.style.transform = "translateX(0)";
//   active.style.top = 0;
// });
// line2.addEventListener("click", function () {
//   slider.style.transform = "translateX(-35%)";
//   active.style.top = "80px";
// });
// line3.addEventListener("click", function () {
//   slider.style.transform = "translateX(-67%)";
//   active.style.top = "160px";
// });
//   slider end



const top = document.querySelector('.top');
const header = document.querySelector(".header");
top.addEventListener('click', () => {
  header.scrollIntoView({ behavior: 'smooth' });
})

let menu_x = document.querySelector(".hamburger_sm");
let menu_sm_l = document.querySelector('.menu_sm')
let menu_sm_x = document.querySelector('.menu_sm_x')




menu_x.addEventListener('click', () => {
  console.log("salom")
  menu_sm_l.classList.toggle('block_s')
})


menu_sm_x.addEventListener('click', () => {
  console.log('salomlar')
  if (menu_sm_l.classList.contains('block_s')) {
    menu_sm_l.classList.remove("block_s")
  }
})