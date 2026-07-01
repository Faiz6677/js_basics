// class Person {
//   constructor(fName) {
//     this.fName = fName;
//     console.log(`Person name = ${this.fName}`);
//     console.log("person class default Constructor !");
//   }

//   eat(fName) {
//     console.log(`${fName} Person is eating !`);
//   }
// }

// class Engineer extends Person {
//   constructor(nName) {
//     super(nName);
//     this.nName = nName;
//     console.log("Engineer class Default constructor !");
//   }

//   work(fName) {
//     this.fName = fName;
//     super.eat(this.fName);
//     console.log(` ${this.fName} Engineer is Working !`);
//   }
// }

// let engineer = new Engineer("Noor");
// engineer.work("saami");
// // console.log("----------------");
// // let person = new Person("Adnan");

// function speak(line) {
//   console.log(`The ${this.type} rabbit says ${line}`);
// }

// let whiteRabbit = { type: "white", speak };
// let hungryRabbit = { type: "hungry", speak };
// console.log(typeof hungryRabbit);

// speak.call(whiteRabbit, "hurry");
