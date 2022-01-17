var formInput = document.querySelector("#add-button");
var searchQuery = document.querySelector("#search-query");
var dietRequirement = document.querySelector("#diet");
var mealType = document.querySelector("#meal-type");
var searchResults = document.querySelector("#recipe-results");
var veganCheckboxEl = document.querySelector("#vegan");
var glutenFreeCheckboxEl = document.querySelector("#gluten-free");
var vegeterianCheckboxEl = document.querySelector("#vegetarian")
var dairyFreeCheckboxEl = document.querySelector("#dairy-free")


var apiID = "bf7ef27c";
var apiKey = "f26b311cc0cf67ce4f322e55dca05398";

var veganOption
var glutenOption
var vegetarianOption
var dairyOption

var formSubmitHandler = function (event) {
    event.preventDefault();
    
    var query = searchQuery.value;

    if (query) {
        searchAPi(query, veganOption, glutenOption, vegetarianOption, dairyOption);
    } 
};

var searchAPi = function (query, vegan, glutenFree, vegetarian, dairy) {


    //logical function to determine which API paramters to query based on user selection
    if (!vegan && !glutenFree && !vegetarian && !dairy) {
        var apiUrl = "https://api.edamam.com/api/recipes/v2?" + "q=" + query + "&app_key=" + apiKey + "&app_id=" + apiID + "&type=public";
    } else if (!vegan && !vegetarian && !dairy) {
        var apiUrl = "https://api.edamam.com/api/recipes/v2?" + "q=" + query + "&health=" + glutenFree + "&app_key=" + apiKey + "&app_id=" + apiID + "&type=public";
    } else if (!vegan && !glutenFree && !dairy) {
        var apiUrl = "https://api.edamam.com/api/recipes/v2?" + "q=" + query + "&health=" + vegetarian + "&app_key=" + apiKey + "&app_id=" + apiID + "&type=public";
    } else if (!glutenFree && !vegetarian && !vegan) {
        var apiUrl = "https://api.edamam.com/api/recipes/v2?" + "q=" + query + "&health=" + dairy + "&app_key=" + apiKey + "&app_id=" + apiID + "&type=public";
    } else if (!glutenFree && !vegetarian && !dairy) {
        var apiUrl = "https://api.edamam.com/api/recipes/v2?" + "q=" + query + "&health=" + vegan + "&app_key=" + apiKey + "&app_id=" + apiID + "&type=public";
    } else if (!glutenFree && !dairy) {
        var apiUrl = "https://api.edamam.com/api/recipes/v2?" + "q=" + query + "&health=" + vegan + "&health=" + vegetarian + "&app_key=" + apiKey + "&app_id=" + apiID + "&type=public";
    } else if (!vegan && !dairy) {
        var apiUrl = "https://api.edamam.com/api/recipes/v2?" + "q=" + query + "&health=" + glutenFree + "&health=" + vegetarian + "&app_key=" + apiKey + "&app_id=" + apiID + "&type=public";
    } else if (!vegetarian && !dairy) {
        var apiUrl = "https://api.edamam.com/api/recipes/v2?" + "q=" + query + "&health=" + glutenFree + "&health=" + vegan + "&app_key=" + apiKey + "&app_id=" + apiID + "&type=public";
    } else if (!glutenFree && !vegan) {
        var apiUrl = "https://api.edamam.com/api/recipes/v2?" + "q=" + query + "&health=" + dairy + "&health=" + vegetarian + "&app_key=" + apiKey + "&app_id=" + apiID + "&type=public";
    } else if (!vegetarian && !vegan) {
        var apiUrl = "https://api.edamam.com/api/recipes/v2?" + "q=" + query + "&health=" + glutenFree + "&health=" + dairy + "&app_key=" + apiKey + "&app_id=" + apiID + "&type=public";
    } else if (!glutenFree && !vegetarian) {
        var apiUrl = "https://api.edamam.com/api/recipes/v2?" + "q=" + query + "&health=" + vegan + "&health=" + dairy + "&app_key=" + apiKey + "&app_id=" + apiID + "&type=public";
    } else if (!vegetarian) {
        var apiUrl = "https://api.edamam.com/api/recipes/v2?" + "q=" + query + "&health=" + glutenFree + "&health=" + vegan + "&health=" + dairy + "&app_key=" + apiKey + "&app_id=" + apiID + "&type=public";
    } else if (!vegan) {
        var apiUrl = "https://api.edamam.com/api/recipes/v2?" + "q=" + query + "&health=" + glutenFree + "&health=" + vegetarian + "&health=" + dairy + "&app_key=" + apiKey + "&app_id=" + apiID + "&type=public";
    } else if (!glutenFree) {
        var apiUrl = "https://api.edamam.com/api/recipes/v2?" + "q=" + query + "&health=" + vegetarian + "&health=" + vegan + "&health=" + dairy + "&app_key=" + apiKey + "&app_id=" + apiID + "&type=public";
    } else if (!dairy) {
        var apiUrl = "https://api.edamam.com/api/recipes/v2?" + "q=" + query + "&health=" + vegetarian + "&health=" + vegan + "&health=" + glutenFree + "&app_key=" + apiKey + "&app_id=" + apiID + "&type=public";
    } else {
        var apiUrl = "https://api.edamam.com/api/recipes/v2?" + "q=" + query + "&health=" + vegan + "&health=" + glutenFree + "&health=" + vegetarian + "&health=" + dairy + "&app_key=" + apiKey + "&app_id=" + apiID + "&type=public";
    }
   
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

veganCheckboxEl.addEventListener("change", function(){

    if (this.checked) {
        veganOption = "vegan"
    } else {
         veganOption
    }
})

glutenFreeCheckboxEl.addEventListener("change", function(){

    if (this.checked) {
        glutenOption = "gluten-free"
    } else {
         glutenOption
    }
})

vegeterianCheckboxEl.addEventListener("change", function(){

    if (this.checked) {
        vegetarianOption = "vegetarian"
    } else {
         vegetarianOption
    }
})

dairyFreeCheckboxEl.addEventListener("change", function(){

    if (this.checked) {
        dairyOption = "dairy-free"
    } else {
         dairyOption
    }
})
// getApiData();
