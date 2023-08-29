const links = document.querySelectorAll(".link");
const sections = document.querySelectorAll("section");
console.log(sections);
links.forEach((link) => {
	link.addEventListener("click", () => {
		sections.forEach((section) => {
			section.classList.remove("active");
		});

		const sectionName = link.getAttribute("data-section");
		const targetSection = document.querySelector(`section.${sectionName}`);
		targetSection.classList.add("active");
	});
});
