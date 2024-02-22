console.log(`Number of categories: ${document.querySelectorAll('.item').length}`);

document.querySelectorAll('.item').forEach(categoryItem => {
  const categoryTitle = categoryItem.firstElementChild.textContent;
  const numberOfElements = categoryItem.lastElementChild.children.length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${numberOfElements}`);
});