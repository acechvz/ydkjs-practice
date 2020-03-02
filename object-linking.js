const obj1 = {
  a: 5
};

const obj2 = {
  c: 2,
  getA: function() {
    console.log(this.a);
  }
};

Object.defineProperty(obj2, "b", {
  value: 10,
  writable: false
});

Object.setPrototypeOf(obj1, obj2);

// Implicit shadowing
obj1.c++;

console.log(obj1);
console.log(obj2);
