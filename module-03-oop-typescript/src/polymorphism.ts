class Employee {
  constructor(
    public name: string,
    protected _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be negative");
    }
    this._baseSalary = this._baseSalary - newSalary;
  }

  calculatePay(taxRate: number) {
    return this._baseSalary - this._baseSalary * taxRate;
  }

  describe(): string {
    return `${this.name} earn ${this._baseSalary}`;
  }
}

class Manager extends Employee {
  override calculatePay(taxRate: number) {
    return this._baseSalary * 5000 - taxRate;
  }
}

class Developer extends Employee {
  constructor(
    name: string,
    _baseSalary: number,
    public position: string,
  ) {
    super(name, _baseSalary);
  }
  // override korchi bojhar jonno onno class er method use korle ata babohar korbo override
  override calculatePay(taxRate: number) {
    return this._baseSalary * taxRate;
  }

  override describe(): string {
    return `${this.name} earn ${this._baseSalary} position ${this.position}`;
  }
}

const employee = new Employee("uddinKamal", 5000);

const manager = new Manager("donKamal", 30000);

const developer = new Developer("devKamal", 6000, "Backend");

console.log(employee.calculatePay(0.1));
console.log(manager.calculatePay(0.1));
console.log(developer.calculatePay(0.3));
console.log(developer.describe());

