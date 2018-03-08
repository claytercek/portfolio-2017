{
	var menu = document.querySelector(".menu");
	var header = document.querySelector("header");
	var navLinks = document.querySelectorAll("nav a");

	menu.addEventListener("click", openCloseMenu, false);

	var menuIsOpen = false;

	function openCloseMenu() {
		if (!menuIsOpen) {
			header.classList.add("mobileHeaderOpen");
			menu.src = "images/clear_white.svg";

			let i = 1;
			for (var link of navLinks) {
				link.style.transitionDuration = "0.5s";
				link.style.transitionDelay = i * 0.15 + "s";
				link.classList.add("navAnimateIn");

				i++;
			}
		} else {
			header.classList.remove("mobileHeaderOpen");
			menu.src = "images/menu_white.svg";
			for (var link of navLinks) {
				link.style.transitionDuration = "0s";
				link.style.transitionDelay = ".9s";
				link.classList.remove("navAnimateIn");
			}
		}
		menuIsOpen = !menuIsOpen;
	}
}
