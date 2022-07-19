const objectA = {
  a:20,
  b:true
}

const objectB = objectA;
objectB.a = 60;
objectA.c = "ABC";
objectB.d = "DEF";


console.log(objectB.a);
console.log(objectA);
