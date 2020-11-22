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