const itemsById = document.querySelectorAll("li.item");
console.log(`В списке ${itemsById.length} категории.`);

const fiendTextHeading = itemsById.forEach(headingElem => {
  const heading = headingElem.querySelector("h2");
  const items = headingElem.querySelectorAll("ul li");
  console.log(`Категория: ${heading.textContent}`);
  console.log(`Количество элементов: ${items.length}`);
});