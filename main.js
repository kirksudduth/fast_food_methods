console.log("GET IT HOMIE!!!");

const reubenComboMeal = {
  sandwichType: "reuben",
  fries: true,
  drinkSize: "small",
};

const pbjComboMeal = {
  sandwichType: "peanut butter and jelly",
  fries: true,
  drinkSize: "large",
};

const chickenComboMeal = {
  sandwichType: "fried chicken",
  fries: false,
  drinkSize: "medium",
};

const meals = [reubenComboMeal, pbjComboMeal, chickenComboMeal];

const restaurant = {
  name: "Bob's Burgers",
  placeOrder: function (meal) {
    orderUp = meal;
    if (orderUp.fries === true) {
      return `We're gonna make the best ${orderUp.sandwichType} sandwich meal you've ever had in your life.`;
    } else if (orderUp.fries === false) {
      return `Not too hungry today, eh? I'll get your ${orderUp.sandwichType} sandwich working for ya.`;
    } else if (orderUp.sandwichType === "none") {
      return `Just fries?? Okay.`;
    }
  },
  orders: [],
  orderTally: function () {
    for (let i = 0; i < meals.length; i++) {
      const ordersTaken = meals[i];
      if (ordersTaken.fries === true) {
        this.orders.push(ordersTaken);
        console.table(ordersTaken);
      } else {
        console.table(ordersTaken);
        return `I'll get your ${ordersTaken.sandwichType} and ${ordersTaken.drinkSize} drink for you.`;
      }
    }
  },
};

// Place an order
restaurant.placeOrder(meals);
restaurant.orderTally(meals);

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()
