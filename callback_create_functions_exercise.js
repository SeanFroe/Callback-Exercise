// forEach FUNCTION
function forEach(array, callback) {
  for (i = 0; i < array.length; i++) {
    callback(array[i], i, arr);
  }
}

// DOUBLEVALUES() FUNCTION
const nums = [1, 2, 3];
const otherNums = [5, 1, 2, 3, 10];

//
function doubleValues(arr) {
  let newArr = [];
  arr.forEach(function (val) {
    newArr.push(val * 2);
  });
  return newArr;
}
console.log(doubleValues(nums), "doubleValues(Nums)");
console.log(doubleValues(otherNums), "doubleValues for otherNums");

// onlyEvenValues() FUNCTION

function onlyEvenValues(arr) {
  let newArr = [];
  arr.forEach(function (val) {
    if (val % 2 === 0) {
      newArr.push(val);
    }
  });
  return newArr;
}
console.log(onlyEvenValues(nums), "onlyEvenValues for nums");
console.log(onlyEvenValues(otherNums), "onlyEvenValues for otherNums");

// showFirstAndLast FUNCTION

function showFirstAndLast(arr) {
  let newArr = [];
  arr.forEach(function (val) {
    newArr.push(val[0] + val[val.length - 1]);
  });
  return newArr;
}
console.log(
  showFirstAndLast(["colt", "matt", "tim", "test"]),
  "showFirstAndLast()"
); // ["ct", "mt", "tm", "tt"]
console.log(showFirstAndLast(["hi", "goodbye", "smile"]), "showFirstAndLast()"); // ['hi', 'ge', 'se']

// addKeyAndValue FUNCTION

const teacherList = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];

function addKeyAndValue(arr, key, value) {
  arr.forEach(function (val) {
    val[key] = value;
  });
  return arr;
}
console.log(
  addKeyAndValue(teacherList, "title", "instructor"),
  "addKeyAndValue()"
);

// vowelCount() FUNCTION

function vowelCount(str) {
  let splitArr = str.split("");
  obj = {};
  const vowels = "aeiou";

  splitArr.forEach(function (letter) {
    let lowerCasedLetter = letter.toLowerCase();
    if (vowels.indexOf(lowerCasedLetter) !== -1) {
      if (obj[lowerCasedLetter]) {
        obj[lowerCasedLetter]++;
      } else {
        obj[lowerCasedLetter] = 1;
      }
    }
  });
  return obj;
}

console.log(vowelCount("Elie"), "vowelCount()"); // {e:2,i:1};
console.log(vowelCount("Tim"), "vowelCount()"); // {i:1};
console.log(vowelCount("Matt"), "vowelCount()"); // {a:1})
console.log(vowelCount("hmmm"), "vowelCount()"); // {};
console.log(vowelCount("I Am awesome and so are you"), "vowelCount()"); // {i: 1, a: 4, e: 3, o: 3, u: 1}

// MAP FUNCTION SECTION

// doubleValuesWithMap FUNCTION

function doubleValuesWithMap(arr) {
  let newArr = [];
  arr.map(function (val) {
    newArr.push(val * 2);
  });
  return newArr;
}
console.log(doubleValuesWithMap([1, 2, 3]), "doubleValuesWithMap()"); // [2,4,6]
console.log(doubleValuesWithMap([1, -2, -3]), "doubleValuesWithMap()"); // [2,-4,-6]

// valTimesIndex FUNCTION
function valTimesIndex(arr) {
  let newArr = [];
  arr.map(function (val, idx) {
    newArr.push(val * idx);
  });
  return newArr;
}

console.log(valTimesIndex([1, 2, 3]), "valTimesIndex"); // [0,2,6]
console.log(valTimesIndex([1, -2, -3]), "valTimesIndex"); // [0,-2,-6]console.log(

// extractKey() FUNCTION

const people = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];

// ['Elie', 'Tim', Matt', 'Colt']
function extractKey(arr, key) {
  return arr.map(function (val) {
    return val[key];
  });
}
console.log(
  extractKey(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "name"
  ),
  "extractKey"
);

// ['Elie', 'Tim', Matt', 'Colt']

// extractFullName FUNCTION
function extractFullName(arr) {
  return arr.map(function (val) {
    return val.first + " " + val.last;
  });
}

console.log(
  extractFullName([
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia" },
    { first: "Matt", last: "Lane" },
    { first: "Colt", last: "Steele" },
  ])
);

// ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']

// FILTER FUNCTION

// filterByValue() FUNCTION

function filterByValue(arr, key) {
  return arr.filter(function (val) {
    return val[key] !== undefined;
  });
}

console.log(
  filterByValue(
    [
      { first: "Elie", last: "Schoppik" },
      { first: "Tim", last: "Garcia", isCatOwner: true },
      { first: "Matt", last: "Lane" },
      { first: "Colt", last: "Steele", isCatOwner: true },
    ],
    "isCatOwner"
  ),
  "filterByValue"
);
/*
      [
        {first: 'Tim', last:"Garcia", isCatOwner: true},
        {first: 'Colt', last:"Steele", isCatOwner: true}
      ]
    */

//   find() FUNCTION

function find(arr, key) {
  return arr.filter(function (val) {
    return val === key;
  })[0];
}

console.log(find([1, 2, 3, 4, 5], 3), "find()"); // 3
console.log(find([1, 2, 3, 4, 5], 10), "find()"); // undefined

// findInObj() FUNCTION

function findInObj(arr, key, value) {
  return arr.filter(function (val) {
    return val[key] === value;
  })[0];
}

console.log(
  findInObj(
    [
      { first: "Elie", last: "Schoppik" },
      { first: "Tim", last: "Garcia", isCatOwner: true },
      { first: "att", last: "Lane" },
      { first: "Colt", last: "Steele", isCatOwner: true },
    ],
    "isCatOwner",
    true
  ),
  "findInObj"
);

// {first: 'Tim', last:"Garcia", isCatOwner: true}

// removeVowels() FUNCTION

function removeVowels(str) {
  const vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter(function (val) {
      return vowels.indexOf(val) === -1;
    })
    .join("");
}

console.log(removeVowels("Elie"), "'removeVowels()'"); // ('l')
console.log(removeVowels("TIM"), "'removeVowels()'"); // ('tm')
console.log(removeVowels("ZZZZZZ"), "'removeVowels()'"); // ('zzzzzz')

// doubleOddNumbers

function doubleOddNumbers(arr) {
  return arr
    .filter(function (val) {
      return val % 2 !== 0;
    })
    .map(function (val) {
      return val * 2;
    });
}
console.log(doubleOddNumbers([1, 2, 3, 4, 5]), "doubleOddNumbers"); // [2,6,10]

console.log(doubleOddNumbers([4, 4, 4, 4, 4]), "doubleOddNumbers"); // []
