// Prototype manual linking
function Foo(name) {
  this.name = name;
}

Foo.prototype.myName = function() {
  console.log(this.name);
};

function Bar(name, label) {
  Foo.call(this, name);
  this.label = label;
}

// References to Foo prototype
Bar.prototype = Object.create(Foo.prototype);

const bar = new Bar("Alan", "Im Alan!");

// We can access myName method due prototype lookup
bar.myName();
