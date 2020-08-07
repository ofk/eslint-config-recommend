var add = (a, b) => a + b;

var sum = (values) => {
  var total = 0;
  for (var i = 0; i < values.length; ++i) {
    total = add(total, values[i]);
  }
  return total;
};

var average = (values) => sum(values) / values.length;

var squaredDifference = (values) => {
  var avg = average(values);
  return values.map((value) => Math.pow(value - avg, 2));
};

var variance = (values) => sum(squaredDifference(values));
