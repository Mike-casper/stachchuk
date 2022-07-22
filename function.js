
const mome = {
  name: "Bob",
  age:25
}
function increaseAge(age){
mome.age += 1
return age
}
increaseAge(mome.age)
console.log(mome);

const profile ={
  name: "Popka",
  age: 29
}
function upProfile(profile2){
const upProfile = Object.assign({}, profile2);
upProfile.age +=1
return upProfile;
}
const profileTwo = upProfile(profile);
console.log(profileTwo);
console.log(profile);

// Call back function

function printMyName(){
  console.log("Mikejjo")
}
setTimeout(printMyName, 2000);

//

let a,b;

function myFN(){
  let b
  a = 10;
  b = true;
  console.log(b);
}
myFN();
console.log(a);
console.log(b);


//-----//
const c = 6;
function myFnn(){
  function innerFN(){
    console.log(c)
  }
  innerFN();
}
myFnn();


//-----// don't use it
function example(){
  q = 17;
  console.log(q);
}
example();
console.log(q);
//-----//

