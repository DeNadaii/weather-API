function requestCountryWeatherFromAPI(valueFromSelect) {
    const APIkey = "5N7HG5DFFJBUC28G8DAGHRFUS"

    let APIurl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${valueFromSelect}?key=${APIkey}`;
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", APIurl, false);


    xhttp.send(); //A execução do script pára aqui até a requisição retornar do servidor

    return xhttp.responseText
}

export {
    requestCountryWeatherFromAPI
};