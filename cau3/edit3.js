class Employe {
    constructor(name, age, address, salary) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.salary = salary;
    }
    inputWokingHours(tolalWorkingHours) {
        this.tolalWorkingHours = tolalWorkingHours;
    }
    printInfo() {
        document.write(`Name: ${this.name}<br>Age: ${this.age}<br>Address:${this.address}<br>Salary:${this.salary}<br>`);
    }
    caculatorBonus() {
        let bonus = 0;
        if(this.tolalWorkingHours>=200) {
            bonus = this.salary* 0.2;
        } else if(this.tolalWorkingHours>=100) {
            bonus = this.salary* 0.1;
        } else {
            bonus = 0;
        }
        document.write(`Bonus:${bonus}<br>`);
    }
}
let aKhoa = new Employe("Anh Khoa", "20", "Huế", 6000000);
aKhoa.inputWokingHours(300);
aKhoa.printInfo();
aKhoa.caculatorBonus();
let aHieu = new Employe("Anh Hiếu", "20", "Huế", 6000000);
aHieu.inputWokingHours(190);
aHieu.printInfo();
aHieu.caculatorBonus();
let aDanh = new Employe("Anh Danh", "20", "Huế", 6000000);
aDanh.inputWokingHours(90);
aDanh.printInfo();
aDanh.caculatorBonus();