var Mammal = function(name) {
  this.name = name;
  this.offspring = [];
};

Mammal.prototype.sayHello = function() {
  return "My name is " + this.name + ", " +
         "I'm a Mammal";
};

Mammal.prototype.haveBaby = function() {
  var baby = new Mammal('Baby ' + this.name);

  this.offspring.push(baby);

  return baby;
};

var Cat = function(name, color) {
  this.name = name;
  this.color = color;
};

// Cat inherits Mammal prototype
Cat.prototype = new Mammal();

// Reassining back the constructor to Cat
// otherwise it will have Mammal as constructor
Cat.prototype.constructor = Cat;

// Overriding Mammal's original haveBaby method
Cat.prototype.haveBaby = function(color) {
  // Using what Mammal already has
  var kitten = Mammal.prototype.haveBaby.call(this);
  kitten.color = color;

  return kitten;
};





