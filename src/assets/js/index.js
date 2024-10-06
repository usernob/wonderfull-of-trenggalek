const imagelist = document.querySelector("#flex-image-dest");
const imageDest = document.querySelector("#content-dest");
const imageCarouselDest = document.querySelector("#image-carousel-dest");

imagelist.addEventListener("click", (elm) => {
	if (elm.target === imagelist) return;
	const target = elm.target;

	// set the content of big image with the content from small image
	imageDest.querySelector("h3").textContent =
		target.querySelector("h3").textContent;

	imageDest.querySelector("p").textContent =
		target.querySelector("p").textContent;

	const curr_active = imagelist.querySelector(".dest-image-active");

	if (curr_active) {
		imageCarouselDest.style.transitionDuration = `${(Math.abs(curr_active.dataset.index - target.dataset.index) + 1) * 200}ms`;
		curr_active.classList.remove("dest-image-active");
	}

	imageCarouselDest.style.transform = `translateX(${target.dataset.index * -100}%)`;


	target.classList.add("dest-image-active");
});
