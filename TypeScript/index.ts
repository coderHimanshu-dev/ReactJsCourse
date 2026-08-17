/* type Person = {
    name : string;
};

const person : Person = {
    name : "Himanshu",
};

console.log(person.name)


 */

// default params values
const Hello = (name: string = "Buddy") => {
  return `Hello, ${name}`;
};

console.log(Hello("Himanshu"));

// return annotation

/* function mul(num: number): number {
  return num * num;
}

const mul1 = (num: number): number => {
  return num * num;
};

console.log(mul(3));
 */

// void in typescript
/* function printMessage(mgs: string): void {
  console.log(`Hello mr. ${mgs}`);
}

console.log(printMessage("Himanshu")); */




// never keyword in typescript

