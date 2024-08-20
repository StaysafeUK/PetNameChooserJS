function petNameChooser(gender) {
  const maleDogsArray = ["Rex", "Rover", "Sunny", "Goldie", "Muncher", "Zeus", "Bruno", "Duke", "Cooper", "Bandit", "Beau", "Toby", "Bailey", "Benji", "Buster", "Ace"];
  const femaleDogsArray = ["Cougar", "Roxy", "Bella", "Luna", "Lady", "Stella", "Ginger", "Athena", "Willow", "Sadie", "Issachi", "Gracie", "Chloe", "Abby", "Scout", "Daisy"];

  if (gender === "male") {
      const randomIndexMD = Math.floor(Math.random() * maleDogsArray.length); // randomize male Dog Array
      const randomDogsMD = maleDogsArray[randomIndexMD];
      return `Your Dogs Name could be: ${randomDogsMD}`;
  } else { (gender === "female") 
      const randomIndexFD = Math.floor(Math.random() * femaleDogsArray
      .length); // randomize female Dog Array
      const randomDogsFD = femaleDogsArray[randomIndexFD];
      return `Your Dogs Name could be: ${randomDogsFD}`;
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
          let image = document.getElementById("interimage");
          image.src = "../PetNameChooserJS/assets/images/small-male-dog.webp";  //set male dog

          break;
      case "FemaleDogRadio":
          document.getElementById("h4").innerHTML = "Female Dog selected";
          const femaleDogName = petNameChooser("female");
          document.getElementById("result").innerHTML = femaleDogName;
          let image1 = document.getElementById("interimage");
          image1.src = "../PetNameChooserJS/assets/images/small-female-dog.webp"; //set female dog image
          break;
  }
}

let radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach(function (radio) {
  radio.addEventListener('change', function () {
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

// Call the submitForm function after the document is loaded to ensure it works correctly
window.onload = submitForm;