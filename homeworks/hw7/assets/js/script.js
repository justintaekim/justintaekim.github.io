function averageThreeNumbers(a, b, c) {
    let sum = a+b+c;
    let average = sum/3;
    return average;
}

function createSentence(num, noun) {
    let finalStr = `On average, a Berkeley student has ${num} ${noun}s.`
    return finalStr
}

function getRandomNum(max) {
    let rando = Math.random() * max
    return rando
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

let avg = averageThreeNumbers(x, y, z);

let sentence = createSentence(avg, 'Koala');

console.log(sentence);