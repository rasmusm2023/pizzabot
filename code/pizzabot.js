const vegetarian = "vegetarian";
const hawaiian = "hawaiian";
const pepperoni = "pepperoni";

const pizzaPrice = 80;

//Put your Javscript code here:

//Put your Javscript code here:

// Variabler
let isOnMenu;
let orderQuantity = 0;
let cookingTime = 0;
let orderCorrect = false;
let orderName;
let orderTotal;

//Välkommnande meddelande
alert(
  `Hey! Happy to serve your pizza. On our menu we have, ${vegetarian}, ${hawaiian} and ${pepperoni}.`
);
// Be kunden skriva in en pizza till sin order
while (!orderCorrect) {
  const orderName = prompt(
    "Enter the name of the pizza you want to order today."
  );

  orderCorrect =
    orderName == vegetarian || orderName == hawaiian || orderName == pepperoni;
  if (!orderCorrect) {
    alert("That pizza is not on the menu, try again.");
  } else if (orderCorrect == true) {
    // Fråga hur många pizzor kunden vill beställa och placera i en variabel (orderQuantity)
    orderQuantity = prompt(`How many ${orderName} pizzas do you want?`);

    if (orderQuantity > 0) {
      // Skicka en alert med orderbekräftelse
      orderTotal = orderQuantity * pizzaPrice;

      if (orderQuantity <= 3) {
        cookingTime = 10;
      } else if (orderQuantity >= 6) {
        cookingTime = 20;
      } else {
        cookingTime = 15;
      }

      alert(
        `Great, I'll get started on your order of ${orderQuantity} ${orderName} pizzas right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime} minutes.`
      );

      // Loggar antalet pizzor, vilken sorts pizza och vad det totala priset blir. Samt ifall pizzan finns på menyn eller inte och vad matlagningstiden blir.
      console.log(`Your pizzas are: ${orderQuantity} ${orderName}`);
      console.log(`Your order total is: ${orderTotal} kr.`);
      console.log(`The pizzas will take: ${cookingTime} minutes.`);
    } else
      while (orderQuantity <= 0) {
        alert("Please enter a valid number of pizzas.");
        orderQuantity = prompt(`How many ${orderName} pizzas do you want?`);
      }
  }
}
