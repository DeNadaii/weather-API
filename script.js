import { requestCountryFromAPI } from "./modules/requestCountry.js"
import { requestCountryWeatherFromAPI } from "./modules/requestWeather.js"
import { createOptionsOfCountry, showInformationOnPage, createOptionsOfCity } from "./modules/DOM_manipulation.js";

let queryIDSelectCountry = document.querySelector('#idCountry')
let queryIDSelectCity = document.querySelector('#idCity')
let getIDOfCountry = queryIDSelectCountry.options[queryIDSelectCountry.selectedIndex].id
let getValueOfTheSelectedCountry = queryIDSelectCountry.options[queryIDSelectCountry.selectedIndex].value

document.getElementById("button").addEventListener("click", onButtonClick);
document.getElementById("idCountry").addEventListener("mousedown", checkCountryValue);
document.getElementById("idCity").addEventListener("mousedown", checkCountryValue);

var dnd = document.querySelector('#idCountry');
let id = dnd.options[dnd.selectedIndex].id;
console.log("id", id)

JSON.parse(requestCountryFromAPI()).data.forEach((element, Index) => {
    createOptionsOfCountry(element.country, Index)
});

console.log(getValueOfTheSelectedCountry == "noValueCountry")


//console.log("console log from main script weather: ", JSON.parse(requestCountryWeatherFromAPI("serra")))
//console.log("console log from main script country: ", JSON.parse(requestCountryFromAPI()).data[26].cities)



function getCityAfterSelectCountry(index) {
    JSON.parse(requestCountryFromAPI()).data[index].cities.forEach((element) => {
        createOptionsOfCity(element)
    })
}


function onButtonClick() {
    // let weatherResquestAsJSON = JSON.parse(requestCountryWeatherFromAPI())
    //   getInformation(weatherResquestAsJSON)

    console.log(getValueOfTheSelectedCountry)
    console.log(getIDOfCountry)


}


function getInformation(infoAsJson) {

    let informationObj = {
        cityAddres: infoAsJson.resolvedAddress,
        cityTimeZone: infoAsJson.timezone,
        description: infoAsJson.description,
    };

    showInformationOnPage(informationObj)
}


function getValueOfSelect() {
    if (getValueOfTheSelectedCountry == "noValueCountry") {
        console.log(getValueOfTheSelectedCountry)

    } else {
        console.log("batendo aqui 2: ", getValueOfTheSelectedCountry)
        getCityAfterSelectCountry(getIDOfCountry)
    }

}

function checkCountryValue() {
    var dnd = document.querySelector('#idCountry');
    let id = dnd.options[dnd.selectedIndex].id;
    console.log("id", id)

    getCityAfterSelectCountry(id)

}