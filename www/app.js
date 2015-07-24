import Bacon from "baconjs"

//import Bacon from "baconjs"

var something = 'something';

class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h3>" + this.greeting + "</h3>";
    }
};

console.log('hello this is', something);
console.log('bacon -> ', Bacon);

var greeter = new Greeter("Hello, world!");

document.querySelector('#main').innerHTML = greeter.greet();
