//complete this code
class Animal {
	constructor(species) {
	    this.animalSpecies = species;
  }

  get species(){
    return this.animalSpecies;
  }

  makeSound(){
    console.log(`The ${this.animalSpecies} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(species) {
    super(species);
  }

  bark() {
    console.log("woof");
  }
}

class Cat extends Animal {
  constructor(species) {
    super(species);
  }

  purr() {
    console.log("purr");
  }
}



// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
