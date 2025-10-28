const findTheOldest = function (people) {
  // Get current year
  const currentYear = new Date().getFullYear();

  // Make sure all object have all the necessary keys
  const peopleMapped = people.map(({ name, yearOfBirth, yearOfDeath }) => {
    if (!yearOfDeath) {
      yearOfDeath = currentYear;
    }
    return { name, yearOfBirth, yearOfDeath };
  });

  // Sort the array by years lived in ascending order
  return (
    peopleMapped
      .sort(
        (a, b) =>
          a.yearOfDeath - a.yearOfBirth - (b.yearOfDeath - b.yearOfBirth)
      )
      // Reduce the array to an object which is the person with greatest age
      .reduce((acc, curr) => {
        acc[Object.keys(curr)[0]] = curr.name;
        acc[Object.keys(curr)[1]] = curr.yearOfBirth;
        acc[Object.keys(curr)[2]] = curr.yearOfDeath;
        return acc;
      }, {})
  );
};

// Do not edit below this line
module.exports = findTheOldest;
