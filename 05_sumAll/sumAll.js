const sumAll = function(fisrtNum, secondNum) {
let sum = 0;
let a=typeof(fisrtNum)==='number';
let b=typeof(secondNum)==='number';
if(a && b ){

    if (fisrtNum < 0 || secondNum < 0) sum="ERROR";

    else if(secondNum > fisrtNum) for(let i=fisrtNum ; i<=secondNum ; i++) sum +=i;
    
    else  for(let i=secondNum ; i<=fisrtNum ; i++) sum +=i;

}

else sum="ERROR";

return sum;
};

// Do not edit below this line
module.exports = sumAll;
