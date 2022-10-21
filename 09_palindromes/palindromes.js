const palindromes = function (string) {

const Filtered= string.toLowerCase().replace(/[^a-z]/g,'').split("");
    return Filtered.join("") === Filtered.reverse().join("");

};

// Do not edit below this line
module.exports = palindromes;
