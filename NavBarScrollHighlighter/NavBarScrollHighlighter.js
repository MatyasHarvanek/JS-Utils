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
var relativeTo;

function initNBSH(pageClassName, navBarItemClassName, activeNavBarClassName, relativeToId) {
    this.activeNavBarClassName = activeNavBarClassName;
    this.relativeTo = document.getElementById(relativeToId);
    this.relativeTo.addEventListener("scroll", () => {
        handleScroll();
    });
    registerPages(pageClassName);
    registerNavItems(navBarItemClassName);
    handleScroll();
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

function handleScroll() {
    for (let pageIndex = 0; pageIndex < pages.length; pageIndex++) {
        var relativeRect = relativeTo.getBoundingClientRect()
        var targetRect = pages[pageIndex].getBoundingClientRect();
        var staticTop = targetRect.top - relativeRect.top + relativeTo.scrollTop;
        var staticBottom = targetRect.bottom - relativeRect.top + relativeTo.scrollTop;
        var centerOfView = relativeTo.scrollTop + (window.innerHeight / 2);
        console.log(pageIndex + " relative rect" + relativeRect)
        if (centerOfView > staticTop && centerOfView < staticBottom) {
            setActivePage(pageIndex);
            break;
        }
    }
}