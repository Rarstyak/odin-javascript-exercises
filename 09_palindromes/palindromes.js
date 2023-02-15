const palindromes = function (string) {
    //map to all lowercase and no punctuation or spaces
    let forward = string.toLowerCase().replace(/[^a-z]/g,"");
    let backward = forward.split("").reverse().join("");
    return forward === backward;
};

// Do not edit below this line
module.exports = palindromes;
