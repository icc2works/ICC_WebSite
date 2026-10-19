import { services, projects } from "./services.js?v=services-3-card-layout";
import { initializeNavigation } from "./navigation.js";
import { initializeQuoteDialog } from "./quote-dialog.js";
import { categories, categoryCard } from "./products.js?v=cot-mobile-category";

const serviceGrid = document.querySelector("#service-grid");
const projectGrid = document.querySelector("#project-grid");
const categoryGrid = document.querySelector("#category-grid");

const serviceCard = ({ title, description, image, alt, target }) => `
  <article class="service-card" id="${target}">
    <img src="${image}" alt="${alt}" loading="lazy" />
    <h3 class="service-title">${title}</h3>
    <p class="service-description">${description}</p>
    <a class="service-link" href="#contact" aria-label="Ask us about ${title}">View Details <span class="round-arrow" aria-hidden="true">→</span></a>
  </article>`;

const projectCard = ({ title, image, alt, href = "#contact" }) => `
  <a class="project-card" href="${href}" aria-label="${href.startsWith("./product") ? "View" : "Discuss a"} ${title.toLowerCase()} project">
    <img src="${image}" alt="${alt}" loading="lazy" />
    <span class="project-title">${title}</span>
  </a>`;

serviceGrid.innerHTML = services.map(serviceCard).join("");
projectGrid.innerHTML = projects.map(projectCard).join("");
categoryGrid.innerHTML = categories.map(categoryCard).join("");
initializeNavigation();
initializeQuoteDialog();
