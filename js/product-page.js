import { products, productHref } from "./products.js";

const mainImage = document.querySelector("#product-image");
const title = document.querySelector("#product-title");
const category = document.querySelector("#product-category");
const breadcrumbCode = document.querySelector("#breadcrumb-code");
const relatedProducts = document.querySelector("#related-products");
const compareButton = document.querySelector(".product-compare");
const compareStatus = document.querySelector("#compare-status");
const quoteLink = document.querySelector("#product-quote");
const enquiryLink = document.querySelector(".product-enquiry");
const requestedCode = new URLSearchParams(window.location.search).get("product") || "MAD001";
const requestedProduct = products.find(({ code }) => code === requestedCode) || products[0];

function compareCodes() {
  try { return JSON.parse(localStorage.getItem("icc-compare") || "[]"); }
  catch { return []; }
}

function selectProduct(product, updateAddress = false) {
  mainImage.src = product.image;
  mainImage.alt = product.alt;
  title.textContent = product.name;
  category.textContent = product.category;
  breadcrumbCode.textContent = product.code;
  document.title = `${product.name} ${product.category} — Indian CNC Carving`;
  quoteLink.href = `./index.html?product=${encodeURIComponent(product.code)}#contact`;
  enquiryLink.href = quoteLink.href;
  document.querySelectorAll(".related-product").forEach((button) => {
    button.setAttribute("aria-current", String(button.dataset.code === product.code));
  });
  const isCompared = compareCodes().includes(product.code);
  compareButton.setAttribute("aria-pressed", String(isCompared));
  compareButton.textContent = isCompared ? "Remove from Compare" : "Compare";
  compareStatus.textContent = "";
  if (updateAddress) history.replaceState(null, "", productHref(product));
}

relatedProducts.innerHTML = products.filter(({ code }) => code !== requestedProduct.code)
  .map((product) => `
    <a class="related-product" href="${productHref(product)}" data-code="${product.code}" aria-label="View product ${product.code}">
      <img src="${product.image}" alt="${product.alt}" loading="lazy" />
      <span>${product.code}</span>
    </a>`).join("");

compareButton.addEventListener("click", () => {
  const currentCode = breadcrumbCode.textContent;
  const codes = compareCodes();
  const isAdded = !codes.includes(currentCode);
  const next = isAdded ? [...codes, currentCode] : codes.filter((code) => code !== currentCode);
  localStorage.setItem("icc-compare", JSON.stringify(next));
  compareButton.setAttribute("aria-pressed", String(isAdded));
  compareButton.textContent = isAdded ? "Remove from Compare" : "Compare";
  compareStatus.textContent = isAdded ? `${currentCode} added to your compare list.` : `${currentCode} removed from your compare list.`;
});

selectProduct(requestedProduct);
