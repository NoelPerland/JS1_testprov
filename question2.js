// 2. Strängmanipulation (3p)
// Skriv en funktion reverseWords som tar en sträng som input och returnerar en ny sträng där varje ord är omvänt, men ordningen på orden är oförändrad.

function reverseWords(string) {
  return string.split("").reverse().join("");
}

console.log(reverseWords("programmering är roligt"));
// Returnerar: "gniremmargorp rä tiglor"
