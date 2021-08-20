

// **************************** TEMPLATE MENU ****************************
//**** SIDEBAR WITH OVERLAY ****/
const CreateSidebar = (overlayId, sidebarId, btnsHandlerClass, sidebarClass) => {
  const overlay = document.querySelector(`#${overlayId}`);
  const sidebar = document.querySelector(`#${sidebarId}`);
  const btnsHandler = document.querySelectorAll(`.${btnsHandlerClass}`);
  
  let handlers = [...[overlay], ...btnsHandler];
  console.log(handlers)

  handlers.forEach(elem => {
    sidebar.addEventListener('click', (e) => { e.stopPropagation(); })
    elem.addEventListener('click', () => {
      if (overlay.classList.contains('fixed')) {
        overlay.classList.add('fade-out-anim');
        sidebar.classList.add(`slide-out-${sidebarClass}`);
        setTimeout(() => {
          overlay.classList.add('hidden');
          overlay.classList.remove('fixed');
          overlay.classList.remove('fade-out-anim');
          sidebar.classList.remove(`slide-out-${sidebarClass}`);
        }, 300);
      } else {
        overlay.classList.remove('hidden');
        overlay.classList.add(...['fixed', 'fade-in-anim']);
        sidebar.classList.add(`slide-in-${sidebarClass}`);
        setTimeout(() => {
          sidebar.classList.remove(`slide-in-${sidebarClass}`);
          overlay.classList.remove('fade-in-anim')
        }, 300);
      }
    });
  });
}
// create sidebar for the menu
CreateSidebar('menu__overlay', 'menu__list', 'header-menu-btn', 'menu');
// create sidebar for the favorite list
CreateSidebar('favorite__overlay', 'favorite__list', 'favorite-sidebar-btn', 'favorite');


//**** SUBMENU CONTROLS */
const menuListItems = Array.from(document.querySelectorAll('.menu-item'));
console.log('menuListItems', menuListItems);

menuListItems.forEach((item, idx) => {
  console.log('item', item);
  // let menuItemSelector = item.className.split(" ").slice(0, 1).join("");
  let submenu = document.querySelector(`.menu-item:nth-child(${(idx+2)}) > .submenu-list`) || null;
  let menuItemLink = document.querySelector(`.menu-item:nth-child(${(idx+2)}) > .menu-item-link`) || null;
  console.log('submenu', submenu);
  console.log('menuItemLink', menuItemLink);

  item.addEventListener('click', () => {
    if (menuItemLink) {
      if (!menuItemLink.classList.contains('active')) {
        menuItemLink.classList.add('active');
      } else {
        menuItemLink.classList.remove('active');
        menuItemLink.setAttribute('disabled', true);
      }
    }
    if (submenu) {
      if (!submenu.classList.contains('active')) {
        submenu.classList.add(...['active', 'slide-in-submenu']);
        setTimeout(() => {
          submenu.classList.remove('slide-in-submenu');
        }, 200);
      } else {
        submenu.classList.add('slide-out-submenu');
        setTimeout(() => {
          submenu.classList.remove('active');
          submenu.classList.remove('slide-out-submenu');
          menuItemLink.removeAttribute('disabled')
        }, 200);
      }
    }
  });
  
});

