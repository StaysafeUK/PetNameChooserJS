function generateMaleDogName() {
    const MaleDogsArray = ["Rex", "Rover", "Sunny", "Goldie", "Muncher", "Zeus", "Bruno", "Duke"];
    const randomIndex = Math.floor(Math.random() * MaleDogsArray.length);
    return MaleDogsArray[randomIndex];
  }
  
  function generateFemaleDogName() {
    const FemaleDogsArray = ["Willow", "Sadie", "Issachi", "Gracie", "Chloe", "Abby", "Scout", "Daisy"];
    const randomIndex = Math.floor(FemaleDogsArray.length); // You might want to fix this line (see note below)
    return FemaleDogsArray[randomIndex];
  }
  
  function displayRadioValue(radio) {
    document.getElementById("result").innerHTML = ""; // Clear previous results (if any)
    document.getElementById("h4").innerHTML = ""; // Clear previous heading (if any)
  
    function generateMaleDogName() {
        const MaleDogsArray = ["Rex", "Rover", "Sunny", "Goldie", "Muncher", "Zeus", "Bruno", "Duke"];
        const randomIndex = Math.floor(Math.random() * MaleDogsArray.length);
        return MaleDogsArray[randomIndex];
      }
      
      function generateFemaleDogName() {
        const FemaleDogsArray = ["Willow", "Sadie", "Issachi", "Gracie", "Chloe", "Abby", "Scout", "Daisy"];
        const randomIndex = Math.floor(FemaleDogsArray.length); // You might want to fix this line (see note below)
        return FemaleDogsArray[randomIndex];
      }
      
      function displayRadioValue(radio) {
        document.getElementById("result").innerHTML = ""; // Clear previous results (if any)
        document.getElementById("h4").innerHTML = ""; // Clear previous heading (if any)
      
        switch (radio.value) {
          case "MaleDogRadio":
            document.getElementById("h4").innerHTML = "Male Dog selected";
            const maleDogName = generateMaleDogName();
            document.getElementById("result").innerHTML = maleDogName;
            break;
          case "FemaleDogRadio":
            document.getElementById("h4").innerHTML = "Female Dog selected";
            const femaleDogName = generateFemaleDogName();
            document.getElementById("result").innerHTML = femaleDogName;
            break;
        }
      }
      
      // Assuming the radio buttons are already loaded
      const radioButtons = document.querySelectorAll('input[type="radio"]');
      
      radioButtons.forEach(function(radio) {
        radio.addEventListener('change',   
       function() {
          displayRadioValue(radio);
        });
      });
      
  
  // Assuming the radio buttons are already loaded
//   const radioButtons = document.querySelectorAll('input[type="radio"]');
  
//   radioButtons.forEach(function(radio) {
//     radio.addEventListener('change',   
//    function() {
//       displayRadioValue(radio);
//     });
