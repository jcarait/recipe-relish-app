var apiID = "bf7ef27c"
var apiKey = "f26b311cc0cf67ce4f322e55dca05398"

var apiUrl = "https://api.edamam.com/api/recipes/v2?diet=balanced&calories=100-300&app_id=bf7ef27c&app_key=f26b311cc0cf67ce4f322e55dca05398&type=public"


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

getApiData();