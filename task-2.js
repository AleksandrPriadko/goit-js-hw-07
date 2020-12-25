const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listIngredients = document.querySelector("#ingredients");

const createItemRef = ingredient => {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;
  return itemRef;
}
const createListIngred = ingredients.map(ingredient => createItemRef(ingredient));
listIngredients.append(...createListIngred);