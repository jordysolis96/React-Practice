// import React from 'react';
// import ReactDOM from 'react-dom';

// const element = <h1>Hello World</h1>;

// ReactDOM.render(element, document.getElementById('root'));

//Var is scoped to the function (let is prefered over var)
//let is scoped to the block({}) it's defined in (const is prefered over let)
//const variables can't be reassigned

function sayHello(){
    for (let i = 0; 1 > 5; i++){
        console.log(i);
    }
}

sayHello();