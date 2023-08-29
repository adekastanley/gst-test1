document.addEventListener("DOMContentLoaded", function () {
	const navLinks = document.querySelectorAll(".link");
	const sections = document.querySelectorAll("section");

	navLinks.forEach((link) => {
		link.addEventListener("click", (e) => {
			e.preventDefault();

			// Remove 'active' class from all sections
			sections.forEach((section) => {
				section.classList.remove("active");
			});

			// Get the section name from the 'data-section' attribute
			const sectionName = link.getAttribute("data-section");

			// Add 'active' class to the corresponding section
			const targetSection = document.querySelector(`section.${sectionName}`);
			targetSection.classList.add("active");
		});
	});
});
