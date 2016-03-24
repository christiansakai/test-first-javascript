var repeat = function(word, times) {
  words = '';

  for (i = 0; i < times; i++) {
    words += word;
  }

  return words;
};

var join = function(arr, delimiter) {
  words = '';

  for (i = 0; i < arr.length; i++) { 
    if (delimiter && 
        i !== arr.length - 1) {
      words += arr[i] + delimiter;
    } else {
      words += arr[i];
    }
  }

  return words;
};

var sum = function(arr) {
  total = 0;

  for (i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
};

var paramify = function(hash) {
  var tempArr = [];

  for (var key in hash) {
    if (hash.hasOwnProperty(key)) {
      tempArr.push(key + '=' + hash[key]);
    }
  }

  tempArr.sort();

  return tempArr.join('&');
};

var factorial = function(num) {
  total = 1;

  while (num > 1) {
    total *= num--;
  }

  return total;
};

var concat_string = function() {
  return Array.prototype.join.call(arguments, '');
};
