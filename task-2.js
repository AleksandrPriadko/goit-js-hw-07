const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
console.log(ingredients);

const listIngredients = document.createElement('ul');
listIngredients.setAttribute('id', "ingredients");
console.log(listIngredients)

/* const itemsProd = ingredients.forEach(ingredient => {
    console.log([ingredient]);
    const listIngredient = ingredient.createElement('li');
    listIngredient.textContent = ingredients;
    return listIngredient;
    //itemProd.createElement('li');
    //console.log(createItemIngred);
    //createItemIngred.textContent(ingredients);
}); */
const createItemIngred = document.createElement('li');
//createItemIngred.textContent = [ingredients];
ingredients.forEach(createItemIngreds => {
        createItemIngred.textContent = createItemIngreds;
        console.log(createItemIngred)
    }

);



//console.log(createItemIngred);