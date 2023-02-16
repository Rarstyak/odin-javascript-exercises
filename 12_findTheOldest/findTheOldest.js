const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    let sortedPeople = people.sort(
        (a,b) => 
            (a.yearOfDeath === undefined ? currentYear : a.yearOfDeath) - a.yearOfBirth 
            < (b.yearOfDeath === undefined ? currentYear : b.yearOfDeath) - b.yearOfBirth 
            ? 1 : -1
    );
    return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
