//console.log(resAsJson.data[0].cities[0])
function requestCountryFromAPI() {
    let url = "https://countriesnow.space/api/v0.1/countries"

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);

    xhttp.send(); //A execução do script para aqui até a requisição retornar do servidor

    return xhttp.responseText
}


export {
    requestCountryFromAPI,
};