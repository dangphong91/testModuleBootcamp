let arr = [];
function generateArry(size) {
    for(let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() *(90 - 10 + 1) + 10);
    }
    return arr;
}
function printArray(arr) {
    document.write(`Mảng :${arr.join("-")}`);
}
function isPrime(number) {
    let test = 1;
    for(let i = 2; i <= number/2; i++) {
        if(number%i == 0) {
            test = 0;
            break;
        }
    }
    if(test ==1) {
        return true;
    } else {
        return false;
    }
}
function printPrimes(arr) {
    let arr1 = [];
    for(i = 0; i < arr.length; i++) {
        if(isPrime(arr[i])) {
            arr1.push(arr[i]);
        }
    }
    document.write(`Số nguyên tố trong mảng:${arr1.join(",")}`);
    return (arr1);
}
let sum = 0;
function sumPrimes(arr) {
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
function main() {
    let size = Number(prompt("Nhập vào giá trị size:"));
    if(size > 0 && isPrime(size)) {
        let arr2 = generateArry(size);
        printArray(arr2);
        document.write("<br>");
        let arr3 = printPrimes(arr2);
        document.write("<br>");
        document.write(`Tổng các số nguyên tố trong mảng là:${sumPrimes(arr3)}`);
    }
}
main();