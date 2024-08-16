function petNameChooser(gender) {
  const maleDogsArray = ["Rex", "Rover", "Sunny", "Goldie", "Muncher", "Zeus", "Bruno", "Duke", "Cooper", "Bandit", "Beau", "Toby", "Bailey", "Benji", "Buster", "Ace"];
  const femaleDogsArray = ["Willow", "Sadie", "Issachi", "Gracie", "Chloe", "Abby", "Scout", "Daisy", "Willow", "Sadie", "Issachi", "Gracie", "Chloe", "Abby", "Scout", "Daisy"];
  
  if (gender === "male") {
    const randomIndexMD = Math.floor(Math.random() * maleDogsArray.length);
    const randomDogsMD = maleDogsArray[randomIndexMD];
    return `Your suggested Male Dog Name is: ${randomDogsMD}`;
  } else if (gender === "female") {
    const randomIndexFD = Math.floor(Math.random() * femaleDogsArray.length);
    const randomDogsFD = femaleDogsArray[randomIndexFD];
    return `Your suggested Female Dog Name is: ${randomDogsFD}`;
  } else {
    return "Please specify a valid gender.";
  }
}

function displayRadioValue(radio) {
  document.getElementById("result").innerHTML = ""; // Clear previous results (if any)
  document.getElementById("h4").innerHTML = ""; // Clear previous heading (if any)

  switch (radio.value) {
    case "MaleDogRadio":
      document.getElementById("h4").innerHTML = "Male Dog selected";
      const maleDogName = petNameChooser("male");
      document.getElementById("result").innerHTML = maleDogName;
      break;
    case "FemaleDogRadio":
      document.getElementById("h4").innerHTML = "Female Dog selected";
      const femaleDogName = petNameChooser("female");
      document.getElementById("result").innerHTML = femaleDogName;
      break;
  }
}

let radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach(function(radio) {
  radio.addEventListener('change', function() {
    displayRadioValue(radio);
  });
});

function submitForm() {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      displayRadioValue(radioButtons[i]);
      break; // Stop once a checked radio button is found
    }
  }
}

// Call the submitForm function after the document is fully loaded to ensure it works correctly
window.onload = submitForm;
