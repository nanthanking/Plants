//Hamburger part
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}
hamburger.addEventListener("click", toggleMenu);
menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

// pop up part
var modal = document.getElementById("myModal");
var btn = document.getElementById("subscribe-button");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  var email = document.getElementById("email-input");
  if(email.value== ""){
    modal.style.display = "block";
    document.querySelector(".model-contents").style.backgroundColor="red";
    span.style.color="black";
    document.getElementById("message").innerHTML = "please type proper mailId!";
  }else if (isEmail(email)){
    modal.style.display = "block";
    document.querySelector(".model-contents").style.backgroundColor="#39E5B6";
    span.style.color="white";
    document.getElementById("message").innerHTML = "Subscribed thank you!";
  }else{
  modal.style.display = "block";
  document.querySelector(".model-contents").style.backgroundColor="red";
  span.style.color="black";
  document.getElementById("message").innerHTML = "please type proper mailId!";
}
}


function isEmail(email) {
	return /^([a-z0-9_.])+\@([a-z])+\.([a-z])+$/g.test(email.value);
}
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Dynamic section part
let newSection = document.createElement("section");
let imageOne = document.createElement("img");
imageOne.classList.add("first-image");
imageOne.src = "../assets/images/plants-on-self.png";
let imageTwo = document.createElement("img");
imageTwo.classList.add("second-image");
imageTwo.src= "../assets/images/alo-like-plant.png";
newSection.classList.add('two-images-section');
newSection.appendChild(imageOne);
newSection.appendChild(imageTwo);
// console.log(newSection);
document.getElementById("author-section").appendChild(newSection);

//dynamic
let object =[
  {
    "image": '../assets/images/fiddle-leaf.png',
    "plantName": "Fiddle-leaf fig",
    "rate": "$110.99",
  },
  {
    "image": "./assets/images/aloe-vera.png",
    "plantName": "Aloe vera",
    "rate": "$110.99",
  },
  {
    "image": "./assets/images/sterilizia-plant.png",
    "plantName": "Strelitzia nicolal",
    "rate": "$110.99",
  },
  {
    "image": "./assets/images/ficus-plant.jpg",
    "plantName": "Ficus miscarupa",
    "rate": "$110.99",
  }
];
// console.log(object);
var output = "";

object.map((item) =>{
  output+=` <div class="gallary-image-wrapper">
  <img class="photos" src="${item.image}" alt="plants-images"/>
  <div class="amount">
      <p>${item.plantName}</p>
      <p>${item.rate}</p>
  </div>
</div>`
});
document.querySelector('.gallery').innerHTML = output;

// Scroll section
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}