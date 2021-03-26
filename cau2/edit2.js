function isNarcissisticNumber(number) {
	this.number = number;
	let arr = [];
	let phandu;
	let phannguyen;
	for(let i = 1;;i++){
		phandu = number%10;
		phannguyen = parseInt(number/10);
		number = phannguyen;
		arr.push(phandu);
		if(phannguyen==0){
			break;
		}
	}
    let sum = 0;
    for(let i = 0; i<arr.length;i++){
	    sum += Math.pow(arr[i], arr.length);
    }
    if(sum == this.number){
	    return true;
    } else {
	return false;
	}
}
let arr1 = [];
for(let i=100;i<=10000;i++){
	if(isNarcissisticNumber(i) == true){
		arr1.push(i);
	}
}
document.write(`Số tự mãn từ 100 - 1000 là: ${arr1}`);