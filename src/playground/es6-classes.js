
class Person {
    constructor (firstName='Udo', name, age=25) {
        this.firstName = firstName;
        this.name = name;
        this.age = age;
    }
    getDetails () {
        return `Yo, Im ${this.firstName} ${this.name}, i am ${this.age} years old`;
    }
}

const someOne = new Person('harti', 'hart', 39);

console.log(someOne.getDetails());

class Traveler extends Person {
    constructor(firstName, name, age, homeTown) {
        super(firstName, name, age);
        this.homeTown = homeTown;
    }
    getDetails() {
        let you = super.getDetails();
        console.log(this.homeTown)
        
        if (!!this.homeTown) {
            console.log(`, homebase is ${this.homeTown}`)
            you += `, homebase is ${this.homeTown}`;
        }
        return console.log(you);
    }
}

const me = new Traveler('Boris', 'BLockola', 39);
me.getDetails();