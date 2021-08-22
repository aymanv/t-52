
// ***** FITER SIDEBAR *****/
// SHOW FILTER FORM
const searchFilterOpenBtn = document.querySelector('#searchFilterOpenBtn');
const searchFilterCloseBtn = document.querySelector('#searchFilterCloseBtn');
const searchFilterForm = document.querySelector('#searchFilterForm');
const searchFilterSidebar = document.querySelector('#searchFilterSidebar');

// const toggleFilterSection = () => {
//   searchFilterSidebar.classList.toggle("hidden");
//   searchFilterSidebar.classList.toggle("fixed");
// }
if (window.innerWidth < 1023) {
  searchFilterOpenBtn.addEventListener("click", () => {
    searchFilterSidebar.classList.add("fixed");
    searchFilterSidebar.classList.remove("hidden");
    searchFilterForm.classList.remove("slide-out-filter-section");
    searchFilterForm.classList.add("slide-in-filter-section");
  });
  searchFilterCloseBtn.addEventListener("click", () => {
    searchFilterForm.classList.remove("slide-in-filter-section");
    searchFilterForm.classList.add("slide-out-filter-section");
    setTimeout(() => {
      searchFilterSidebar.classList.remove("fixed");
      searchFilterSidebar.classList.add("hidden");
    }, 300);
  });
}



// ******* LISTING CARDS *******
const ChangeListingCards = () => {
  let inventoryCardsContainer = document.querySelectorAll('.inventory-vehicle-cards');
  let inventoryCardHeaders = Array.from(document.querySelectorAll('.inventory-vehicle-card-header'));
  let inventoryCardBodies = Array.from(document.querySelectorAll('.inventory-vehicle-card-body'));
  let inventoryCardTitles = Array.from(document.querySelectorAll('.inventory-vehicle-card-title'));
  let inventoryCardPrices = Array.from(document.querySelectorAll('.inventory-vehicle-card-price'));
  let inventoryCardActions = Array.from(document.querySelectorAll('.inventory-vehicle-card-actions'));
  let inventoryCardBadges = Array.from(document.querySelectorAll('.inventory-vehicle-card-badges'));
  

  if (inventoryCardsContainer[0].classList.contains('horizontalCards')) {
    inventoryCardsContainer[0].classList.add('fade-out-anim'); // ANIMATE: fade out
    setTimeout(() => {
      // change grid cols + cards direction
      inventoryCardsContainer[0].classList.add(...['verticalCards', 'grid-cols-1', 'md:grid-cols-2', 'xl:grid-cols-3'])
      inventoryCardsContainer[0].classList.remove('horizontalCards');
      // change cards col span in the grid
      inventoryCardHeaders.forEach(elem => {
        elem.classList.remove('md:col-span-5', 'lg:col-span-4');
      });
      // change card bodies col span in the grid
      inventoryCardBodies.forEach(elem => {
        elem.classList.remove('md:col-span-7', 'lg:col-span-8');
      });
      inventoryCardTitles.forEach(elem => {
        elem.classList.remove('md:col-span-9')
        elem.classList.add(...['md:col-span-8']);
      });
      inventoryCardPrices.forEach(elem => {
        elem.classList.remove('md:col-span-3')
        elem.classList.add(...['md:col-span-4']);
      });
      inventoryCardActions.forEach(elem => {
        elem.classList.remove('lg:col-span-8')
        elem.classList.add('md:flex-col')
      });
      inventoryCardBadges.forEach(elem => {
        elem.classList.remove('lg:col-span-4', 'md:justify-end')
      });


      // ANIMATE
      inventoryCardsContainer[0].classList.remove('fade-out-anim') // fade out remove
      inventoryCardsContainer[0].classList.add('fade-in-anim'); // fade in add
      setTimeout(() => {
        inventoryCardsContainer[0].classList.remove('fade-in-anim')
      }, 200);
    }, 200);
  }
  else {
    setTimeout(() => {
      inventoryCardsContainer[0].classList.add('fade-out-anim'); // ANIMATE: fade out
      // change grid cols
      inventoryCardsContainer[0].classList.remove('verticalCards', 'grid-cols-1', 'md:grid-cols-2', 'xl:grid-cols-3');
      // change cards col span in the grid
      inventoryCardsContainer[0].classList.add('horizontalCards');
      
      // change card headers col span in the grid
      inventoryCardHeaders.forEach(elem => {
        elem.classList.add(...['md:col-span-5', 'lg:col-span-4']);
      });
      // change card bodies col span in the grid
      inventoryCardBodies.forEach(elem => {
        elem.classList.add(...['md:col-span-7', 'lg:col-span-8']);
      });
      inventoryCardTitles.forEach(elem => {
        elem.classList.remove('md:col-span-8')
        elem.classList.add(...['md:col-span-9']);
      });
      inventoryCardPrices.forEach(elem => {
        elem.classList.remove('md:col-span-4')
        elem.classList.add(...['md:col-span-3']);
      });
      inventoryCardActions.forEach(elem => {
        elem.classList.add('lg:col-span-8');
        elem.classList.remove('md:flex-col');
      });
      inventoryCardBadges.forEach(elem => {
        elem.classList.add(...['lg:col-span-4', 'md:justify-end'])
      });


      // ANIMATE
      inventoryCardsContainer[0].classList.remove('fade-out-anim') // fade out remove
      inventoryCardsContainer[0].classList.add('fade-in-anim'); // fade in add
      setTimeout(() => {
        inventoryCardsContainer[0].classList.remove('fade-in-anim')
      }, 200);
    }, 200);
  }

}

// TOGGLE VERTICAL/HORIZONTAL CARDS TYPE
const inventoryCardsDirectionBtns = Array.from(document.querySelectorAll('.inventory-card-direction-btn'));
inventoryCardsDirectionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    ChangeListingCards();
  }, false);
});