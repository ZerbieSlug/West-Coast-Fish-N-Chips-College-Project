  // Index - Clovis Spoof Redirect Link
  function visitClovis() {
  alert("Sorry, even though the Clovis location is fancier, even that branch isn't ready for internet service yet!");
}

   // Menu - Open/Close Script 2 | Made with Chat GPT
  document.addEventListener("DOMContentLoaded", () => {
  const DESKTOP_WIDTH = 992; // Bootstrap lg breakpoint

  const accordions = document.querySelectorAll(".accordion");

  function handleAccordions() {
    const isDesktop = window.innerWidth >= DESKTOP_WIDTH;

    accordions.forEach((accordion) => {
      const buttons = accordion.querySelectorAll(".accordion-button");
      const collapses = accordion.querySelectorAll(".accordion-collapse");

      collapses.forEach((collapseEl) => {
        const collapseInstance =
          bootstrap.Collapse.getOrCreateInstance(collapseEl, {
            toggle: false,
          });

        if (isDesktop) {
          // Force open
          collapseInstance.show();

          // Prevent closing
          collapseEl.setAttribute("data-locked", "true");
        } else {
          // Allow normal behavior on mobile
          collapseEl.removeAttribute("data-locked");

          // Close by default on mobile
          collapseInstance.hide();
        }
      });

      buttons.forEach((button) => {
        if (isDesktop) {
          // Disable clicking
          button.style.pointerEvents = "none";
          button.classList.remove("collapsed");
          button.setAttribute("aria-expanded", "true");
        } else {
          // Re-enable clicking
          button.style.pointerEvents = "auto";

          // Update collapsed state correctly
          const target = document.querySelector(
            button.getAttribute("data-bs-target")
          );

          if (!target.classList.contains("show")) {
            button.classList.add("collapsed");
            button.setAttribute("aria-expanded", "false");
          }
        }
      });
    });
  }

  // Initial load
  handleAccordions();

  // Update on resize
  window.addEventListener("resize", handleAccordions);
});
  // Contact - Fake Submit Error
  function sendMessage() {
  alert("Sorry! We're not in the mood to listen, we're currently 20,000 leagues under the sea!");
}