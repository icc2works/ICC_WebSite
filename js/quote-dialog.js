import { categories } from "./products.js";

export function initializeQuoteDialog() {
  const dialog = document.querySelector("#quote-dialog");
  const quoteForm = document.querySelector("#quote-form");
  const closeButton = document.querySelector(".dialog-close");
  const toast = document.querySelector(".toast");
  const projectField = quoteForm.elements.project;
  const requestedProduct = new URLSearchParams(window.location.search).get("product");
  const requestedCategorySlug = new URLSearchParams(window.location.search).get("category");
  const requestedCategory = categories.find(({ slug }) => slug === requestedCategorySlug);
  let toastTimer;

  if (requestedProduct) {
    projectField.value = `I'm interested in product ${requestedProduct}. Please share details and a quotation.`;
    dialog.showModal();
  } else if (requestedCategory) {
    projectField.value = `I'm interested in the ${requestedCategory.name} category (${requestedCategory.count} designs). Please share available models and a quotation.`;
    dialog.showModal();
  }

  document.querySelectorAll('a[href="#contact"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      if (link.classList.contains("service-link") || link.classList.contains("project-card") || link.classList.contains("projects-button")) return;
      event.preventDefault();
      dialog.showModal();
    });
  });

  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(quoteForm);
    dialog.close();
    quoteForm.reset();
    toast.textContent = `Thanks, ${data.get("name")}. Connect this form to a business inbox to receive enquiries.`;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3600);
  });
}
