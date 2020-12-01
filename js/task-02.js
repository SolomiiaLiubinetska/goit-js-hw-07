const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];
const elementUl = document.getElementById('ingredients');

function createIngredients(array) {
const categoryIngredients = array.map(ingredient => {
    const list = document.createElement('li');
    list.textContent = ingredient;
    return list;
});
elementUl.append(...categoryIngredients);
}

createIngredients(ingredients);