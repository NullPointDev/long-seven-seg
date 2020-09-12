var fs = require("fs");
var words = fs.readFileSync("words.txt").toString().split("\n");

var disallowed = /[gikmoqvwxz]/;
var longestWord = "";
var longestWords = [];

for (var word of words) {
  if (word.length < longestWord.length) continue;
  if (word.match(disallowed)) continue;
  if (word.length != longestWord.length) longestWords = [];
  longestWord = word;
  longestWords.push(word);
}

console.log(`Scanned ${words.length} words.`);
if (longestWords.length != 1) {
  console.log(
    `${longestWords.length} words tied for longest word with ${longestWord.length} letters:`
  );
  for (const longWord of longestWords) {
    console.log(`\t${longWord}`);
  }
} else console.log(`There was only one long word: ${longestWord}`);
