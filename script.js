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

function checkCityValue() {
    var dnd = document.querySelector('#idCity');
    let cityname = dnd.options[dnd.selectedIndex].value;
    console.log("city Name:", cityname)
    showInformationOnPage(JSON.parse(requestCityWeatherFromAPI(cityname)))
    console.log(JSON.parse(requestCityWeatherFromAPI(cityname)))
}

function checkCountryValue() {
    var dnd = document.querySelector('#idCountry');
    let id = dnd.options[dnd.selectedIndex].id;
    console.log("id country:", id)
    removeOptions(document.getElementById('idCity'));
    getCityAfterSelectCountry(id)
}