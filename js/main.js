//Business Logic
function PizzaOrders (){
  this.pizzaTotal = [];
  this.costTotal = 0;
}

function Pizza (toppings,size,chosen) {
  this.pizzaToppings = toppings;
  this.pizzaSize = size;
  this.chosenToppings = chosen;
}

Pizza.prototype.costOfToppings = function (chosen, toppings) {
  for (i=0; i<this.chosenToppings.length;i+=1){
    if (this.chosenToppings[i].checked){
      this.pizzaToppings += 1;
    }
  }
}

Pizza.prototype.costOfPizza = function (toppings,size){
  var pizzaPrice = this.pizzaToppings + this.pizzaSize;
  return pizzaPrice;
}

function resetFields(){
  $("select.new-pizza-size").val();
  $('input:checkbox').removeAttr('checked');
}
