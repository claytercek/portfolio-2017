{
	var galleryitems = document.querySelectorAll(".cascadeLoad");

	i = 0;
	for (var item of galleryitems) {
		item.style.animationDelay = i * 0.1 + "s";
		i++;
	}
}
