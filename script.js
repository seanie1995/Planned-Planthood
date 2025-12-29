const plantCategories = [
  "Blommor",
  "Ätbart",
  "Grönska",
  "Krukväxter",
  "Träd",
  "Buskar",
  "Örter",
  "Perenner",
  "Sommarblommor",
  "Växthusväxter",
  "Suckulenter",
  "Kaktusar",
  "Klätterväxter",
  "Marktäckare",
  "Vattenväxter",
  "Lökväxter",
  "Fruktträd",
  "Bärväxter",
  "Inomhusväxter",
  "Vildväxter",
];

function randomHsl() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 60;
  const lightness = 45;

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

const bubbles = document.querySelectorAll(
  ".cardLibrary__grid__card__bubbles p"
);

const shuffled = plantCategories.sort(() => Math.random() - 0.5);

bubbles.forEach((p, index) => {
  p.textContent = shuffled[index];
  p.style.backgroundColor = randomHsl();
});
