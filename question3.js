// 3. JavaScript - Arrayer (3p)
// Skriv en funktion sumOddNumbers som tar en array av tal och returnerar summan av alla udda tal.

function sumOddNumbers(numbers) {
  numbers.filter((num) => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
}

console.log(sumOddNumbers([1, 2, 3, 4, 5])); // Returnerar: 9
