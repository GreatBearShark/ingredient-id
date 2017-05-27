// Ajax Request

function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}

var foodList = document.getElementById('food-list');
var submit = document.getElementById('submit');

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

submit.onclick = function (e) {
  e.preventDefault();

  foodList.innerHTML = ""

  var foodInput = document.getElementById("icon_prefix").value;
  foodInput = encodeURI(foodInput);


  // Make Ajax Request from API
  fetchJSONFile('https://api.nutritionix.com/v1_1/search/' + foodInput + '?fields=item_name%2Cnf_ingredient_statement&appId=581271e2&appKey=ac38680b7c64e2959b2bb43d0fa5ca1c', function(data){



      function buildCard() {
        foodList.innerHTML += foodCard
      }

      for (i = 0; i < 10; i++ ) {
        var foodName = data.hits[i].fields.item_name;

        var ingredients = data.hits[i].fields.nf_ingredient_statement;

        function buildIngredients() {
          if (ingredients != null) {
            ingredients = ingredients.split(', ');
            console.log(ingredients);

            var ingredientHTML;

            ingredientHTML = "";

            for (i = 0; i < ingredients.length; i++) {
              ingredientItem = toTitleCase(ingredients[i]);
              ingredientHTML += `<div class="chip">${ingredientItem}</div>`;
            }
            return ingredientHTML;
          } else {
            return `<div class="chip danger">Ingredients Unavailable</div>`
          }
        }

        var ingredientList = buildIngredients();

        console.log(ingredientList);

        var foodCard = `
        <div class="col s12 m3">
          <div class="card">
            <div class="card-content">
              <span class="card-title">${foodName}</span>
            </div>
              ${ingredientList}
            </div>
          </div>
        </div>`

        buildCard();

        foodCard.innerHTML = "";
      }



  });
}
