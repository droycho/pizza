// Business Logic-Start
function Order(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.pizzas = [];
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
                                  '<option>Banna Peppers</option>'+
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
                                  '<option>Banna Peppers</option>'+
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
                                  '<option>Banna Peppers</option>'+
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
    });
    $("ul#order").append("<li><span class='contact'>" + newOrder.fullName() + "</span></li>");

  });









});
// Interface Logic-End
