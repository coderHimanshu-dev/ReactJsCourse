/* function printInfor<T>(x: T): T {
  return x;
}

const str = printInfor<string>("Hello Himanshu");
const num = printInfor<number>(34);
const bool = printInfor<boolean>(true);


console.log(str)
console.log(num)
console.log(bool) */

function userInfo<T>(x: T): T {
  return x;
}

const name1 = userInfo<string>("Himanshu");
const age1 = userInfo<number>(19);
const isStudent = userInfo<boolean>(true);

console.log(name1);
console.log(age1);

// generic classes

class Box<T> {
  private content: T;
  constructor(initialConten: T) {
    this.content = initialConten;
  }
  getContent(): T {
    return this.content;
  }

  setContent(newContent: T): void {
    this.content = newContent;
  }
}

const stringBox = new Box<string>("Hello typescript");
console.log(stringBox.getContent())
