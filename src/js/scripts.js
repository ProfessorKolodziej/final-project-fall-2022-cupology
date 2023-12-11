// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

let imageIndex = 1;
const totalImages = 3;

const displayedImage = document.getElementById('displayed-image');

function prevImage() {
  if (imageIndex - 1 > 0) {
    imageIndex = imageIndex - 1
  } else if (imageIndex - 1 <= 0) {
    imageIndex = 3
  }

  displayedImage.src = `/images/w${imageIndex}.png`;
  logImageIndex();
}

const preButton =
  document.querySelector(".previous-image");
console.log(preButton)
if (preButton !== "undefined") {
  preButton.addEventListener('click', prevImage);
  console.log(preButton)
}

function nextImage() {
  imageIndex = (imageIndex % totalImages) + 1;
  displayedImage.src = `/images/w${imageIndex}.png`;
  console.log("nextfunction")
}

const nextButton =
  document.querySelector(".next-image");
console.log(nextButton)
if (nextButton !== "undefined") {
  nextButton.addEventListener('click', nextImage1);
  console.log(nextButton)
}

const looksgoodButton1 =
  document.querySelector(".looksgood-button1");
console.log(looksgoodButton1)
if (looksgoodButton1 !== "undefined") {
  looksgoodButton1.addEventListener('click', ok1);
  console.log(looksgoodButton1)
}

function logImageIndex() {
  console.log(`search-image：${imageIndex}`);
}

var imageIndex1 = 1;
function ok1() {
  // get-element  
  var element1 = document.getElementById("one");
  // display-none  
  element1.style.display = "none";
  var element2 = document.getElementById("two");
  // display-none  
  element2.style.display = "block";
  const displayedImage2 = document.getElementById('displayed-image2');
  if (imageIndex == 1) {
    displayedImage2.src = `/images/${imageIndex}${imageIndex1}.png`;
  } else if (imageIndex == 2) {
    displayedImage2.src = `/images/${imageIndex}${imageIndex1}.png`;
  } else if (imageIndex == 3) {
    displayedImage2.src = `/images/${imageIndex}${imageIndex1}.png`;
  }
}

function prevImage1() {
  const displayedImage2 = document.getElementById('displayed-image2');
  if (imageIndex1 - 1 > 0) {
    imageIndex1 = imageIndex1 - 1
  } else if (imageIndex1 - 1 <= 0) {
    imageIndex1 = 3
  }
  if (imageIndex == 1) {
    displayedImage2.src = `/images/${imageIndex}${imageIndex1}.png`;
  } else if (imageIndex == 2) {
    displayedImage2.src = `/images/${imageIndex}${imageIndex1}.png`;
  } else if (imageIndex == 3) {
    displayedImage2.src = `/images/${imageIndex}${imageIndex1}.png`;
  }

}

function nextImage1() {
  const displayedImage2 = document.getElementById('displayed-image2');
  imageIndex1 = (imageIndex1 % totalImages) + 1;

  if (imageIndex == 1) {
    displayedImage2.src = `/images/${imageIndex}${imageIndex1}.png`;
  } else if (imageIndex == 2) {
    displayedImage2.src = `/images/${imageIndex}${imageIndex1}.png`;
  } else if (imageIndex == 3) {
    displayedImage2.src = `/images/${imageIndex}${imageIndex1}.png`;
  }
}

const nextColor =
  document.querySelector(".next-image-color");
console.log(nextColor)
if (nextColor !== "undefined") {
  nextbutton.addEventListener('click', nextImage1);
  console.log(nextColor)
}

function back() {
  // get-element  
  var element1 = document.getElementById("one");
  // display-none  
  element1.style.display = "block";
  var element2 = document.getElementById("two");
  // display-none  
  element2.style.display = "none";

  var backgroundment = document.getElementsByClassName('background');
  backgroundment[0].style.backgroundImage = "url('/images/1.jfif')";
  // overlay-background-color
  var overlays = document.getElementsByClassName('overlay');
  for (var i = 0; i < overlays.length; i++) {
    overlays[i].style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
  }
}

const backButton2 =
  document.querySelector(".back-button2");
console.log(backButton2);
if (backButton2) {  // Checks if backButton2 is not null or undefined
  backButton2.addEventListener('click', back);
  console.log("Event listener added to backButton2");
}

function ok2() {
  // body-image 
  var backgroundment = document.getElementsByClassName('background');
  backgroundment[0].style.backgroundImage = "url('/images/2.jfif')";

  // overlay-color 
  var overlays = document.getElementsByClassName('overlay');
  for (var i = 0; i < overlays.length; i++) {
    overlays[i].style.backgroundColor = 'rgb(163 163 163 / 47%)';
  }
  // get-element 
  var element2 = document.getElementById("two");
  // display-none  
  element2.style.display = "none";
  var element3 = document.getElementById("three");
  // display-none  
  element3.style.display = "block";

  const displayedImage3 = document.getElementById('displayed-image3');
  if (imageIndex == 1) {
    displayedImage3.src = `/images/${imageIndex}${imageIndex1}a.png`;
  } else if (imageIndex == 2) {
    displayedImage3.src = `/images/${imageIndex}${imageIndex1}a.png`;
  } else if (imageIndex == 3) {
    displayedImage3.src = `/images/${imageIndex}${imageIndex1}a.png`;
  }
}
const looksgoodButton2 =
  document.querySelector(".looksgood-button2");
console.log(looksgoodButton2)
if (looksgoodButton2 !== "undefined") {
  looksgoodButton1.addEventListener('click', ok2);
  console.log(looksgoodButton2)
}

function Reset() {
  // get-confirmation-card  
  // var result = confirm("confirm to reset?");  
  document.getElementById("confirmationModal").style.display = "block";

}

function queConfirmation() {
  location.reload();
}
function closeConfirmation() {
  document.getElementById("confirmationModal").style.display = "none";
}

function order() {
  document.getElementById("three").style.display = "none";
  // body-image
  var backgroundment = document.getElementsByClassName('background');
  backgroundment[0].style.backgroundImage = "url('/images/thank.png')";

  // overlay-color 
  var overlays = document.getElementsByClassName('overlay');
  for (var i = 0; i < overlays.length; i++) {
    overlays[i].style.backgroundColor = 'rgb(0 0 0 / 0%)';
  }
}

