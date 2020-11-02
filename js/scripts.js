var elShoppingListForm = document.querySelector('.shopping-list__form');
var elNewProductInput = elShoppingListForm.querySelector('.product-input');
var elProductsList = elShoppingListForm.querySelector('.products__list');
var elProductsResetBtn = elShoppingListForm.querySelector('.reset-btn');

var products = [];

elShoppingListForm.addEventListener('submit', function (evt) {
  evt.preventDefault();


  // Preventing empty list-item
  if (!elNewProductInput.value.trim()) {
    alert(`Matn kiriting do'st!`);
    elNewProductInput.value = '';
    return;
  };

  // Adding to productInput to products array
  products.push(elNewProductInput.value.trim());
  elNewProductInput.value = '';
  elNewProductInput.focus();
  console.log(products);

  // Clearing ProductsList HTML
  elProductsList.innerHTML = '';

  // Creating list-items to products
  for (var product of products) {
    var elProductsItem = document.createElement('li');
    elProductsItem.classList.add('list-group-item', 'list-group-item-action');
    elProductsItem.textContent = product;
    elProductsList.appendChild(elProductsItem);
  };

})