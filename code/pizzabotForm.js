const pizzaPrice = 80;
let orderTime;

document.getElementById("submitBtn").addEventListener("click", function () {
  const firstName = document.getElementById("firstNameInput").value;
  const lastName = document.getElementById("lastNameInput").value;
  const phone = document.getElementById("phoneInput").value;
  const address = document.getElementById("adressInput").value;
  const pizza = document.getElementById("pizza").value;
  const quantityOfPizzas = document.getElementById(
    "quantityOfPizzasInput"
  ).value;

  if (
    !firstName ||
    !lastName ||
    !phone ||
    !address ||
    !pizza ||
    !quantityOfPizzas
  ) {
    alert("Please fill out all fields before ordering the pizza.");
    return;
  }
  const orderTotal = quantityOfPizzas * pizzaPrice;
  const orderDetails = document.querySelector(".orderDetails");

  function cookingTime(quantityOfPizzas) {
    if (quantityOfPizzas <= 2 && quantityOfPizzas > 0) {
      orderTime = "10 minutes";
    } else if (quantityOfPizzas >= 3 && quantityOfPizzas <= 5) {
      orderTime = "15 minutes";
    } else if (quantityOfPizzas >= 6) {
      orderTime = "20 minutes";
    } else {
      orderTime = "No pizzas have been ordered";
    }
  }

  cookingTime(quantityOfPizzas);

  function pizzaImage(pizza) {
    // Få referenser till bilderna
    const vegetarianImage = document.getElementById("vegetarianImage");
    const hawaiianImage = document.getElementById("hawaiianImage");
    const pepperoniImage = document.getElementById("pepperoniImage");

    // Dölj alla bilder genom att ta bort classen "show"
    vegetarianImage.classList.remove("show");
    hawaiianImage.classList.remove("show");
    pepperoniImage.classList.remove("show");

    // Visa den valda bilden genom att lägga till klassen "show"
    if (pizza === "vegetarian") {
      vegetarianImage.classList.add("show");
    } else if (pizza === "hawaiian") {
      hawaiianImage.classList.add("show");
    } else if (pizza === "pepperoni") {
      pepperoniImage.classList.add("show");
    }
  }

  // Uppdatera pizzabilden beroende på den valda pizzan
  pizzaImage(pizza);

  orderDetails.innerHTML = `<h1>Details of your order:</h1>
        <h4>First name: <span class="order-info">${firstName}</span></h4>
        <h4>Last name: <span class="order-info">${lastName}</span></h4>
        <h4>Phone: <span class="order-info">${phone}</span></h4>
        <h4>Address: <span class="order-info">${address}</span></h4>
        <h4>Pizza: <span class="order-info">${pizza}</span></h4>
        <h4>Quantity of Pizzas: <span class="order-info">${quantityOfPizzas}</span></h4><hr>
        <h4>Total amount (SEK): <span class="order-info">${orderTotal} kr</span></h4>
        <h4>Estimated cooking time: <span class="order-info">${orderTime}.</span></h4>`;
});
