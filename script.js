var formInput = document.querySelector("#form-input");
var searchQuery = document.querySelector("#search-query");
var dietRequirement = document.querySelector("#diet");
var mealType = document.querySelector("#meal-type");

var apiID = "bf7ef27c";
var apiKey = "f26b311cc0cf67ce4f322e55dca05398";

var formSubmitHandler = function (event) {
    event.preventDefault();
    var query = searchQuery.value;
    if (query) {
        searchAPi(query);
    }
};

var searchAPi = function (query) {

    var apiUrl = "https://api.edamam.com/api/recipes/v2?" + "q=" + query + "&app_key=" + apiKey + "&app_id=" + apiID + "&type=public";

    console.log(apiUrl);
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);

            });
        }
    });
};


formInput.addEventListener("submit", formSubmitHandler);
// getApiData();
