(function(){
	const checkScrollIntoView = (elem) => {
		const box = elem.getBoundingClientRect();
		const topInside = box.top > 0 && box.top < window.innerHeight;
		const bottomInside = box.bottom > 0 && box.bottom < window.innerHeight;
		return topInside || bottomInside;
	};

	const animations = document.querySelectorAll(".animate");
	// const animates = document.querySelectorAll(".animate-child");

	document.addEventListener(
		"scroll",
		function () {
			animations.forEach((anim) => {
				if (checkScrollIntoView(anim)) {
					anim.classList.add("animated");
				}
			});
		},
		{
			passive: true,
		}
	);
})();