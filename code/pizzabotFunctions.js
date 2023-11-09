const vegetarian = "vegetarian";
const hawaiian = "hawaiian";
const pepperoni = "pepperoni";

const pizzaPrice = 80;

//Put your Javscript code here:

let isOnMenu;
let orderQuantity = 0;
let orderTotal = 0;

//Välkommnande meddelande
alert(
  `Hey! Happy to serve your pizza. On our menu we have, ${vegetarian}, ${hawaiian} and ${pepperoni}.`
);
// Be kunden skriva in en pizza till sin order
// let orderName = prompt("Enter the name of the pizza you want to order today.");

// FUNCTIONS
// KONTROLLERA NAMN PÅ PIZZAN
function checkOrderName(orderName) {
  if (
    orderName == hawaiian ||
    orderName == pepperoni ||
    orderName == vegetarian
  ) {
    orderQuantity = prompt(`How many ${orderName} pizzas do you want?`);
    return true;
  } else {
    orderQuantity = 0;
    return false;
  }
}
checkOrderName(
  (orderName = prompt("Enter the name of the pizza you want to order today."))
);
console.log(orderName);
console.log(`Amount of pizzas: ${orderQuantity}`);

// FÅ FRAM TOTALA PRISET MED ANTALET PIZZOR * PRIS PER STYCK, LAGRA I orderTotal
function totalCost(orderQuantity) {
  orderTotal = orderQuantity * pizzaPrice;
}
totalCost(orderQuantity);
console.log(`The pizzas will cost: ${orderTotal}`);

// SE HUR LÅNG TILLAGNINGSTIDEN ÄR MED HJÄLP OLIKA RETURNS FÖR OLIKA PARAMETRAR
function cookingTime(orderQuantity) {
  if (orderQuantity == 1 || orderQuantity == 2) {
    return 10;
  } else if (orderQuantity >= 6) {
    return 20;
  } else if (orderQuantity == 0) {
    return 0;
  } else {
    return 15;
  }
}
cookingTime(orderQuantity);
console.log(
  `The pizzas will be ready in: ${cookingTime(orderQuantity)} minutes.`
);

// Om kundens order överensstämmer med menyn (matchar orderName med pizza-sorter)
if (
  orderName == hawaiian ||
  orderName == vegetarian ||
  orderName == pepperoni
) {
  // If det överensstämmer, gör följande -->
  // Uppdaterar variabeln (isOnMenu) till true eftersom pizzan finns i menyn
  isOnMenu = true;
  console.log(`Is the pizza on our menu: ${isOnMenu}`);
  // Fråga hur många pizzor kunden vill beställa och placera i en variabel (orderQuantity)
  // Räkna ut totala priset på beställningen. Placera resultat i en variabel (orderTotal)
  // Skicka en alert med orderbekräftelse
  alert(
    `Great, I'll get started on your order of ${orderQuantity} ${orderName} pizzas right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime(
      orderQuantity
    )} minutes.`
  );

  // Om orderName inte överensstämmer med några av våra variabler i if-satsen
} else {
  // Uppdaterar variabeln (isOnMenu) till false eftersom pizzan ej finns i menyn
  isOnMenu = false;
  // Ändra orderName, orderTotal och cookingTime till tomt/noll.
  orderName = "No pizzas have been ordered!";
  orderTotal = 0 + " kr";
  orderQuantity = 0;
  // Skicka en alert med felmeddelandet.
  alert(orderName);
}
// Loggar antalet pizzor, vilken sorts pizza och vad det totala priset blir. Samt ifall pizzan finns på menyn eller inte och vad matlagningstiden blir.
console.log("YOUR ORDER SUMMARY: ");
console.log(`Your pizzas are: ${orderQuantity} ${orderName}`);
console.log(`Your order total is: ${orderTotal} kr.`);
console.log(`The pizzas will be ready in: ${cookingTime(orderQuantity)}`);
