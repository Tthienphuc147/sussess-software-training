const PI = 3.14;
const calculateArea = (radius, pi) => radius * radius * pi;
console.log("Calculate Area:", calculateArea(10, PI));
//---------------------------------//
const arr = [1, 2, 3, 4, 5];
const result = arr.map((item) => item + 2);
const sum = arr.reduce((a, b) => a + b, 0);
const filterResult = arr.filter((item) => item % 2 === 0);
console.log("Result:", result);
console.log(`Sum of array`, sum);
console.log(`List event item of array`, filterResult);
//----------------------------------//
const str = "Never give up";
const slugify = (str) => str.trim().toLowerCase().split(" ").join("-");
console.log(`String:`, slugify(str));
//----------------------//
const students = [
  {
    id: 1,
    name: "Jack",
    age: 25,
    hobbits: [
      {
        id: 1,
        name: "Soccer",
      },
      {
        id: 2,
        name: "Game",
      },
      {
        id: 3,
        name: "Music",
      },
    ],
  },
  {
    id: 2,
    name: "Jim",
    age: 23,
    hobbits: [
      {
        id: 4,
        name: "Guitar",
      },
      {
        id: 2,
        name: "Game",
      },
    ],
  },
  {
    id: 2,
    name: "Kaka",
    age: 29,
    hobbits: [
      {
        id: 1,
        name: "Soccer",
      },
      {
        id: 2,
        name: "Game",
      },
    ],
  },
];
const ageFilter = students.filter((item) => item.age > 24);
const hobbitMap = students.map((item) =>
  {
    item.hobbits.map(
        (element) => (element["sentences"] = `${item.name} like ${element.name}`)
      )
    return item;
  }

);
console.log("List student more than 23", ageFilter);
console.log("List hobbits student", hobbitMap);