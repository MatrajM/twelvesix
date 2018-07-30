var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
}
function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function(item) {
        var liEl = document.createElement('li');
        liEl.innerText = item.name;
        countriesList.appendChild(liEl);
        var stats = document.createElement('ul');
        liEl.appendChild(stats);
        var statsCap = document.createElement('li');
        var statsPop = document.createElement('li');
        var statsCur = document.createElement('li');
        stats.appendChild(statsCap);
        stats.appendChild(statsPop);
        stats.appendChild(statsCur);
        statsCap.innerText = 'Capital city is: ' + item.capital;   
        statsPop.innerText = 'Population is: ' + item.population;
        statsCur.innerText = 'Currency is: ' + item.currencies;
     });
}