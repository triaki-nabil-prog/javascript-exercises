const findTheOldest = function(objArray) {
return objArray.reduce((oldest, currentPerson) => {
const currentPersonAge = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
return oldestAge >=currentPersonAge ? oldest : currentPerson ;
});

};


function getAge(death, birth){
if ( !death ) {
    death =new Date().getFullYear();
}
return death - birth;

}

// Do not edit below this line
module.exports = findTheOldest;
