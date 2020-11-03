/* =================================
EVENT OF ADDING AN ACTION
================================ */

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



/* ==============================
EVENT OF CHECKING ACTIONS
============================== */

var elActionsForm = document.querySelector('.actions-check-list__form');
var elActionsInput = elActionsForm.querySelector('.action-check-input');
var elActionsResult = elActionsForm.querySelector('.action-check__result');

elActionsForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  var actionsInput = elActionsInput.value.trim();
  var isActionsInputAdded = actions.includes(actionsInput);

  if (isActionsInputAdded) {
    elActionsResult.classList.remove('d-none');
    elActionsResult.textContent = `Yes, you added ${actionsInput}`;
  } else {
    elNewActionInput.value = actionsInput;
    elActionsInput.value = '';
    elNewActionInput.focus();
  }

});