// EVENT OF ADDING AN ACTION

var elActionsListForm = document.querySelector('.actions-list__form');
var elNewActionInput = elActionsListForm.querySelector('.actions-input');
var elActionsList = elActionsListForm.querySelector('.actions__list');


var actions = [];

elActionsListForm.addEventListener('submit', function (evt) {
  evt.preventDefault();


  // Preventing empty list-item
  if (!elNewActionInput.value.trim()) {
    alert(`Matn kiriting do'st!`);
    elNewActionInput.value = '';
    return;
  };

  // Adding to actionInput to actions array
  actions.push(elNewActionInput.value.trim());
  elNewActionInput.value = '';
  elNewActionInput.focus();
  console.log(actions);

  // Clearing ActionsList HTML
  elActionsList.innerHTML = '';

  // Creating list-items to actions
  for (var action of actions) {
    var elActionsItem = document.createElement('li');
    elActionsItem.classList.add('list-group-item', 'list-group-item-action');
    elActionsItem.textContent = action;
    elActionsList.appendChild(elActionsItem);
  };

})


// EVENT OF CHECKING ACTIONS