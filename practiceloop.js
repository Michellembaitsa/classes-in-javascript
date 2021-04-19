function outer() {
    var a = 1;


    function inner() {
        var b = 2;
        console.log(a + b);
    }
    return inner();
}
outer();
var age = 18;
if (age > 6) {
    console.log("you are a toddler ");
    let newAge = age * 10;
    console.log(newAge); //conditional statements
}
console.log(newAge);