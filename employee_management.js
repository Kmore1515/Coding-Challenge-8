// Task 1: Create an Employee Class
class Employee {
    constructor(name, salary, position, department) { // Creating an employee class that takes in name, salary, position, and department.
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getDetails() {
        console.log(`Employee: ${this.name}, Salary: ${this.salary}, Position: ${this.position}, Department: ${this.department} `) // To output the employees details.

}};


//Task 2: Create a Department Class
class department {
    constructor(name, employees) { // Creating a department class that takes in a name and the employees in that department.
        this.name = name;
        this.employees = employees;
    }
    addEmployee(employee) { // A Method to .push an employee into the employees array.
        this.employees.push(employee)
    }
    getDepartmentSalary() { // To output the total salary of the department by using the .reduce method to sum up all the salaries. 
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }
    
};

