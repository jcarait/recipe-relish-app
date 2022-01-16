var formInput = document.querySelector("#add-button");
var searchQuery = document.querySelector("#search-query");
var dietRequirement = document.querySelector("#diet");
var mealType = document.querySelector("#meal-type");
var searchResults = document.querySelector("#recipe-results");

var apiID = "bf7ef27c";
var apiKey = "f26b311cc0cf67ce4f322e55dca05398";

//more vars here

var formSubmitHandler = function (event) {
    event.preventDefault();
    var query = searchQuery.value;
    if (query) {
        searchAPi(query);
    }
};

var searchAPi = function (query) {

    var apiUrl = "https://api.edamam.com/api/recipes/v2?" + "q=" + query + "&app_key=" + apiKey + "&app_id=" + apiID + "&type=public";
    console.log(apiUrl)

    fetch(apiUrl, {
        mode: "cors"
    }).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
                for (var i = 0; i < 5; i++) {
                    var recipeResults = {
                        label: data.hits[i].recipe.label,
                        url: data.hits[i].recipe.url,
                        image: data.hits[i].recipe.images.THUMBNAIL.url
                    }
                    displayResults(recipeResults.label, recipeResults.url, recipeResults.image)
                }
            });
        }
    });
};

var displayResults = function (label, url, image) {

    var cardEl = document.createElement("div");
    var cardElBody = document.createElement("div");
    var subtitleEl = document.createElement("h4");
    var linkEl = document.createElement("a");
    var cardImageEl = document.createElement("img")

    cardEl.setAttribute("class", "card")
    cardElBody.setAttribute("class", "card-body");
    subtitleEl.textContent = label;
    cardImageEl.src = image;
    linkEl.setAttribute("href", url);
    linkEl.textContent = "View Recipe";

    searchResults.appendChild(cardEl);
    cardEl.appendChild(cardElBody);
    cardElBody.appendChild(subtitleEl);
    cardElBody.appendChild(cardImageEl);
    cardElBody.appendChild(linkEl);

};


formInput.addEventListener("click", formSubmitHandler);
// getApiData();
