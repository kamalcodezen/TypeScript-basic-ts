//* Encapsulation : protected a state and change it throw methods.

//* Access modifier
//? public     : can be accessed from anywhere
//? private    : can be accessed only within the class
//? protected  : can be accessed within the class and its subclasses inherited classes
//? readonly   : can be accessed but not modified

class Employee {
  constructor(
    public readonly name: string,
    private _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  get salaryWithBonus(): number {
    return this._baseSalary * 10;
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be negative");
    }
    this._baseSalary = newSalary;
  }
}

const employee = new Employee("kamal", 200);

console.log(employee.name);

employee.baseSalary = 5555;

console.log(employee.baseSalary);

console.log(employee.salaryWithBonus);
