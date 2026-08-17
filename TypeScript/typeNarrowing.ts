type Mytype = string | number;

function example(x: Mytype): void {
  if (typeof x === "string") {
    console.log(x.toUpperCase());
  } else if (typeof x === "number") {
    console.log("hello number ji");
  }
}

example("himanshu");
