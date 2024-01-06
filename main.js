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

