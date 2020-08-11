// Sticky nav bar
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
const navbar = document.getElementById("navWrapper");
// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}

// hamburger menu

const menuButton = document.querySelector(".menuButton");
let hamNav = document.querySelectorAll(".navFlexParent li a");
let wholeNav = document.querySelector("nav");
let menuOpen = false;
menuButton.addEventListener("click", () => {
	if (!menuOpen) {
		menuButton.classList.add("open");
		menuOpen = true;
		hamNav.forEach(function (navItem) {
			navItem.style.display = "block";
			navItem.style.color = "white";
		});
		wholeNav.style.backgroundColor = "black";
	} else {
		menuButton.classList.remove("open");
		menuOpen = false;
		hamNav.forEach(function (navItem) {
			navItem.style.display = "none";
		});
		wholeNav.style.backgroundColor = "transparent";
	}
});

