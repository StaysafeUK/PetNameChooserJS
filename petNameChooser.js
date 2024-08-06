function petNameChooser () {
    const LargeMaleDogsArray = ["Rex", "Rover", "Sunny", "Goldie", "Muncher", "Zeus", "Bruno", "Duke"]
    const MediumMaleDogsArray = ["Cooper", "Bandit", "Beau", "Toby", "Bailey", "Benji", "Buster", "Ace"]
    const SmallMaleDogsArray = ["Roy", "Paddy", "Pal", "Lightning", "Reuban", "Levi", "Teddy", "Jack"]

    const LargeFemaleDogsArray = ["Cougar", "Roxy", "Bella", "Luna", "Lady", "Stella", "Ginger", "Athena"]
    const MediumFemaleDogsArray = ["Willow","Sadie","Issachi", "Gracie", "Chloe", "Abby", "Scout", "Daisy"]
    const SmallFemaleDogsArray = ["Molly", "Lucy", "Bonnie", "Pipper", "Princess", "Poppy", "Coco", "Mica"]

    const randomIndexDogsLMD = Math.floor(Math.random() * LargeMaleDogsArray.length);
    const randomDogsLMD = LargeMaleDogsArray[randomIndexDogsLMD];
    const combinedDogsLMD = `Your random Large Male Dog Name is: ${randomDogsLMD}`;

    return combinedDogsLMD;
}

const DogsName = petNameChooser();
console.log(DogsName);