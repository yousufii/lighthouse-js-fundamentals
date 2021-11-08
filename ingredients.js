const ingredients = ["eggs", "milk", "flour", "sugar", "backing soda", "baking powder", "chocolate chips", "bananas"];
// Write a while loop that prints out the contents of ingredients:
let list = 0;
while (list < ingredients.length) {
  console.log(ingredients[list]);
  list++;
}
console.log()
// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
console.log()

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for ( let i = ingredients.length -1; i >= 0; i--) {
  console.log(ingredients[i]);
}
