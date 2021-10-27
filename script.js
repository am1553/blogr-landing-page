// SELECTORS
const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");
const navSlide = document.getElementById("navigation")

// EVENTLISTENER
openMenu.addEventListener("click", showMenu);
closeMenu.addEventListener("click", hideMenu);

//FUNCTIONS

function showMenu() {
    navSlide.style.transform = "translateY(20vh)";
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
}

function hideMenu() {
    navSlide.style.transform = "translateY(-100%)"
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
}

function toggleList(target) {
    const accordian = target.parentNode;
    accordian.classList.toggle("toggle-list");
}
