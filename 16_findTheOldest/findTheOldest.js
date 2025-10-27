const findTheOldest = function (people) {
  // Sort the array first then reduce
  return people.reduce((acc, curr) => {
    acc["name"] = curr.name;
    acc["yearOfBirth"] = curr.yearOfBirth;
    acc[Object.keys(curr)[2]] = curr.yearOfDeath;
    return acc;
  }, {});
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
