const elements = document.querySelectorAll(".aos");

const setTranslate = (element, value = "0 50%") => {
	[x, y] = value.split(" ");
	element.style.transform = `translate(${x}, ${y})`;
};

const callback = (entries) => {
	for (const entry of entries) {
		const target = entry.target;

		if (entry.isIntersecting) {
			target.style.opacity = 1;
			target.style.transform = "translate(0)";
		}
		// } else {
		// 	if (window.scrollY <= window.innerHeight) {
		// 		target.style.opacity = 0;
		// 		setTranslate(target, target.dataset.translatein);
		// 	}
		// }
	}
};

const observer = new IntersectionObserver(callback, {
	threshold: 0.3,
});

for (const element of elements) {
	element.style.opacity = 0;
	setTranslate(element, element.dataset.translatein);
	if (element.dataset.boot === "true") {
		setTimeout(() => {
			element.style.transform = "translate(0)";
		}, 500);
	}

	observer.observe(element);
}
