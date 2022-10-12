const reverseString = function(text) {
    let reversText="" ;
    let textArray=text.split("");
    
    let leng =text.length-1;

   for(let i = leng; i>=0; i--){
   reversText = reversText + textArray[i];
   }
   return reversText;
};

// Do not edit below this line
module.exports = reverseString;



// let textArray = text.split("");
//  let reverseTextArray = textArray.reverse();
//  let reverseText = reverseTextArray.join('');

