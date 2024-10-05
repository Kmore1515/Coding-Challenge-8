// Task 1: Create an Employee Class
class employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    displayInfo() {
        console.log(`Employee: ${this.name}, Salary: ${this.salary}, Position: ${this.position}, Department: ${this.department} `)
    }
};
