function createOptionsOfCountry(countryName, indexFromQuery) {
    let createElementeOpiton = document.createElement("OPTION");
    createElementeOpiton.setAttribute("value", countryName);
    createElementeOpiton.setAttribute("id", indexFromQuery)
    let createText = document.createTextNode(countryName);
    createElementeOpiton.appendChild(createText);
    document.getElementById("idCountry").appendChild(createElementeOpiton);
}

function createOptionsOfCity(cityName) {
    let createElementeOpiton = document.createElement("OPTION");
    createElementeOpiton.setAttribute("value", cityName);
    let createText = document.createTextNode(cityName);
    createElementeOpiton.appendChild(createText);
    document.getElementById("idCity").appendChild(createElementeOpiton);
}


function showInformationOnPage(infomationObject) {
    let cityName = document.getElementById("CityName")
    let timeZone = document.getElementById("TimeZone")
    let description = document.getElementById("description")

    cityName.innerHTML = infomationObject.cityAddres
    timeZone.innerHTML = infomationObject.cityTimeZone
    description.innerHTML = infomationObject.description

}

export {
    createOptionsOfCountry,
    showInformationOnPage,
    createOptionsOfCity,
}