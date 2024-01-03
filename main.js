function onClickButton(countryId) {
    if (countryId){
        if (countryId === "australiaButton") {
            window.location.href = 'australia.html'
        } else if (countryId === "japanButton"){
            window.location.href = "japan.html"
        } else if (countryId === "finlandButton"){
            window.location.href = "finland.html"
        } else if (countryId === "switzerlandButton"){
            window.location.href = "switzerland.html"
        } else {
            console.log("Button not found")
        }
    }
}

const sightsComponents = document.querySelectorAll('.sight');

sightsComponents.forEach((sightComponent) => {
  const sightItems = sightComponent.getElementsByTagName('li');


  for (let i = 0; i < sightItems.length; i++) {
    const sights = sightItems[i];
    sights.textContent = sights.textContent + "🚀";
  }
});

const foodComponents = document.querySelectorAll('.food');

foodComponents.forEach((foodComponent) => {
  const foodItems = foodComponent.getElementsByTagName('li');


  for (let i = 0; i < foodItems.length; i++) {
    const food = foodItems[i];
    food.textContent = food.textContent + "🍔";
  }
});
