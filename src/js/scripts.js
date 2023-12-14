// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)
// Mug type gallery variables and functions
let currentMugImageIndex = 1;
let latestImagePath = "images/w1-white.png"
const totalMugImages = 3; // Assuming you have 3 mug images

const displayedMugImage = document.getElementById('displayed-image');
const displayedMugImage2 = document.getElementById('displayed-image-2');
const displayedMugImage3 = document.getElementById('displayed-image3');
const previousMugButton = document.querySelector('.previous-image');
const nextMugButton = document.querySelector('.next-image');

function changeMugImage(change) {
  currentMugImageIndex += change;

  if (currentMugImageIndex < 1) {
    currentMugImageIndex = totalMugImages;
  } else if (currentMugImageIndex > totalMugImages) {
    currentMugImageIndex = 1;
  }

  displayedMugImage.src = `images/w${currentMugImageIndex}.png`;
  latestImagePath = `images/w${currentMugImageIndex}.png`;
}

// Event listeners for the mug type gallery buttons
previousMugButton.addEventListener('click', () => changeMugImage(-1));
nextMugButton.addEventListener('click', () => changeMugImage(1));

// Color gallery variables and functions
let currentColorImageIndex = 1; // This starts at 1
const colorNames = ['white', 'yellow', 'orange']; // Assuming you have 3 color images

const displayedColorImage = document.getElementById('displayed-image-2');
const previousColorButton = document.querySelector('.previous-image-color');
const nextColorButton = document.querySelector('.next-image-color');

function changeColorImage(change) {
  currentColorImageIndex += change;

  if (currentColorImageIndex < 1) {
    currentColorImageIndex = colorNames.length;
  } else if (currentColorImageIndex > colorNames.length) {
    currentColorImageIndex = 1;
  }

  const colorName = colorNames[currentColorImageIndex - 1]; // Arrays are 0-indexed
  displayedColorImage.src = `images/w${currentMugImageIndex}-${colorName}.png`;
  latestImagePath = `images/w${currentMugImageIndex}-${colorName}.png`;
}

// Event listeners for the color gallery buttons
previousColorButton.addEventListener('click', () => changeColorImage(-1));
nextColorButton.addEventListener('click', () => changeColorImage(1));


const nextButton1 = document.querySelector('.looksgood-button1');
const nextButton2 = document.querySelector('.looksgood-button2');
const sectionOne = document.getElementById('one');
const sectionTwo = document.getElementById('two');
const sectionThree = document.getElementById('three');
const sectionFour = document.getElementById('four');
const backButton = document.querySelector('.back-button2');
const orderNow = document.querySelector('.order-now-button');

// Function to hide a section
function hideSection(section) {
  section.style.display = 'none';
}

// Function to show a section
function showSection(section) {
  section.style.display = 'block';
}

// Event listener for the first "Looks Good! Next!" button
nextButton1.addEventListener('click', function () {
  hideSection(sectionOne);
  showSection(sectionTwo);
  displayedMugImage2.src = `images/w${currentMugImageIndex}.png`;
  console.log("log is ", displayedMugImage2.src)
});

// Event listener for the second "Looks Good! Next" button
nextButton2.addEventListener('click', function () {
  hideSection(sectionTwo);
  showSection(sectionThree);
  displayedMugImage3.src = latestImagePath;
});

backButton.addEventListener('click', function () {
  hideSection(sectionTwo);
  showSection(sectionOne);
});