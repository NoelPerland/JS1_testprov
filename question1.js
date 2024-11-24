// 1. Kontrollera drickålder (3p)
// Skriv en funktion canDrinkAlcohol som tar en persons ålder som parameter och returnerar en sträng beroende på åldern:

// Om personen är under 18: returnera "För ung för att dricka alkohol".
// Om personen är 18 eller äldre: returnera "Kan köpa alkohol".

function canDrinkAlcohol(age) {
  if (age < 18) {
    return "För ung för att dricka alkohol";
  } else if (age >= 18) {
    return "Kan köpa alkohol(inte på systemet)";
  }
}

console.log(canDrinkAlcohol(17)); // Ska logga: "För ung för att dricka alkohol"
console.log(canDrinkAlcohol(18)); // Ska logga: "Kan köpa alkohol"
