
for (let Number = 1; Number <= 100; Number ++) {
  if (Number !== 50 && Number !== 75) {
    //console.log(Number);
    if (Number % 3 === 0 && Number % 5 === 0) {
    console.log("FizzBuzz");
    } else if (Number % 3 === 0){
    console.log("Fizz");
    } else if (Number % 5 === 0) {
    console.log("Buzz");
    } else{
      console.log(Number);
    }
  } 
  
}
