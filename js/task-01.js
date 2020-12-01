const allCategories = document.querySelectorAll(".item");
console.log(`У списку ${allCategories.length} категорії.`);

const listCategories = [...allCategories].map(function(elem) {return `Категорія: ${elem.firstElementChild.textContent}
Кількість елементів: ${elem.children[1].children.length}`}).join('\n');
console.log(listCategories);