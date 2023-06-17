import { requestCountryFromAPI } from "./lib/requestCountry.js"
import { requestCityWeatherFromAPI } from "./lib/requestWeather.js"
import { createOptionsOfCountry, showInformationOnPage, createOptionsOfCity } from "./lib/DOM_manipulation.js";


let queryIDSelectCountry = document.querySelector('#idCountry')
let queryIDSelectCity = document.querySelector('#idCity')

let getIDOfCountry = queryIDSelectCountry.options[queryIDSelectCountry.selectedIndex].id
let getValueOfTheSelectedCountry = queryIDSelectCountry.options[queryIDSelectCountry.selectedIndex].value

let getIDOfCity = queryIDSelectCity.options[queryIDSelectCity.selectedIndex].id
let getValueOfTheSelectedCity = queryIDSelectCity.options[queryIDSelectCity.selectedIndex].value


document.getElementById("button_City").addEventListener("click", checkCityValue);
document.getElementById("button_Country").addEventListener("click", checkCountryValue);

var dnd = document.querySelector('#idCountry');
let id = dnd.options[dnd.selectedIndex].id;
console.log("id", id)

JSON.parse(requestCountryFromAPI()).data.forEach((element, Index) => {
    createOptionsOfCountry(element.country, Index)
});

function getCityAfterSelectCountry(index) {
    JSON.parse(requestCountryFromAPI()).data[index].cities.forEach((element,index) => {
        createOptionsOfCity(element,index)
    })
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
    getCityAfterSelectCountry(id)
}