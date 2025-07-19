
function searchDestinations(query) {

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results
    const data=fetch("https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/travel1.json");
    data.then(response => response.json())
    .then(data => {
       if(query.includes("beaches")) {
            const beaches = data.beaches.map(beach => {
                return `<div class="result-item">
                            <h3>${beach.name}</h3>
                            <p>${beach.description}</p>
                            <button>visit</button>
                        </div>`;
            }).join('');
            resultsContainer.innerHTML = beaches;
        }
        else if(query.includes("temples")) {
            const temples = data.temples.map(temple => {
                return `<div class="result-item">
                            <h3>${temple.name}</h3>
                            <p>${temple.description}</p>
                            <button>visit</button>
                        </div>`;
            }).join('');
            resultsContainer.innerHTML = temples;
        }
        else if(query.includes("countries")) {
            const countries = data.countries.map(country => {
                return `<div class="result-item">
                            <h3>${country.name}</h3>
                            <p>${country.description}</p>
                            <button>visit</button>
                        </div>`;
            }).join('');
            resultsContainer.innerHTML = countries;
        }
    })
}

document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    searchDestinations(query)
});

document.getElementById('searchBtn').addEventListener('click', function() {
    const query = document.getElementById('search').value.toLowerCase();
    searchDestinations(query);
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('search').value = '';
    document.getElementById('results').innerHTML = ''; // Clear results
});