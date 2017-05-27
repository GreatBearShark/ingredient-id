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


        // var ingredients = data.hits[i].fields.nf_ingredient_statement;

        var ingredients = "Cheese, Sauce, Bread"

        function buildIngredients() {

          if (ingredients != null) {
            ingredients = ingredients.split(', ');
            console.log(ingredients);

            // for (i = 0; i < 3; i++) {
            //   console.log(ingredients);
            //   return `<div class="chip">${ingredients[i]}</div>`
            // }
          }
        }

        var ingredientList = buildIngredients();

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

        buildIngredients();

        foodCard.innerHTML = "";
      }



  });
}
