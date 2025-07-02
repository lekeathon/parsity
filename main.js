let myAge = 34; //this is my age as a human
let earlyYears = 2; //the first two years of a dog's life count as 10.5 human years each
earlyYears *= 10.5; //convert early years to human years
let laterYears = myAge - 2; //subtract the first two years from my age
laterYears *= 4; //the remaining years count as 4 human years each
console.log(earlyYears + laterYears); //add the two values together to get my age in dog years
let myAgeInDogYears = earlyYears + laterYears; //store the total in a variable
let myName = `Lekeathon wilson`.toLocaleLowerCase(); //convert my name to lowercase
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} in dog years.`); //print my name and age in dog years