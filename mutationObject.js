
const a = 10;
let b = a;
console.log(a,b);
b = 30;
console.log(b);


const person = {
  name: "Viktor",
  age: 21
}
console.log(person);
person.name = "Moka"
person.age = 25;
console.log(person);

//--avoid mutation--/1/


const profile ={
  name: "Popka",
  age: 24
}
console.log(profile)

const profile2 = Object.assign({}, profile);
profile2.name = "Viktor";
console.log(profile2);

//--avoid mutation--/2/

const secondprofile = {
  name: "Pablo",
  age: 45
}
console.log(secondprofile);
const secondprofile2 = {...secondprofile}
secondprofile2.name = "Alex"
console.log(secondprofile2);

//--avoid mutation--/3/

const firstProfile = {
  name: "Klim",
  age:33
}
const firstProfile2 = JSON.parse(JSON.stringify(firstProfile))
firstProfile2.age = 37
console.log(firstProfile);
console.log(firstProfile2);