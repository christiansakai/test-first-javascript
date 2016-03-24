var f2c = function(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
};

var c2f = function(celcius) {
  return (celcius * (9 / 5)) + 32;
};

var Temperature = function(fahrenheit) {
  var f = fahrenheit;

  this.setFahrenheit = function(fahrenheit) {
    f = fahrenheit;
  };

  this.fahrenheit = function() {
    return f;
  };

  this.celcius = function() {
    return f2c(f);
  };

  this.setCelcius = function(celcius) {
    f = c2f(celcius);
  };
};

