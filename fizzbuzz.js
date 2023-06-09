// in a range of 1-100
// usign "for loop" to loop through the given range

for (let i = 1; i < 101; i++) {
  //create an empty string we can append to 
  let result = "";
  // if number is divisible by 3, print "Fizz"
  if (i % 3 == 0) {
    result += "Fizz";
  }
  // if number is divisible by 5, print "Buzz"
  if (i % 5 == 0) {
    result += "Buzz";
  }
  // if number is divisible by 3 & 5, print "FIzzBuzz"
  // Else Print number
  if ((result = "")) {
    result = i;
  }
  // it will append both fizz and buzz to the empty string if the condition is fullfilled by the number in i
  console.log(result);
}
