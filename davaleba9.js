// 1. Დაბეჭდეთ რიცხვები 2 დან 8 მდე
for 
( let i =2; i<9; i++)
{ console.log (i) }
/////5 დან 35 - ის ჩათვლით დაბეჭდეთ ყოველი მეოთხე რიცხვი (უნდა დაიბეჭდოს 5,9,13…)
for (let i=5; i <=35; i+=4)
console.log(i);
// დაბეჭდეთ 3 დან 8 მდე რიცხვების ნამრავლი

let product = 1;
for (let i = 3; i <= 9; i++) 
product *= i;
console.log(product);
//4. Გამოაცხადეთ ობიექტი person რომელსაც აქვს firstName, lastName, age და დაბეჭდეთ person-სრული სახელი ( სახელი და გვარი)
let person = {
    firsName: "tornike",
    lastName: "abramishvili",
    age: 27
}

console.log(person)
//დაბეჭდეთ მეოთხე დავალებაში გამოცხადებული პერსონის თითოეული property value     
 person = {
    firstName: "tornike",
    lastName: "abramishvili",
    age: 27 
}
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)

//6. დაწერეთ მასივი fruits ელემენტებით ["Apple", "Banana", "Orange"]; დაბეჭდეთ მასივის თითოეული წევრი.
let fruits=[
    "Apple",
    "Banana",
    "Orange"
];
console.log(fruits)
/// 7. დაამატეთ fruits მასივის თავში Grapes და ბოლოში  Pineapples დაბეჭდეთ fruits
let fruits0 = ["Grapes","Apple","Banana","Oranege","Pinapples"];
console.log(fruits0)

//დაბეჭდეთ 1 დან 34 მდე რიცხვების ჯამი
let 