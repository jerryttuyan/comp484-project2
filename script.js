$(function () {
  // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $(".treat-button").click(clickedTreatButton);
  $(".play-button").click(clickedPlayButton);
  $(".exercise-button").click(clickedExerciseButton);
  $(".flame-button").click(clickedFlameButton);
  $(".clear-log").click(function () {
    // Remove all items inside the activity log.
    $(".activity-log").empty();
    showPetComment("Memory Wiped!");
  });
});

// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = { name: "Spyro", weight: 10, happiness: 5 };

let animationTimer;

function playAnimation(imagePath, duration) {
  clearTimeout(animationTimer);
  document.querySelector(".pet-image").src = imagePath;

  animationTimer = setTimeout(function () {
    document.querySelector(".pet-image").src = "images/spyro-idle.gif";
  }, duration);
}

// For bad pet owners
function showPetComment(normalComment) {
  if (pet_info.weight === 0 && pet_info.happiness === 0) {
    $(".pet-comment").text("I need a treat and some cheering up!");
  } else if (pet_info.weight === 0) {
    $(".pet-comment").text("I'm hungry! Give me a treat!");
  } else if (pet_info.happiness === 0) {
    $(".pet-comment").text("I'm sad! Let's play!");
  } else {
    $(".pet-comment").text(normalComment);
  }
}

function clickedTreatButton() {
  // Increase pet happiness
  pet_info["happiness"] += 1;
  // Increase pet weight
  pet_info["weight"] += 1;
  checkAndUpdatePetInfoInHtml();

  showPetComment("Yum! Thanks for the treat!");
  playAnimation("images/spyro-treat.gif", 1620);

  // Add the newest activity to the beginning of the list.
  $(".activity-log").prepend("<li>Spyro ate a treat!</li>");
}

function clickedPlayButton() {
  // Increase pet happiness
  pet_info["happiness"] += 1;
  // Decrease pet weight
  pet_info["weight"] -= 1;
  checkAndUpdatePetInfoInHtml();

  showPetComment("Playing!");
  playAnimation("images/spyro-play.gif", 1530);

  // Add the newest activity to the beginning of the list.
  $(".activity-log").prepend("<li>Spyro played!</li>");
}

function clickedExerciseButton() {
  // Decrease pet happiness
  pet_info["happiness"] -= 1;
  // Decrease pet weight
  pet_info["weight"] -= 1;
  checkAndUpdatePetInfoInHtml();

  showPetComment("Burning Calories!");
  playAnimation("images/spyro-exercise.gif", 1350);

  // Add the newest activity to the beginning of the list.
  $(".activity-log").prepend("<li>Spyro exercised!</li>");
}

function clickedFlameButton() {
  // Increase pet happiness
  pet_info["happiness"] += 1;
  // Decrease pet weight
  pet_info["weight"] -= 1;
  checkAndUpdatePetInfoInHtml();

  showPetComment("Flame on!");
  playAnimation("images/spyro-flame.gif", 1170);

  // Add the newest activity to the beginning of the list.
  $(".activity-log").prepend("<li>Spyro used flame!</li>");
}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  // Add conditional so if weight is lower than zero.
  if (pet_info["weight"] < 0) {
    pet_info["weight"] = 0;
  }
  if (pet_info["happiness"] < 0) {
    pet_info["happiness"] = 0;
  }
}

// Updates your HTML with the current values in your pet_info object
function updatePetInfoInHtml() {
  $(".name").text(pet_info["name"]);
  $(".weight").text(pet_info["weight"]);
  $(".happiness").text(pet_info["happiness"]);
}
