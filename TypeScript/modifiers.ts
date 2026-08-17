class Person {
  private name: string;
  public  age: number;
  protected email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  getName() {
    return `Hello ${this.name}`;
  }
}

class Student extends Person {
  constructor(name: string, age: number, email: string) {
    super(name, age, email);
  }

  getEmail() {
    return this.email;
  }
}

const p1 = new Person("Himanshu", 19 , "himansnuvarma31@gamail.com");
console.log(p1.getName());

const student = new Student("Raj", 18, "raj@example.com");
console.log(student.getEmail());
