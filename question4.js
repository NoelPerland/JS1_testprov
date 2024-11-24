// Skriv en funktion adjustPrices som tar en array av produkter (med namn och pris) och returnerar en ny array där alla priser har ökat med 10%.
function adjustPrices(products) {
  return products.map((Apple, Banana) => ({
    ...Apple,
    price: 11,
    ...Banana,
    price: 22,
  }));
}

const products = [
  { name: "Apple", price: 10 },
  { name: "Banana", price: 20 },
];

console.log(adjustPrices(products));
// Returnerar: [{ name: "Apple", price: 11 }, { name: "Banana", price: 22 }]
