// Business Logic-Start
function Order(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.pizzas = [];
  this.prices = [];
}
Order.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Pizza(size, sauce, topping1, topping2, topping3) {
  this.size = size;
  this.sauce = sauce;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
}
Pizza.prototype.fullPizza = function() {
  return this.size + " pizza with  " + this.topping1 + ", " + this.topping2 + ", and " + this.topping3 + " on " + this.sauce + " sauce.";
}

function Price(sizePrice, topping1Price, topping2Price, topping3Price) {
  this.sizePrice = sizePrice;
  this.topping1Price = topping1Price;
  this.topping2Price = topping2Price;
  this.topping3Price = topping3Price;
}
Price.prototype.fullPrice = function() {
  return this.sizePrice + this.topping1Price + this.topping2Price + this.topping3Price;
}

// Business Logic-End
// Interface Logic-Start
$(document).ready(function() {
  $("#add-pizza").click(function() {
    $("#new-pizzas").append('<h3>Next pizza:</h3>'+
                            '<div class="new-pizza">'+
                              '<div class="form-group">'+
                                '<label for="new-pizza-size">Size</label>'+
                                '<select class="form-control" id="new-pizza-size">'+
                                  '<option></option>'+
                                  '<option>Small</option>'+
                                  '<option>Medium</option>'+
                                  '<option>Large</option>'+
                                  '<option>Extra-Large</option>'+
                                '</select>'+
                              '</div>'+
                              '<div class="form-group">'+
                                '<label for="new-pizza-sauce">Sauce</label>'+
                                '<select class="form-control" id="new-pizza-sauce">'+
                                  '<option></option>'+
                                  '<option>Classic Marinara</option>'+
                                  '<option>Garlic Parmesan</option>'+
                                  '<option>BBQ</option>'+
                                  '<option>Buffalo</option>'+
                                '</select>'+
                              '</div>'+
                              '<div class="form-group">'+
                                '<label for="new-topping1">Topping 1</label>'+
                                '<select class="form-control" id="new-topping1">'+
                                  '<option></option>'+
                                  '<option>Pepperoni</option>'+
                                  '<option>Italian Sausage</option>'+
                                  '<option>Salami</option>'+
                                  '<option>Meatball</option>'+
                                  '<option>Bacon</option>'+
                                  '<option>Smoked Ham</option>'+
                                  '<option>Chicken</option>'+
                                  '<option>Mushrooms</option>'+
                                  '<option>Red Onions</option>'+
                                  '<option>Black Olives</option>'+
                                  '<option>Bell Peppers</option>'+
                                  '<option>Banana Peppers</option>'+
                                  '<option>Pineapple</option>'+
                                  '<option>Jalapeno Peppers</option>'+
                                  '<option>Diced Tomatoes</option>'+
                                '</select>'+
                              '</div>'+
                              '<div class="form-group">'+
                                '<label for="new-topping2">Topping 2</label>'+
                                '<select class="form-control" id="new-topping2">'+
                                  '<option></option>'+
                                  '<option>Pepperoni</option>'+
                                  '<option>Italian Sausage</option>'+
                                  '<option>Salami</option>'+
                                  '<option>Meatball</option>'+
                                  '<option>Bacon</option>'+
                                  '<option>Smoked Ham</option>'+
                                  '<option>Chicken</option>'+
                                  '<option>Mushrooms</option>'+
                                  '<option>Red Onions</option>'+
                                  '<option>Black Olives</option>'+
                                  '<option>Bell Peppers</option>'+
                                  '<option>Banana Peppers</option>'+
                                  '<option>Pineapple</option>'+
                                  '<option>Jalapeno Peppers</option>'+
                                  '<option>Diced Tomatoes</option>'+
                                '</select>'+
                              '</div>'+
                              '<div class="form-group">'+
                                '<label for="new-topping3">Topping 3</label>'+
                                '<select class="form-control" id="new-topping3">'+
                                  '<option></option>'+
                                  '<option>Pepperoni</option>'+
                                  '<option>Italian Sausage</option>'+
                                  '<option>Salami</option>'+
                                  '<option>Meatball</option>'+
                                  '<option>Bacon</option>'+
                                  '<option>Smoked Ham</option>'+
                                  '<option>Chicken</option>'+
                                  '<option>Mushrooms</option>'+
                                  '<option>Red Onions</option>'+
                                  '<option>Black Olives</option>'+
                                  '<option>Bell Peppers</option>'+
                                  '<option>Banana Peppers</option>'+
                                  '<option>Pineapple</option>'+
                                  '<option>Jalapeno Peppers</option>'+
                                  '<option>Diced Tomatoes</option>'+
                                '</select>'+
                              '</div>'+
                            '</div>');
  });
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
      var firstName = $("input#new-first-name").val();
      var lastName = $("input#new-last-name").val();
      var newOrder = new Order(firstName, lastName);
    $(".new-pizza").each(function() {
      var selectSize = $(this).find("#new-pizza-size").val();
      var selectSauce = $(this).find("#new-pizza-sauce").val();
      var selectTopping1 = $(this).find("#new-topping1").val();
      var selectTopping2 = $(this).find("#new-topping2").val();
      var selectTopping3 = $(this).find("#new-topping3").val();
      var newPizza = new Pizza(selectSize, selectSauce, selectTopping1, selectTopping2, selectTopping3);
      newOrder.pizzas.push(newPizza);

      if (selectSize === "Small") {
        var sizePrice = 10;
      } else if (selectSize === "Medium") {
        var sizePrice = 12;
      } else if (selectSize === "Large") {
        var sizePrice = 14;
      } else if (selectSize === "Extra Large") {
        var sizePrice = 16;
      }
      if (selectTopping1 === "Pepperoni" || selectTopping1 === "Italian Sausage" || selectTopping1 === "Salami" || selectTopping1 === "Meatball" || selectTopping1 === "Bacon" || selectTopping1 === "Smoked Ham" || selectTopping1 === "Chicken") {
        var topping1Price = 2;
      } else if (selectTopping1 === "Mushrooms" || selectTopping1 === "Red Onions" || selectTopping1 === "Black Olives" || selectTopping1 === "Bell Peppers" || selectTopping1 === "Banana Peppers" || selectTopping1 === "Pineapple" || selectTopping1 === "Jalapeno Peppers" || selectTopping1 === "Diced Tomatoes") {
        var topping1Price = 1
      }

      if (selectTopping2 === "Pepperoni" || selectTopping2 === "Italian Sausage" || selectTopping2 === "Salami" || selectTopping2 === "Meatball" || selectTopping2 === "Bacon" || selectTopping2 === "Smoked Ham" || selectTopping2 === "Chicken") {
        var topping2Price = 2;
      } else if (selectTopping2 === "Mushrooms" || selectTopping2 === "Red Onions" || selectTopping2 === "Black Olives" || selectTopping2 === "Bell Peppers" || selectTopping2 === "Banana Peppers" || selectTopping2 === "Pineapple" || selectTopping2 === "Jalapeno Peppers" || selectTopping2 === "Diced Tomatoes") {
        var topping2Price = 1
      }

      if (selectTopping3 === "Pepperoni" || selectTopping3 === "Italian Sausage" || selectTopping3 === "Salami" || selectTopping3 === "Meatball" || selectTopping3 === "Bacon" || selectTopping3 === "Smoked Ham" || selectTopping3 === "Chicken") {
        var topping3Price = 2;
      } else if (selectTopping3 === "Mushrooms" || selectTopping3 === "Red Onions" || selectTopping3 === "Black Olives" || selectTopping3 === "Bell Peppers" || selectTopping3 === "Banana Peppers" || selectTopping3 === "Pineapple" || selectTopping3 === "Jalapeno Peppers" || selectTopping3 === "Diced Tomatoes") {
        var topping3Price = 1
      }

      var newPrice = new Price(sizePrice, topping1Price, topping2Price, topping3Price);
      newOrder.prices.push(newPrice);

      $("#show-order").show();
      $("#show-order h2").text(newOrder.fullName());
      $(".first-name").text(newOrder.firstName);
      $(".last-name").text(newOrder.lastName);
      console.log(newPrice);
      newOrder.pizzas.forEach(function(pizzas) {
        $("ul#orders").append("<li><span class='contact'>" + newPizza.fullPizza() + "</span></li>");
      });
      newOrder.prices.forEach(function(prices){
        $("ul#price").append("<li><span class='contact'>" + "$" + newPrice.fullPrice() + "</span></li>")
      });
    });

  });









});
// Interface Logic-End
