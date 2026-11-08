class Employee {
  name: string;
  basedSalary: number;

  constructor(name: string, basedSalary: number) {
    this.name = name;
    this.basedSalary = basedSalary;
  }
}
const employee1 = new Employee("John Doe", 50000);
const employee2 = new Employee("Jane Smith", 60000);

// console.log(employee1 instanceof Employee);
// console.log(employee2 instanceof Employee);
