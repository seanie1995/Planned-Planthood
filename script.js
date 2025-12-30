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
  const highContrastColors = [
    "#0B0B0B", // very dark gray
    "#1A1A1A",
    "#2A2A2A",
    "#3D0C02", // dark red
    "#5C0A05",
    "#7D0F0A",
    "#3D020C", // dark magenta
    "#5C025C",
    "#3D2A0B", // dark orange/brown
    "#5C3D0A",
    "#0B3D02", // dark green
    "#0A5C05",
    "#003D3D", // dark teal
    "#002C5C", // navy
    "#1B1B2F", // very dark blue
    "#2C2C54",
    "#4A0B3D", // purple
    "#6A0A5C",
    "#3A0A3D",
    "#0B0A5C",
    "#1A1A1A", // fallback very dark gray
  ];

  const index = Math.floor(Math.random() * highContrastColors.length);
  return highContrastColors[index];
}

const bubbles = document.querySelectorAll(
  ".cardLibrary__grid__card__bubbles li"
);

bubbles.forEach((p) => {
  const randomIndex = Math.floor(Math.random() * plantCategories.length);
  p.textContent = plantCategories[randomIndex];
  p.style.backgroundColor = randomHsl();
});
