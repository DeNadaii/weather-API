import { requestCountryFromAPI } from "./lib/requestCountry.js"
import { requestCityWeatherFromAPI } from "./lib/requestWeather.js"
import { createOptionsOfCountry, showInformationOnPage, createOptionsOfCity } from "./lib/DOM_manipulation.js";


document.getElementById("button_City").addEventListener("click", checkCityValue);
document.getElementById("button_Country").addEventListener("click", checkCountryValue);


JSON.parse(requestCountryFromAPI()).data.forEach((element, Index) => {
    createOptionsOfCountry(element.country, Index)
});

function getCityAfterSelectCountry(index) {
    JSON.parse(requestCountryFromAPI()).data[index].cities.forEach((element,index) => {
        createOptionsOfCity(element,index)
    })
}

function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
       selectElement.remove(i);
    }
}

function createInformationPanel(){
    var div = document.getElementById("generalInfo")
    div.setAttribute("class","weather-info")
    div.innerHTML = `
    <p id="CityName"></p>
    <p id="Temperature"></p>
    <p id="TimeZone"></p>
    <p id="description"></p>
    `
}

function checkCityValue() {
    var dnd = document.querySelector('#idCity');
    var cityname = dnd.options[dnd.selectedIndex].value;
    console.log("city Name:", cityname)
    createInformationPanel()
    showInformationOnPage(JSON.parse(requestCityWeatherFromAPI(cityname)))
    console.log(JSON.parse(requestCityWeatherFromAPI(cityname)))
}

function checkCountryValue() {
    var dnd = document.querySelector('#idCountry');
    var id = dnd.options[dnd.selectedIndex].id;
    console.log("id country:", id)
    removeOptions(document.getElementById('idCity'));
    getCityAfterSelectCountry(id)
}

