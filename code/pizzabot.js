const vegetarian = "vegetarian";
const hawaiian = "hawaiian";
const pepperoni = "pepperoni";

const pizzaPrice = 80;

//Put your Javscript code here:

let isOnMenu;
let orderQuantity = 0;
let cookingTime = 0;

//Välkommnande meddelande
alert(
  `Hey! Happy to serve your pizza. On our menu we have, ${vegetarian}, ${hawaiian} and ${pepperoni}.`
);
// Be kunden skriva in en pizza till sin order
let orderName = prompt("Enter the name of the pizza you want to order today.");
// Om kundens order överensstämmer med menyn (matchar orderName med pizza-sorter)
if (
  orderName == hawaiian ||
  orderName == vegetarian ||
  orderName == pepperoni
) {
  // If det överensstämmer, gör följande -->
  // Uppdaterar variabeln (isOnMenu) till true eftersom pizzan finns i menyn
  isOnMenu = true;

  // Fråga hur många pizzor kunden vill beställa och placera i en variabel (orderQuantity)
  orderQuantity = prompt(`How many ${orderName} pizzas do you want?`);
  // Räkna ut totala priset på beställningen. Placera resultat i en variabel (orderTotal)
  orderTotal = orderQuantity * pizzaPrice;
  // Uppdaterar variabeln (cookingTime) utifrån antalet pizzor i (orderQuantity).
  if (orderQuantity <= 3) {
    cookingTime = 10;
  } else if (orderQuantity >= 6) {
    cookingTime = 20;
  } else {
    cookingTime = 15;
  }
  // Skicka en alert med orderbekräftelse
  alert(
    `Great, I'll get started on your order of ${orderQuantity} ${orderName} pizzas right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime} minutes.`
  );
  // Om orderName inte överensstämmer med några av våra variabler i if-satsen
} else {
  // Uppdaterar variabeln (isOnMenu) till false eftersom pizzan ej finns i menyn
  isOnMenu = false;
  // Ändra orderName, orderTotal och cookingTime till tomt/noll.
  orderName = "No pizzas have been ordered!";
  orderTotal = 0 + " kr";
  cookingTime = 0;
  // Skicka en alert med felmeddelandet.
  alert(orderName);
}
// Loggar antalet pizzor, vilken sorts pizza och vad det totala priset blir. Samt ifall pizzan finns på menyn eller inte och vad matlagningstiden blir.
console.log(`Your pizzas are: ${orderQuantity} ${orderName}`);
console.log(`Your order total is: ${orderTotal}`);
console.log(`Is the pizza on our menu: ${isOnMenu}`);
console.log(`The pizzas will take: ${cookingTime}`);
