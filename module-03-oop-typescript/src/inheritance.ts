class Employee {
  constructor(
    public readonly name: string,
    private _baseSalary: number,
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

const employee = new Employee("uddin", 3000);

console.log(employee.describe());
