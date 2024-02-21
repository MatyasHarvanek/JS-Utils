/*
 __  __                                    
/\ \/\ \                             __    
\ \ \_\ \      __     _ __   __  __ /\_\   
 \ \  _  \   /'__`\  /\`'__\/\ \/\ \\/\ \  
  \ \ \ \ \ /\ \L\.\_\ \ \/ \ \ \_/ |\ \ \ 
   \ \_\ \_\\ \__/.\_\\ \_\  \ \___/  \ \_\
    \/_/\/_/ \/__/\/_/ \/_/   \/__/    \/_/

    gitHub: https://github.com/MatyasHarvanek
*/

var pages;
var activeNavItem;
var navItems;
var activeNavBarClassName;

function initNBSH(pageClassName, navBarItemClassName, activeNavBarClassName) {
    this.activeNavBarClassName = activeNavBarClassName;
    registerPages(pageClassName);
    registerNavItems(navBarItemClassName);
    onscroll();
}

function registerNavItems(className) {
    navItems = document.getElementsByClassName(className);
    if (navItems === null) {
        console.log("Could not find any nav items with this class name!");
    }
}

function registerPages(className) {
    pages = document.getElementsByClassName(className);
    if (pages === null) {
        console.log("Could not find any pages with this calass name!");
    }
}

function setActivePage(navItemIndex) {
    if (activeNavItem) {
        activeNavItem.classList.remove(activeNavBarClassName);
    }
    activeNavItem = navItems[navItemIndex];
    activeNavItem.classList.add(activeNavBarClassName);
}

onscroll = () => {
    for (let pageIndex = 0; pageIndex < pages.length; pageIndex++) {

        var rect = pages[pageIndex].getBoundingClientRect();
        var staticTop = rect.top + window.scrollY;
        var staticBottom = rect.bottom + window.scrollY;
        var centerOfView = window.scrollY + (window.innerHeight / 2);

        if (centerOfView > staticTop && centerOfView < staticBottom) {
            setActivePage(pageIndex);
            break;
        }
    }
};