const button = document.querySelector("#nav-menu");

const x_icon = document.querySelector("#x-mark");
const b_icon = document.querySelector("#b-menu");

const nav_overlay = document.querySelector("#nav-overlay");

let nav_open = false;

button.addEventListener("click", () => {
    console.log(nav_open)
	if (nav_open) {
		x_icon.style.display = "none";
		b_icon.style.display = "block";
        nav_overlay.style.display = "none";
	} else {
		x_icon.style.display = "block";
		b_icon.style.display = "none";
        nav_overlay.style.display = "flex";
	}
	nav_open = !nav_open;
});
