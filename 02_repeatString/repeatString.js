const repeatString = function (string, num) {
    let strings = '';
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            strings += string;
        }
    }
    else strings ='ERROR';

    return strings;
};

// Do not edit below this line
module.exports = repeatString;
