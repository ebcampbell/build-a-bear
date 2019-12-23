var saveButton = document.querySelector('#save-button');
var backgroundContainer = document.querySelector('.backgrounds');
var allClothingOptions = document.querySelector('.all-clothing-options');
var allGarments = [];
var hatImages = document.querySelectorAll('.hat-img');
var hatContainer = document.querySelector('.hats');
var accessoriesImages = document.querySelectorAll('.accessories-img')
var accessoriesContainer = document.querySelector('.accessories');

window.addEventListener('load', createNewOutfitInstance);
saveButton.addEventListener('click', saveOutfit);
backgroundContainer.addEventListener('click', selectBackground);
allClothingOptions.addEventListener('click', selectGarment);
allClothingOptions.addEventListener('click', clickedGarmentButtons);
hatContainer.addEventListener('click', toggleHats);
accessoriesContainer.addEventListener('click', toggleAccessories);


function createNewOutfitInstance() {
  var outfit = new Outfit('none', 'none', 1);
}

function saveOutfit() {
  var titleInput = document.querySelector('input');
  var background = localStorage.getItem('selectedBackground')
  var uniqueId = generateId()
  var garments = JSON.parse(localStorage.getItem('selectGarments'));
  var savedOutfit = new Outfit(titleInput.value, background , uniqueId, garments)
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

function selectBackground(event) {
  var selectedBackground = event.target.id
  localStorage.setItem('selectedBackground', selectedBackground);
}

function selectGarment(event) {
  var hatButtons = document.querySelectorAll('.hats');
  var clothesButtons = document.querySelectorAll('.clothes')
  var accessoriesButtons = document.querySelectorAll('.accessories')

  for (var i = 0; i < hatButtons.length; i++) {
    if (event.target.parentElement.className === 'hats') {
      allGarments[0] = event.target.id
    }
  }
  for (var i = 0; i < clothesButtons.length; i++) {
    if (event.target.parentElement.className === 'clothes') {
      allGarments[1] = event.target.id
    }
  }
  for (var i = 0; i < accessoriesButtons.length; i++) {
    if (event.target.parentElement.className === 'accessories') {
      allGarments[2] = event.target.id
    }
  }

  var stringifiedGarments = JSON.stringify(allGarments)
  localStorage.setItem('selectGarments', stringifiedGarments);
}

function clickedGarmentButtons() {
  var buttons = document.querySelectorAll('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('button-clicked');
    if (buttons[i] === event.target) {
    event.target.classList.toggle('button-clicked');

      // event.target.classList.toggle('hidden');
    }
  }
}

function addHatGarments() {
  removeHats()
  var allHats = document.querySelector(`#${event.target.dataset.id}`);
  allHats.classList.toggle('hidden');
  event.target.dataset.active = 'true';
}

function removeHats() {
  for (var i = 0; i < hatImages.length; i++) {
    hatImages[i].classList.add('hidden');
    hatImages[i].classList.add('false');
  }
}

function toggleHats() {
  if (event.target.dataset.active === 'true') {
    removeHats()
    event.target.dataset.active = 'false'
  } else {
    removeHats()
    addHatGarments();
  }
}


function addAccessoriesGarments() {
  removeAccessories()
  var allAccessories = document.querySelector(`#${event.target.dataset.id}`);
  allAccessories.classList.toggle('hidden');
  event.target.dataset.active = 'true';
}

function removeAccessories() {
  for (var i = 0; i < accessoriesImages.length; i++) {
    accessoriesImages[i].classList.add('hidden');
    accessoriesImages[i].classList.add('false');
  }
}

function toggleAccessories() {
  if (event.target.dataset.active === 'true') {
    removeAccessories()
    event.target.dataset.active = 'false'
  } else {
    removeAccessories()
    addAccessoriesGarments();
  }
}








// function addAccessoriesGarments() {
//     var allAccessories = document.querySelector(`#${event.target.dataset.id}`);
//     for (var i = 0; i < accessoriesImages.length; i++) {
//       accessoriesImages[i].classList.add('hidden')
//       allAccessories.classList.remove('hidden');
//     }
// }
