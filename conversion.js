let result;

// string to number
result = Number('324');
console.log(result);

// boolean to number
result = Number(true);
console.log(result);

// empty string and null  values from 0
result = Number(null);
console.log(result)

result = Number('');
console.log(result);

// if string is invalid number the result will be NaN
result = Number('hello');
console.log(result)

result = Number(undefined);
console.log(result)

// parseInt, parseFloat
result = parseInt('20.01');
console.log(result)

result = parseFloat('20.01')
console.log(result)

result = + '20.01';
console.log(result)


///// convert to string explicitly
result = String(324);
console.log(result)

result = String(2+4);
console.log(result)

result = String(null);
console.log(result)

result = String(undefined);
console.log(result)

result = String(NaN);
console.log(result)

// convert to boolean explicitly

result = Boolean('');
console.log(result)

result = Boolean(0);
console.log(result)

result = Boolean(undefined);
console.log(result)

result = Boolean(324);
console.log(result); // true

result = Boolean('hello');
console.log(result); // true

result = Boolean(' ');
console.log(result); // true