export const products = [
  { code: "MAD001", name: "MAD001", category: "Double Door", image: "./asset/product-MAD001.jpg", alt: "Ornate carved wooden double door, model MAD001" },
  { code: "MAD009", name: "MAD009", category: "Double Door", image: "./asset/product-MAD009.jpg", alt: "Carved wooden double door, model MAD009" },
  { code: "MAD012", name: "MAD012", category: "Double Door", image: "./asset/product-MAD012.jpg", alt: "Carved wooden double door, model MAD012" },
  { code: "MAD020", name: "MAD020", category: "Double Door", image: "./asset/product-MAD020.jpg", alt: "Carved wooden double door, model MAD020" },
  { code: "MAD025", name: "MAD025", category: "Double Door", image: "./asset/product-MAD025.jpg", alt: "Carved wooden double door, model MAD025" },
];

export const categories = [
  { name: "Small Door", slug: "sumal-full-door", count: 42, image: "./asset/Designs/Small%20Door.jpeg", fit: "contain", alt: "Small wooden door with detailed CNC carving" },
  { name: "CNC_CUTTING", slug: "cnc-cutting", count: 184, image: "./asset/Designs/2d%20Cutting.jpeg", fit: "contain", alt: "Decorative 2D CNC-cut wooden panel" },
  { name: "Single Door", slug: "single-door", count: 72, image: "./asset/Designs/Single%20Door.jpeg", fit: "contain", alt: "Single wooden door with detailed CNC carving" },
  { name: "god doors", slug: "god-doors", count: 15, image: "./asset/Designs/God%20Door.jpeg", fit: "contain", alt: "Wooden pooja door with a carved Ganesha design" },
  { name: "2Panel doors", slug: "2panel-doors", count: 50, image: "./asset/Designs/2%20Panel%20Door.jpeg", fit: "contain", alt: "Two-panel carved wooden door" },
  { name: "Double Door", slug: "double-door", count: 75, image: "./asset/Designs/Double%20door.jpeg", fit: "contain", alt: "Pair of carved wooden double doors" },
  { name: "Cot Design", slug: "cot-design", count: 70, image: "./asset/Designs/Kattil%20Cot.jpeg", wideMobile: true, alt: "Ornately carved wooden cot headboards" },
  { name: "LED False Ceiling", slug: "led-false-ceiling", count: 38, image: "./asset/Designs/False%20Ceiling.jpeg", wideMobile: true, alt: "Decorative CNC-cut false ceiling with warm lighting" },
  { name: "Metal Cutting", slug: "2d-cutting", count: 100, image: "./asset/Designs/Metal%20cutting.jpeg", wideMobile: true, alt: "Decorative metal gate with intricate CNC-cut patterns" },
];

export function categoryCard(category) {
  return `<a class="category-card${category.wideMobile ? " category-card--wide-mobile" : ""}" href="./catalog.html?category=${encodeURIComponent(category.slug)}" aria-label="Browse ${category.name}, ${category.count} designs">
    <span class="category-card-image${category.fit === "contain" ? " category-card-image--contain" : ""}"><img src="${category.image}" alt="${category.alt}" loading="lazy" /></span>
    <span class="category-card-info"><span><strong>${category.name}</strong><small>${category.count} designs</small></span><span class="category-card-arrow" aria-hidden="true">→</span></span>
  </a>`;
}

export function productHref(product) {
  return `./product.html?product=${encodeURIComponent(product.code)}`;
}

export function productCard(product, className = "catalog-card") {
  return `<article class="${className}">
    <a class="catalog-card-image" href="${productHref(product)}" aria-label="View ${product.name}">
      <img src="${product.image}" alt="${product.alt}" loading="lazy" />
    </a>
    <div class="catalog-card-info">
      <div><p class="catalog-card-category">${product.category}</p><h3><a href="${productHref(product)}">${product.name}</a></h3></div>
      <a class="catalog-card-arrow" href="${productHref(product)}" aria-label="View ${product.name}">→</a>
    </div>
    <a class="catalog-card-enquire" href="./index.html?product=${encodeURIComponent(product.code)}#contact">Enquire about this design</a>
  </article>`;
}
