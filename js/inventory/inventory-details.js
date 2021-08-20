
//******************************************** */
// ***** INVENTORY TAB HEADER OBSERVER *****
//******************************************** */

const inventoryDetails__header = document.querySelector('#inventoryDetails__header');
const inventoryDetails__headerTab = document.querySelector('#inventoryDetails__headerTab');

const inventoryTabObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      inventoryDetails__headerTab.classList.add('fixed-top');
      inventoryDetails__headerTab.classList.remove('position-relative');
      
      // ANIMATE ACTION BUTTONS
      inventoryDetails__headerTab.classList.add('slide-from-top');
      setTimeout(() => {
        inventoryDetails__headerTab.classList.remove('slide-from-top');
      }, 1000);
    } else {
      inventoryDetails__headerTab.classList.add('position-relative');
      inventoryDetails__headerTab.classList.remove('fixed-top');
    }
  });
});

// observe
inventoryTabObserver.observe(inventoryDetails__header);





//************************************************ */
// ***** INVENTORY BUTTONS ACTIONS OBSERVER *****
//************************************************ */

const inventoryDetails__actionsSection = document.querySelector('#inventoryDetails__actionsSection');
const inventoryDetails__actionsContainer = document.querySelector('#inventoryDetails__actionsContainer');
const inventoryActionBtns = Array.from(document.querySelectorAll('#inventoryDetails__ActionsContent .action-btn'));

let observerOptions = {
  root: inventoryDetails__actionsSection,
  rootMargin: '0px',
  threshold: 1.0
}

const inventoryActionsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    console.log("entry", entry);
    if (entry.isIntersecting) {
        inventoryDetails__actionsContainer.classList.remove('fixed-bottom');
        inventoryDetails__actionsContainer.classList.add('position-relative');
        inventoryDetails__actionsContainer.classList.add('mb-2');
        // inventoryActionBtns.forEach(elem => {
          // elem.classList.add('py-8')
          // elem.classList.remove('py-2')
        // });
    } else {
        inventoryDetails__actionsContainer.classList.add('fixed-bottom');
        inventoryDetails__actionsContainer.classList.remove('position-relative');
        inventoryDetails__actionsContainer.classList.remove('mb-2');
        
        // ANIMATE ACTION BUTTONS
        inventoryDetails__actionsContainer.classList.add('slide-from-bottom');
        setTimeout(() => {
          inventoryDetails__actionsContainer.classList.remove('slide-from-bottom');
        }, 1000);
        // inventoryActionBtns.forEach(elem => {
          // elem.classList.remove('py-8')
          // elem.classList.add('py-2')
        // });
    }
  });
});

// observe
inventoryActionsObserver.observe(inventoryDetails__actionsSection);


