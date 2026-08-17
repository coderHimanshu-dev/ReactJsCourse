//original interface
interface Car {
  name: string;
  releaseDate: number;
  start() : void;
}

//extended interface

interface Car {
  model: string;
  price: number;
  stop() : void;
}

// Merged Interface
const carModel: Car = {
    start() {
        console.log("Starting..")
    },
  name: "Thar",
  releaseDate: 2022,
  model: "SUV",
  price: 150000,
  stop(){
    console.log("stopping car");
  }
};


console.log(carModel.start())