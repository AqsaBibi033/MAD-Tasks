/*String length*/
let str = "Aqsa";
let length = str.length;
console.log(length);

/*String slice()*/
let Slice = "Apple, Banana, Kiwi";
let part = Slice.slice(0, 5);
console.log(part);

/* String substring() */
let sub = "Apple, Banana, Kiwi";
let sol = sub.substring(0, 5);
console.log(sol);

/* String replace() */
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);

/* String ReplaceAll() */

let Rep = "I love Cats. Cats are very easy to love. Cats are very popular."
let Replace1= Rep.replaceAll("Cats","Dogs");
console.log(Replace1);

/* String toUpperCase() */
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2)

/* String toLowerCase() */
let text3 = "Hello World!";
let text4 = text3.toLowerCase();
console.log(text4);

/* String concat() */
let w = "Hello";
let w1 = "World";
let solution = w1.concat(" ", text2);
console.log(solution);

/* String trim() */
let trim= "      Hello World!      ";
let trim1 = trim.trim();
console.log(trim1);

/* String trimStart() */
let trimstart = "     Hello World!     ";
let method= trimstart.trimStart();
console.log(method);

/* String trimEnd() */
let trimend = "     Hello World!     ";
let end = trimend.trimEnd();
console.log(end);

/* String padStart() */
let texts = "5";
let padded = texts.padStart(4,"x");
console.log(padded);

/* String padEnd() */
let texts1 = "5";
let paddedend= texts1.padEnd(4,"x");
console.log(paddedend);

/*String charAt() */
let charac = "HELLO WORLD";
let char = charac.charAt(0);
console.log(charac);

/*String charCodeAt() */
let charac1 = "HELLO WORLD";
let char1 = charac1.charCodeAt(0);
console.log(char1);



