var Calculator = function() {
  this._nums = [];
  this._left;
  this._right;
};

Calculator.prototype.value = function() {
  return this._nums[this._nums.length - 1];
};

Calculator.prototype.push = function(num) {
  this._nums.push(num);
};

Calculator.prototype.popTwoNumbersAndSaveToTemp = function() {
  if (this._nums.length < 2) {
    throw "calculator is empty";
  }

  this._right = this._nums.pop();
  this._left = this._nums.pop();
};

Calculator.prototype.plus = function() {
  this.popTwoNumbersAndSaveToTemp();
  this._nums.push(this._left + this._right);
};

Calculator.prototype.minus = function() {
  this.popTwoNumbersAndSaveToTemp();
  this._nums.push(this._left - this._right);
};

Calculator.prototype.divide = function() {
  this.popTwoNumbersAndSaveToTemp();
  this._nums.push(this._left / this._right);
};

Calculator.prototype.times = function() {
  this.popTwoNumbersAndSaveToTemp();
  this._nums.push(this._left * this._right);
};

