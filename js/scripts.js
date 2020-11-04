/* =================================
EVENT OF ADDING AN ACTION
================================ */



var elActionsListForm = document.querySelector('.actions-list__form');
var elNewActionInput = elActionsListForm.querySelector('.actions-input');
var elActionsList = elActionsListForm.querySelector('.actions__list');
var elActionUrgentInput = elActionsListForm.querySelector('.urgent-checkbox');


var actions = [];

/* // My first way =======================\

elActionsListForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var newActionInput = elNewActionInput.value.trim();

  // Preventing empty list-item
  if (!newActionInput) {
    alert(`Please, enter text!`);
    elNewActionInput.value = '';
    return;
  };

  // Checking checkbox and adding to array
  if (elActionUrgentInput.checked) {
    actions.unshift(newActionInput);
  } else {
    actions.push(newActionInput);
  }

  elNewActionInput.value = '';
  elNewActionInput.focus();


  // Clearing ActionsList HTML
  elActionsList.innerHTML = '';

  // Itearating existing all array elements to ol in one time
  for (var action of actions) {
    var elActionsItem = document.createElement('li');
    elActionsItem.classList.add('list-group-item', 'list-group-item-action');
    elActionsItem.textContent = action;
    elActionsList.append(elActionsItem);
  };

  console.log(actions);

}); */


// MrFarrukh`s second way =========================

elActionsListForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var newActionInput = elNewActionInput.value.trim();

  // Preventing empty list-item
  if (!newActionInput) {
    alert(`Please, enter text!`);
    elNewActionInput.value = '';
    return;
  };


  // Creating list-item to action
  var elActionsItem = document.createElement('li');
  elActionsItem.classList.add('list-group-item', );
  elActionsItem.textContent = newActionInput;


  // Checking the checkbox and adding to array
  if (elActionUrgentInput.checked) {
    actions.unshift(newActionInput);
    elActionsItem.classList.add('alert-urgent');
    elActionsList.prepend(elActionsItem);
  } else {
    actions.push(newActionInput);
    elActionsList.append(elActionsItem);
  }

  elNewActionInput.value = '';
  elNewActionInput.focus();
  console.log(actions);

});





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

  if (!actionsInput) {
    alert(`Please, enter text!`);
  }

  if (isActionsInputAdded) {
    elActionsResult.classList.remove('d-none');
    elActionsResult.textContent = `Yes, you added ${actionsInput}`;
  } else {
    elActionsResult.classList.add('d-none');
    elNewActionInput.value = actionsInput;
    elActionsInput.value = '';
    elNewActionInput.focus();
  }

});