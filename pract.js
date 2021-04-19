var amount = 150;
if (amount > 100) {
    let amount = 300;
    amount = amount * 2;
    console.log(amount);
} else {
    console.log("Amount not enough");
}
var result = " ";
var i = 0;
do {
    i += 1;
    result += i + " ";
}
while (i > 0 && i < 5);
console.log(result);