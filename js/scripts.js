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

function nextImage() {
  imageIndex = (imageIndex % totalImages) + 1;
  displayedImage.src = `/images/w${imageIndex}.png`;
  console.log("nextfunction")
}

const nextbutton =
  document.querySelector(".next-image");
console.log(nextbutton)
if (nextbutton !== "undefined") {
  nextbutton.addEventListener('click', nextImage);
  console.log(nextbutton)
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