{
	var galleryitems = document.querySelectorAll(".cascadeLoad");

	i = 0;
	for (var item of galleryitems) {
		item.style.transitionDelay = i * 0.1 + "s";
		item.style.opacity = 1;
		i++;
	}
}
