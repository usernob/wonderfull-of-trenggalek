const imagelist = document.querySelector("#flex-image-dest");
const imageDest = document.querySelector("#content-dest");
const imageCarouselDest = document.querySelector("#image-carousel-dest");

let index = 0;

imagelist.addEventListener("click", (elm) => {
	if (elm.target === imagelist) return;
	const target = elm.target;

	index = Number.parseInt(target.dataset.index) || 0;
	changeImage(target);
});

const changeImage = (target) => {
	// set the content of big image with the content from small image
	imageDest.querySelector("h3").textContent =
		target.querySelector("h3").textContent;

	imageDest.querySelector("p").textContent =
		target.querySelector("p").textContent;

	const curr_active = imagelist.querySelector(".dest-image-active");

	if (curr_active) {
		const curr_index = Number.parseInt(curr_active.dataset.index) || 0;
		const target_index = Number.parseInt(target.dataset.index) || 0;
		imageCarouselDest.style.transitionDuration = `${(Math.abs(target_index - curr_index) + 1) * 200}ms`;
		curr_active.classList.remove("dest-image-active");
	}

	imageCarouselDest.style.transform = `translateX(${target.dataset.index * -100}%)`;

	target.classList.add("dest-image-active");
};

setInterval(() => {
	index = index >= imagelist.children.length - 1 ? 0 : index + 1;
	changeImage(imagelist.children[index]);
}, 5000);
