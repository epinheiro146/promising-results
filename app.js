// slowMath.add(6, 2)
// .then((sum) => {
//     console.log(sum);
//     return slowMath.multiply(sum, 2);
// })
// .then((product) => {
//     console.log(product);
//     return slowMath.divide(product, 4);
// })
// .then((quotient) => {
//     console.log(quotient);
//     return slowMath.subtract(quotient, 3);
// })
// .then((difference) => {
//     console.log(difference);
//     return slowMath.add(difference, 98);
// })
// .then((sum) => {
//     console.log(sum);
//     return slowMath.remainder(sum, 2);
// })
// .then((remainder) => {
//     console.log(remainder);
//     return slowMath.multiply(remainder, 50);
// })
// .then((product) => {
//     console.log(product);
//     return slowMath.remainder(product, 40);
// })
// .then((remainder) => {
//     console.log(remainder);
//     return slowMath.add(remainder, 32);
// })
// .then((sum) => {
//     console.log('The final result is ' + sum);
// })
// .catch((err) => {
//     console.log(err);
// })

async function doMath() {
    try {
        let sum = await slowMath.add(6, 2);
        console.log(sum);
        let product = await slowMath.multiply(sum, 2);
        console.log(product);
        let quotient = await slowMath.divide(product, 4);
        console.log(quotient);
        let difference = await slowMath.subtract(quotient, 3);
        console.log(difference);
        sum = await slowMath.add(difference, 98);
        console.log(sum);
        let remainder = await slowMath.remainder(sum, 2);
        console.log(remainder);
        product = await slowMath.multiply(remainder, 50);
        console.log(product);
        remainder = await slowMath.remainder(product, 40);
        console.log(remainder);
        sum = await slowMath.add(remainder, 32);
        console.log('The final result is ' + sum);
    } catch (err) {
        console.log(err);
    }
}

doMath();