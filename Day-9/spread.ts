// Combining Arrays
const shopping_cart = ["Maagi", "Beans", "Masala"];
const additional_cart = ["Matchbox", "Salt"];

// Spread Operator
let recipe = [ ... shopping_cart, ... additional_cart];

console.log(recipe);