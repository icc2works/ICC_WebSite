const serviceImage = {
  wood: "../asset/02-service-3d-wood-carving.jpg",
  cnc: "../asset/03-service-2d-cnc-cutting.jpg",
  metal: "../asset/10-fiber-laser-metal-cutting.jpg",
};

export const services = [
  { title: "3D Wood Carving", description: "Detailed 3D carvings for doors, panels, pooja units, furniture and interior décor.", image: serviceImage.wood, alt: "Intricately carved wooden door", target: "wood-carving" },
  { title: "2D CNC Cutting", description: "Precision cutting for wood, MDF, WPC, acrylic and other sheet materials.", image: serviceImage.cnc, alt: "CNC router carving a timber panel", target: "cnc-cutting" },
  { title: "MS / SS Metal Cutting", description: "Precision laser cutting for mild steel, stainless steel and other metals for industrial and decorative applications.", image: serviceImage.metal, alt: "Fiber laser cutting a steel sheet", target: "metal-cutting" },
];

export const projects = [
  { title: "Carved Doors", image: "../asset/06-project-carved-door.jpg", alt: "Ornate carved timber entrance", href: "./product.html?product=MAD001" },
  { title: "Interior Panels", image: "../asset/07-project-interior-panels.jpg", alt: "Decorative wooden panels" },
  { title: "Laser Cut Metal", image: "../asset/08-project-laser-cut-metal.jpg", alt: "Laser cut metalwork in progress" },
];
