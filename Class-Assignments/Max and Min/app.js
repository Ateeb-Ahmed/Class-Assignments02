function findmaxmin(numbers) {
    var max = numbers[0];
    var min = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
        else if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return "Max: ".concat(max, ", Min: ").concat(min);
}
var numbers = [2, 3, 5, 34, 6, 13];
console.log(findmaxmin(numbers));
