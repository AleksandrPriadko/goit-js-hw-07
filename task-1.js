const itemsById = [...document.querySelectorAll("li.item")];
console.log(`В списке ${itemsById.length} категории.`);

const fiendTextHeading = itemsById.map((headingElem) => {
  const heading = headingElem.querySelector("h2");
  const items = headingElem.querySelectorAll("ul li");

  return {
    title: heading.textContent,
    count: items.length,
  };
});
fiendTextHeading.forEach((listEnimal) => {
  console.log(`Категория: ${listEnimal.title}`);
  console.log(`Количество элементов: ${listEnimal.count}`);
});
