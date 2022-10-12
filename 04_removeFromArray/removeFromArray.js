const removeFromArray = function (array, ...args) {

    for (let i = 0; i <= args.length - 1; i++) {

        array = array.filter(element => element !== args[i]);

    }

    return array;
};



// Do not edit below this line
module.exports = removeFromArray;
