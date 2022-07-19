
const myCity = {
  city: "New York",
  popular: true,
  country: "USA"
}

myCity.city = "Las Vegas";
console.log(myCity.city);

const myFamily = {
  mom : "N",
  brother: "M"
}

console.log(myFamily);

myFamily.father = "S";
console.log(myFamily);

delete myFamily.mom;
console.log(myFamily);

myFamily["mom"] = "N";
console.log(myFamily);

const secondBrother = "secondbrother";
myFamily[secondBrother] = "K";
console.log(myFamily);
myFamily.secondBrother = "K";
console.log(myFamily);

const City = {
  city:"New York",
}
City["popular"]  = true;
console.log(City);
City.country = "USA";
console.log(City);

/*const contryName = "country"
City[contryName] = "USA";
console.log(City);*/


const country = {
  country: "Canada",
  info:{
    isPopular: true,
    city: "Kvebek"
  }
}
console.log(country);
console.log(country.info.isPopular);
delete country.info["isPopular"];
//delete.country.info.isPopular;
console.log(country);

////////////////////////
const name = "Mike"
const postQty = 25
const userProfile = {
  name: name,
  postQty: postQty,
  agrement: false
}
console.log(userProfile);

const nametwo = "Sasha"
const postQtytwo = 30
const userProfiletwo = {
  nametwo,
  postQtytwo,
  agreement: true
}
console.log(userProfiletwo);
////////////////////////