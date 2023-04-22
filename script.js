const APIkey = "5N7HG5DFFJBUC28G8DAGHRFUS"
document.getElementById("button").addEventListener("click", onButtonClick);

function onButtonClick() {
    let valueSelect = document.getElementById("idCity").value;

    console.log(valueSelect);

    request(valueSelect)
}

function request(valueFromSelect) {

    let APIurl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"${valueFromSelect}?key=${APIkey}`;

    const requisition = fetch(APIurl)
        .then(function (res) {
            return res.json();
        })
        .then(function (resAsJson) {
            getInformation(resAsJson)
        });
}

function getInformation(infoAsJson) {

    return informationObj = {
        cityAddres: infoAsJson.resolvedAddress,
        cityTimeZone: infoAsJson.timezone,
        description: infoAsJson.description,
    };

}

console.log(getInformation());


function showInformation() {
    let cityName = document.getElementById("CityName")
    let timeZone = document.getElementById("TimeZone")
    let description = document.getElementById("description")


}
