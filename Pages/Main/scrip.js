let burgerMenu = document.getElementsByClassName("burger-menu")[0];
let burgerScreen = document.getElementsByClassName("burger-screen")[0];
let burgerRotated = false;
burgerMenu.addEventListener("click", () => {
  if (!burgerRotated) {
    burgerMenu.style = "transform: rotate(90deg)";
    burgerRotated = true;
    burgerScreen.style = "display:flex";
  } else {
    burgerMenu.style = "transform: rotate(180deg)";
    burgerRotated = false;
    burgerScreen.style = "display:none";
  }
});

let coverImg = document.getElementsByClassName("pet-card-cover-img")[0];
let coverH2 = document.getElementsByClassName("pet-card-cover-context")[0]
  .children[0];
let coverH3 = document.getElementsByClassName("pet-card-cover-context")[0]
  .children[1];
let coverParagraph = document.getElementsByClassName(
  "pet-card-cover-context"
)[0].children[2];

let coverListAge = document.getElementsByClassName("pet-card-cover-list")[0]
  .children[0];
let coverListInoculations = document.getElementsByClassName(
  "pet-card-cover-list"
)[0].children[1];
let coverListDiseases = document.getElementsByClassName(
  "pet-card-cover-list"
)[0].children[2];
let coverListParasites = document.getElementsByClassName(
  "pet-card-cover-list"
)[0].children[3];

let cards = document.addEventListener("click", (elem) => {
  if (elem.path[1].classList.value === "pets-cards1") {
    coverImg.src = "/Assets/pets-katrine.png";
    coverH2.innerHTML = "Jennifer";
    coverH3.innerHTML = "Dog - Labrador";
    coverParagraph.innerHTML =
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.";
  }
  console.log((coverImg.attributes.src = "nice"));
  // console.log(elem.path[1].classList.value)
});

fetch("../../pets.json") //path to the file with json data
  .then((response) => {
    return response.json();
  })
  .then(getData);

function getData(data) {
  // console.log(data);
}
