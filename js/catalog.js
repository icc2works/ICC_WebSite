import { categories, products, productCard } from "./products.js";

const grid = document.querySelector("#catalog-grid");
const count = document.querySelector("#catalog-count");
const search = document.querySelector("#catalog-search");
const categorySelect = document.querySelector("#catalog-category");
const sortSelect = document.querySelector("#catalog-sort");
const empty = document.querySelector("#catalog-empty");
const pagination = document.querySelector("#catalog-pagination");
const pageSize = 12;
let currentPage = 1;

categories.forEach((category) => {
  const option = document.createElement("option");
  option.value = category.slug;
  option.textContent = `${category.name} (${category.count})`;
  categorySelect.append(option);
});

const requestedCategory = new URLSearchParams(window.location.search).get("category");
if (categories.some(({ slug }) => slug === requestedCategory)) categorySelect.value = requestedCategory;

function getVisibleProducts() {
  const term = search.value.trim().toLowerCase();
  const selectedCategory = categories.find(({ slug }) => slug === categorySelect.value);
  return products
    .filter((product) => !selectedCategory || product.category === selectedCategory.name)
    .filter((product) => `${product.code} ${product.category}`.toLowerCase().includes(term))
    .sort((a, b) => sortSelect.value === "code-desc" ? b.code.localeCompare(a.code) : a.code.localeCompare(b.code));
}

function render() {
  const visible = getVisibleProducts();
  const pageCount = Math.ceil(visible.length / pageSize);
  currentPage = Math.min(currentPage, Math.max(pageCount, 1));
  const start = (currentPage - 1) * pageSize;
  const pageItems = visible.slice(start, start + pageSize);
  const selectedCategory = categories.find(({ slug }) => slug === categorySelect.value);
  count.textContent = selectedCategory
    ? `${visible.length} available product images · ${selectedCategory.count} designs in ${selectedCategory.name}`
    : `${visible.length} available product images`;
  grid.innerHTML = pageItems.map((product) => productCard(product)).join("");
  empty.hidden = visible.length > 0;
  empty.innerHTML = selectedCategory && !search.value.trim()
    ? `We have ${selectedCategory.count} designs in ${selectedCategory.name}. Product images for this category are not in the new catalogue yet. <a href="./index.html?category=${encodeURIComponent(selectedCategory.slug)}#contact">Ask us about this category →</a>`
    : "No designs match your search. Try another model or category.";
  pagination.innerHTML = pageCount > 1 ? `
    <button type="button" data-page="${currentPage - 1}" ${currentPage === 1 ? "disabled" : ""}>Previous</button>
    <span>Page ${currentPage} of ${pageCount}</span>
    <button type="button" data-page="${currentPage + 1}" ${currentPage === pageCount ? "disabled" : ""}>Next</button>` : "";
}

search.addEventListener("input", () => { currentPage = 1; render(); });
categorySelect.addEventListener("change", () => { currentPage = 1; render(); });
sortSelect.addEventListener("change", render);
pagination.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-page]");
  if (!button || button.disabled) return;
  currentPage = Number(button.dataset.page);
  render();
  document.querySelector(".catalog-browser").scrollIntoView({ behavior: "smooth", block: "start" });
});

render();
