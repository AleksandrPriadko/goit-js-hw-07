const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listIngredients = document.querySelector("#ingredients");
console.log(listIngredients);

const result = ingredients.forEach((createItemIngreds) => {
  const createItemIngred = document.createElement("li");
  createItemIngred.textContent = createItemIngreds;
  listIngredients.appendChild(createItemIngred);
});