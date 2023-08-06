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

function convertTemprature(tempAsFahrenheit){
    let TempCelsius = (tempAsFahrenheit - 32)/ 1.8
    return TempCelsius.toFixed(2)
}

function showInformationOnPage(infomationObject) {
    let cityName = document.getElementById("CityName")
    let timeZone = document.getElementById("TimeZone")
    let description = document.getElementById("description")
    let temperature = document.getElementById("Temperature")

    cityName.innerHTML = infomationObject.resolvedAddress
    temperature.innerHTML = `Current temperature: ${convertTemprature(infomationObject.currentConditions.temp)}°`
    timeZone.innerHTML = `Timezone: ${infomationObject.timezone}`
    description.innerHTML = `Weather Description: ${infomationObject.description}`

}

export {
    createOptionsOfCountry,
    showInformationOnPage,
    createOptionsOfCity,
}