var apiID = "bf7ef27c"
var apiKey = "f26b311cc0cf67ce4f322e55dca05398"
var userSearchQuery = 
var apiUrl = "https://api.edamam.com/api/recipes/v2?"+ "app_key=" + apiKey + "&app_id=" + apiID; 
 console.log(apiUrl)


function getApiData() {
fetch(apiUrl)
    .then (function (response){
        if (response.ok) {
            response.json().then(function (data){
                console.log(data);
            })
        }
    
    });

}

// getApiData();