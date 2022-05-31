"use strict";
console.log("javascript sets");

//A SET IS A COLLECTION OF UNIQUE VALUES

const ordersSet = new Set([
  "pasta",
  "pizza",
  "pizza",
  "Rizotto",
  "pasta",
  "pizza",
]);

console.log(ordersSet);

console.log(ordersSet.size);

// console.log(ordersSet.length); they dont have length

//METHOD: HAS
console.log(ordersSet.has("pizza"));
console.log(ordersSet.has("katogo"));

//METHOD: ADD
ordersSet.add("katogo");
console.log(ordersSet.has("katogo"));

//METHOD DELETE
ordersSet.delete("pizza");
ordersSet.has("pizza");
console.log(ordersSet);

//METHOD: CLEAR
// ordersSet.clear(); this deletes the sets content
console.log(ordersSet);

//sets can be looped
for (const mySet of ordersSet) {
  console.log(mySet);
}

//USE CASE 1
const staff = ["waiter", "chef", "waiter", "manager", "chef"];

let staffUnique = new Set(staff);
console.log(staffUnique);

//create an array from a set
staffUnique = [...staffUnique];
console.log(staffUnique);

//MAPS

const restaurantMap = new Map();
restaurantMap.set("name", "ugaroll kisementi");
restaurantMap.set(1, "kisementi acacia");
restaurantMap.set(2, "ntinda");

console.log(restaurantMap);

//set method allows logging of new set this allows chaining while adding items

//METHOS: SET() adds items to set
restaurantMap
  .set("categories", ["italian", "Pizzeria", "Vegeterian", "Organic"])
  .set("open", 11)
  .set("closed", 23)
  .set(true, "we are open")
  .set(false, "we are closed");

//METHOD GET() checks wether item is available in set
console.log(restaurantMap.get("name"));
console.log(restaurantMap.get(false));
console.log(restaurantMap.get(2));

//something intresting

let time = 11;

console.log(
  restaurantMap.get(
    time > restaurantMap.get("open") && time < restaurantMap.get("closed")
  )
);

//METHOD: HAS()

console.log(restaurantMap.has("categories"));

//METHOD: DELETE

restaurantMap.delete(2);

console.log(restaurantMap);

//METHOD: SIZE

console.log(restaurantMap.size);

//addidng HTML element to a map

console.log(restaurantMap.set(document.querySelector("h1"), "HTML heading"));

//MORE ON MAPS

const question = new Map([
  ["question", "what is the best programming language ?"],
  [1, "c"],
  [2, "java"],
  [3, "javaScript"],
  ["correct", 3],
  [true, "correct bro"],
  [false, "try again"],
]);

console.log(question);

//CONVERT OBJECT TO MAP
let objectNEw = {
  firstName: "naluyima",
  lastName: "sandra",
  age: 27,
};

const objectMap = new Map(Object.entries(objectNEw));
console.log(objectMap);

//ITERATION ON MAPS

// for (const options of question) {
//   console.log(options);
// }```````

console.log(question.get("question"));

for (const [key, value] of question) {
  if (typeof key === "number") console.log(`answer ${key}: ${value}`);
}

// const answer = Number(prompt("whats your answer ?"));
// console.log(answer);

// console.log(question.get(question.get("correct") === answer));

//CONVERT MAP TO ARRAY

const questionArray = [...question];
console.log(questionArray);

console.log(question.entries());
console.log(question.keys());
console.log(question.values());

//ARRAY METHODS

console.log(...question.entries());
console.log(...question.keys());
console.log(...question.values());
