// 5. Funktioner och Scope (3p)
// Skriv en funktion multiplyNumbers som tar en array av nummer och returnerar produkten av alla tal. Funktionen ska använda en lokal variabel för att lagra produkten.

function multiplyNumbers(arr) {
  let result = 1;
  arr.forEach((num) => {
    result *= num;
  });
  return result;
}

console.log(multiplyNumbers([1, 2, 3, 4])); // Returnerar 24
