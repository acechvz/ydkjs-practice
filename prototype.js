function SuperLogger(name) {
  this.name = name;
}

SuperLogger.prototype.scream = function() {
  console.log("SUPERR LOGGERR!!!");
};

function Logger(arr, name) {
  SuperLogger.call(this, name);
  this.arr = arr;
}

Logger.prototype = Object.create(SuperLogger.prototype);

Logger.constructor = Logger;

Logger.prototype.getUnifiedMessages = function() {
  console.log(this.arr.join(",").toUpperCase());
};

Logger.prototype.printLogMessages = function() {
  var self = this;
  for (var i = 0; i < self.arr.length; i++) {
    (function(j) {
      setTimeout(function() {
        console.log(self.arr[j]);
      }, 1000 * j);
    })(i);
  }
};

const logger = new Logger(["One", "Two", "Three"], "Alan Logger");

console.log(logger);

logger.scream();
logger.getUnifiedMessages();
logger.printLogMessages();
