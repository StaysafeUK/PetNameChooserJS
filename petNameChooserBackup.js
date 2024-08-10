function petNameChooser () {
    const MaleDogsArray = ["Rex", "Rover", "Sunny", "Goldie", "Muncher", "Zeus", "Bruno", "Duke"]
  //  const MediumMaleDogsArray = ["Cooper", "Bandit", "Beau", "Toby", "Bailey", "Benji", "Buster", "Ace"]
  //  const SmallMaleDogsArray = ["Roy", "Paddy", "Pal", "Lightning", "Reuban", "Levi", "Teddy", "Jack"]

  //  const LargeFemaleDogsArray = ["Cougar", "Roxy", "Bella", "Luna", "Lady", "Stella", "Ginger", "Athena"]
    const FemaleDogsArray = ["Willow","Sadie","Issachi", "Gracie", "Chloe", "Abby", "Scout", "Daisy"]
  //  const SmallFemaleDogsArray = ["Molly", "Lucy", "Bonnie", "Pipper", "Princess", "Poppy", "Coco", "Mica"]

    const randomIndexDogsMD = Math.floor(Math.random() * MaleDogsArray.length);
    const randomDogsMD = MaleDogsArray[randomIndexDogsMD];

    const randomIndexDogsFD = Math.floor(Math.random() * FemaleDogsArray.length);
    const randomDogsFD = FemaleDogsArray[randomIndexDogsMD];

    if (radio.radioButtons === radio.maleDogName {
    const combinedDogsMD = `Your random Male Dog Name is: ${randomDogsMD}`;
    return combinedDogsMD
    } else  {

    const combinedDogsFD = `Your random Female Dog Name is: ${randomDogsMD}`;
    return combinedDogsFD
    }
}

const DogsName = petNameChooser();
console.log(DogsName);

function displayRadioValue(radio) {
    document.getElementById("result").innerHTML = ""; // Clear previous results (if any)
    document.getElementById("h4").innerHTML = ""; // Clear previous heading (if any)
  
    switch (radio.value) {
      case "MaleDogRadio":
        document.getElementById("h4").innerHTML = "Male Dog selected";
        // You can get the dog size from another input or hardcode it here
        const maleDogName = petNameChooser("male"); // Replace "large" with the desired size
        document.getElementById("result").innerHTML = maleDogName;
        break;
      case "FemaleDogRadio":
        document.getElementById("h4").innerHTML = "Female Dog selected";
        // You can get the dog size from another input or hardcode it here
        const femaleDogName = petNameChooser("female"); // Replace "large" with the desired size
        document.getElementById("result").innerHTML = femaleDogName;
        break;
    }
  }

  function displayRadioValue(radio) {
    document.getElementsById("result").innerHTML = "";
    if (radio.checked) {
      document.getElementById("result").innerHTML += radio.name + " Value: " + radio.value + "<br>";
    }
  }


  function submitForm() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked)   
{
        displayRadioValue(radioButtons[i]);
      }
    }
  }
  
  // Assuming the radio buttons are already loaded
//   const radioButtons = document.querySelectorAll('input[type="radio"]');
  
//   radioButtons.forEach(function(radio) {
//     radio.addEventListener('change',   
//    function() {
//       displayRadioValue(radio);
//     });
//   });