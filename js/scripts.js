/* =================================
EVENT OF ADDING AN ACTION
================================ */


// Get html elements
var elActionsListForm = document.querySelector('.actions-list__form');
var elNewActionInput = elActionsListForm.querySelector('.actions-input');
var elActionsList = elActionsListForm.querySelector('.actions__list');
var elActionUrgentInput = elActionsListForm.querySelector('.urgent-checkbox');


// Create empty array for action objects
var actions = [];


// Listen to submit of elActionsListForm
elActionsListForm.addEventListener('submit', function (evt) {
   evt.preventDefault();

   // Get value of newActionInput
   var newActionInput = elNewActionInput.value.trim();

   // Preventing empty list-item
   if (!newActionInput) {
      alert(`Please, enter text!`);
      elNewActionInput.value = '';
      return;
   };


   // Creating list-item to action
   var elActionsItem = document.createElement('li');
   elActionsItem.classList.add('list-group-item');
   elActionsItem.textContent = newActionInput;


   // Checking the checkbox and adding to array
   if (elActionUrgentInput.checked) {
      // Create new object and assign its values
      var newObjAction = {
         name: newActionInput,
         isUrgent: true
      }
      // Unshift to actions array 
      actions.unshift(newObjAction);
      elActionsItem.classList.add('alert-urgent');
      elActionsList.prepend(elActionsItem);

   } else {
      // Create new object and assign its values
      var newObjAction = {
         name: newActionInput,
         isUrgent: false
      }
      // Unshift to actions array
      actions.push(newObjAction);
      elActionsList.append(elActionsItem);
   }


   // Little UX feature 
   elNewActionInput.value = '';
   elNewActionInput.focus();

});



/* ==============================
EVENT OF CHECKING ACTIONS
============================== */

// Get html elemets
var elActionsForm = document.querySelector('.actions-check-list__form');
var elActionsInput = elActionsForm.querySelector('.action-check-input');
var elActionsResult = elActionsForm.querySelector('.action-check__result');


// Listen to submit of elActionsForm
elActionsForm.addEventListener('submit', function (evt) {
   evt.preventDefault();

   // Get value of elActionsInput
   var actionsInput = elActionsInput.value.trim();

   // Prevent an empty inputl
   if (!actionsInput) {
      alert(`Please, enter text!`);
   }


   // Check whether input is added or not
   var isActionsInputAdded = false;

   actions.forEach(function (action) {
      if (action.name === actionsInput) {
         isActionsInputAdded = true;
      }
   });


   // Release box if action is added
   if (isActionsInputAdded) {
      elActionsResult.classList.remove('d-none');
      elActionsResult.textContent = `Yes, you added ${actionsInput}`;
   } else {
      elActionsResult.classList.add('d-none');

      // Little UX feature
      elNewActionInput.value = actionsInput;
      elActionsInput.value = '';
      elNewActionInput.focus();
   }

});