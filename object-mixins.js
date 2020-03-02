// Explicit mixing
var Vehicle = {
  engines: 1,
  drive: function() {
    console.log("steering and moving!");
  },
  ignition: function() {
    console.log("turning on!");
  }
};

function mixin(srcObj, targetObj) {
  for (const prop in srcObj) {
    if (!targetObj.hasOwnProperty(prop)) {
      targetObj[prop] = srcObj[prop];
    }
  }

  return targetObj;
}

var Car = mixin(Vehicle, {
  wheels: 4,
  drive: function() {
    Vehicle.ignition();
    console.log("driving my car");
  }
});

Car.drive();

console.log(Car);

// Implicit mixing
var Something = {
  cool: function() {
    this.greetings = "Hello World";
    this.count = 1;
  }
};

Something.cool();
console.log(Something.greetings);
console.log(Something.count);

var Another = {
  cool: function() {
    Something.cool.call(this);
  }
};

Another.cool();
console.log(Another.greetings);

Something.count += 1;

console.log(Something.count);
console.log(Another.count);
