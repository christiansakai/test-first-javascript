var countWords = function(sentence) {
  return sentence.split(' ').length;
};

var makeAdder = function(adderNum) {
  return function(numToBeAdded) {
    return adderNum + numToBeAdded;
  };
};

var forEach = function(arr, functionToBeCalled) {
  for (var i = 0; i < arr.length; i++) {
    functionToBeCalled(arr[i]);
  }
};

var map = function(arr, functionToBeCalled) {
  var resultArr = [];

  for (var i = 0; i < arr.length; i++) {
    resultArr.push(functionToBeCalled(arr[i]));
  }

  return resultArr;
};

var filter = function(arr, functionToBeCalled) {
  var resultArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (functionToBeCalled(arr[i])) {
      resultArr.push(arr[i]);
    }
  }

  return resultArr;
};

var contains = function(collection, value) {
  for (var key in collection) {
    if (collection[key] === value) {
      return true;
    }
  }

  return false;
};

var reduce = function(arr, startingPoint, functionToBeCalled) {
  var total = startingPoint;

  for (var i = 0; i < arr.length; i++) {
    total = functionToBeCalled(total, arr[i]);
  }

  return total;
};

var countWordsInReduce = function(prevValue, nextValue) {
  return prevValue + nextValue.split(' ').length;
};

var sum = function(arr) {
  return reduce(arr, 0, function(prevValue, nextValue) {
    return prevValue + nextValue;
  });
};

var every = function(arr, functionToBeCalled) {
  var trueForEverySingleItem = true;

  for (var i = 0; i < arr.length; i++) {
    if (!functionToBeCalled(arr[i])) {
      trueForEverySingleItem = false;
    }
  }

  return trueForEverySingleItem;
};

var any = function(arr, functionToBeCalled) {
  if (!functionToBeCalled) {
    functionToBeCalled = function(element) {
      return element;
    };
  }

  for (var i = 0; i < arr.length; i++) {
    if (functionToBeCalled(arr[i])) {
      return true;
    }
  }

  return false;
};

var once = function(functionToBeDecorated) {
  var timesCalled = 0;
  
  return function() {
    if (timesCalled === 0) {
      functionToBeDecorated.apply(this, arguments);
      timesCalled++;
    }
  };
};
