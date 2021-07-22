// import React from 'react';
// import ReactDOM from 'react-dom';

// const element = <h1>Hello World</h1>;

// ReactDOM.render(element, document.getElementById('root'));

//Var is scoped to the function (let is prefered over var)
//let is scoped to the block({}) it's defined in (const is prefered over let)
//const variables can't be reassigned

// function sayHello(){
//     for (let i = 0; 1 > 5; i++){
//         console.log(i);
//     }
// }

// sayHello();





// const person = {
//     name: 'Mosh',
//     walk: function() {},
//     talk() {}
// };

// person.talk();
// person.name = '';

// const targetMember = 'name';
// person[targetMember.value] = 'John';




// const person = {
//     name: "Mosh",
//     walk() {
//         console.log(this);
//     }
// };

// person.walk();

// const walk = person.walk.bind(person);
// walk();


// Regular function
// const square = function(number){
//     return number * number;
// }

// Arrow function makes it so that there are no curly brackets or return keyword
// const square = () => number * number;
// console.log(square(5));



// const jobs = [
//     { id: 1, isActive: true },
//     { id: 2, isActive: true },
//     { id: 3, isActive: false },

// ];

// const activeJobs = jobs.filter(function(job) {return job.isActive; });
// const activeJobs = jobs.filter(job => job.isActive );



// Arrow functions don't rebind the this keyword
// const person = {
//     talk(){
//         setTimeout(() => {
//             console.log("this", this);
//         }, 1000)
//     }
// };

// person.talk();


//Array map
// const colors = ['red', 'green', 'blue'];
// const items = colors.map(color => `<li>${color}<li>`);
// console.log(items);


//object destructuring
// const address = {
//     street: '',
//     city: '',
//     country: '',
// };

// const street = address.street;
// const city = address.city;
// const country = address.country;
// //refactor 
// const {street: st } = address;
