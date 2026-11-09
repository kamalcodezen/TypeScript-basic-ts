class Employee {
  constructor(
    public readonly name: string,
    protected _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  set baseSalary(newSalary: number) {
    this._baseSalary = newSalary;
  }

  describe(): string {
    return `${this.name} earn ${this._baseSalary}`;
  }
}

// inheritance extends class
class Manager extends Employee {
  constructor(
    name: string,
    _baseSalary: number,
    public teamMemberCount: number,
  ) {
    super(name, _baseSalary);
  }

  describeManger(): string {
    return `${this.name} earn ${this._baseSalary} total team member ${this.teamMemberCount}`;
  }
}

// const manager = new Manager("kamalUddin", 9999, 10);

// console.log(manager.describeManger());

// const employee = new Employee("uddin", 3000);

// console.log(employee.describe());
