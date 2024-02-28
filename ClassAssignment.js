let text = "My Name is Saad and i spend most of my time playing E-Games";
let length = text.length;
console.log("The sentence length is " +length)

console.log("------")


let text1 = "My Name is Saad and i spend most of my time playing E-Games";
let char = text.charAt(6);
console.log("At index 0 the character is " +char)

console.log("------")

let text2 = "HELLO WORLD";
let char1 = text.charCodeAt(0);
console.log("The UTF-16 Code is " +char1)

console.log("------")

const name ="Saad";
let letter= name.at(2);
console.log(letter)

console.log("------")

let slice1 = "Saad, Hammad, Najam";
let part = text.slice(5, 10);
console.log(part)

console.log("------")

let str = "Hammad, Najam, Saad";
let part3 = str.substring(7, 13);
console.log(part3)

console.log("------")

let text4 = "Saad Uz Zaman Gohar";
let text5 = text4.toUpperCase();
console.log(text5)

console.log("------")


let text8 = "MUHAMMAD SAAD UZ ZAMAN GOHAR";       
let text9 = text8.toLowerCase();  
console.log(text9)

console.log("------")


let name1 = "Saad";
let name2 = "Uz";
let name3 = "Zaman";
let name4= "Gohar"
let text3 = name1.concat(" ", name2," ",name3," ",name4);
console.log(text3)


console.log("------")


let trim = "      Saad      ";
let trim2 = trim.trim();
console.log(trim2)

console.log("------")


let trimstrt = "    Saadi     ";
let trimstrt1 = trimstrt.trimStart();
console.log(trimstrt1)

console.log("------")

let trimend = "    Saadi     ";
let trimend1 = trimend.trimEnd();
console.log(trimend)

console.log("------")

let text6 = "10";
let padded = text6.padStart(5,"10");
console.log(padded)


console.log("------")

let numb = 5;
let text99 = numb.toString();
let padded1 = text99.padStart(4,"0");
console.log(padded1)


console.log("------")

let text89 = "5";
let padded4 = text89.padEnd(4,"0");
console.log(padded4)


console.log("------")

let textrepeat = "Hello world! ";
let result = textrepeat.repeat(2);
console.log(result)

console.log("------")

let text10 = " visit Home!";
let newText8 = text10.replace("Home", "Uni");
console.log(newText8)

console.log("------")


let text77 = " visit Home!";
let newText = text77.replace(/Home/i, "Uni");
console.log(newText)

console.log("-------")

