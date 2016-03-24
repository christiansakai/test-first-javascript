var Calculator = function() {
  this._value = 0;
};

Calculator.prototype.value = function() {
  return this._value;
};

Calculator.prototype.add = function(num) {
  this._value += num;
};

Calculator.prototype.subtract = function(num) {
  this._value -= num;
};



