//Ateeb Ahmed Assignment: Find Min and Max
function findmaxmin(numbers){
    let max = numbers[0];
    let min = numbers[0];
    for (let i = 1; i<numbers.length; i++) {
        if (numbers[i]> max) {
            max = numbers[i];
        } else if (numbers[i]< min) {
            min = numbers[i];
        }
    }
    return `Max: ${max}, Min: ${min}`;
}

let numbers = [2,3,5,34, 6, 13];
console.log(findmaxmin(numbers));