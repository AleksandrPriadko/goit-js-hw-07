const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listIngredients = document.querySelector("#ingredients");

const result = ingredients.map((createItemIngred) => {
  const createItem = document.createElement("li");
  createItem.textContent = [createItemIngred];
  listIngredients.appendChild(createItem)
});