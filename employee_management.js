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


// Task 2: Create a Department Class
class Department {
    constructor(name, employees) { // Creating a department class that takes in a name and the employees in that department.
        this.name = name;
        this.employees = employees;
    }
    addEmployee(employee) { // A Method to .push an employee into the employees array.
        this.employees.push(employee)
    }
    getDepartmentSalary() { // To output the total salary of the department by using the .reduce method to sum up all the salaries. 
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
    } // Task 4: Handle Bonuses for Managers
    calculateTotalSalaryWithBonus() {
        if (employee.position === "Manager") { // Making sure the bonus only goes to Managers.
            bonus = employee.salary * 0.15;
        }
        return total + employee.salary + bonus;
    }
}

// Task 3: Create a Manager Class that Inherits from Employee
class Manager extends Employee {
    constructor(name, salary, position, department) {
        super(name, "Manager", salary, bonus); // adding bonus to new super constructor
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getDetails() {
        console.log(`Employee: ${this.name}, Salary: ${this.salary}, Position: ${this.position}, Department: ${this.department}, Bonus: ${this.bonus}`)
}
};

 // Task 5: Create and Manage Departments and Employees
 const sales = new Department("Sales") // Making new Department for sales.
 const kyle = new Employee("Kyle", 85000, "Salesmen", "Sales") // Adding a sales employee.
 sales.addEmployee(kyle)

 const humanResourses = new Department("Human Resources") // Making new department for HR.
 const nicolas = new Employee("Nicolas", 75000, "HR Rep", "Human Resources") // Adding an employee to HR.
 humanResourses.addEmployee(nicolas)

const giovanni = new Manager("Giovanni", 95000, "Sales Manager", "Sales") // Adding an employee to manager class.