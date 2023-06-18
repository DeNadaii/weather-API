function createOptionsOfCountry(countryName, indexFromQuery) {
    let createElementeOpiton = document.createElement("OPTION");
    createElementeOpiton.setAttribute("value", countryName);
    createElementeOpiton.setAttribute("id", indexFromQuery)
    let createText = document.createTextNode(countryName);
    createElementeOpiton.appendChild(createText);
    document.getElementById("idCountry").appendChild(createElementeOpiton);
}

function createOptionsOfCity(cityName,indexFromQuery) {
    let createElementeOpiton = document.createElement("OPTION");
    createElementeOpiton.setAttribute("value", cityName);
    createElementeOpiton.setAttribute("id",indexFromQuery)
    let createText = document.createTextNode(cityName);
    createElementeOpiton.appendChild(createText);
    document.getElementById("idCity").appendChild(createElementeOpiton);
}


function showInformationOnPage(infomationObject) {
    let cityName = document.getElementById("CityName")
    let timeZone = document.getElementById("TimeZone")
    let description = document.getElementById("description")
    let temperature = document.getElementById("Temperature")

    cityName.innerHTML = infomationObject.resolvedAddress
    temperature.innerHTML = infomationObject.currentConditions.temp
    timeZone.innerHTML = infomationObject.timezone
    description.innerHTML = infomationObject.description

}

export {
    createOptionsOfCountry,
    showInformationOnPage,
    createOptionsOfCity,
}