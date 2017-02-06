---
layout: page
title: Javascript Overview
image_path: https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1000px-Javascript_badge.svg.png
---

# Comments
```javascript
// a one line comment

/*
  this is a longer,
  multi-line comment
*/

//* You can't /* nest comments */ SyntaxError */
```

# Variables

Must start with a letter, undersocer(_), or dollar sign($)
```javascript
var a; //declares a variable but its undefined
var b = 0;
console.log(b); //0
console.log(a); //undefined
console.log(a+b); //NaN
```

# Constants

`const` keyword same rules as variables, and cannot change value thriugh assigment or be redeclared, and has to be initialized to a value
```javascript
const gravity = 9.8
gravity // 9.8
typeof gravity // "number"
toString.call(gravity) //"[object Number]"
gravity = 9 // Uncaught TypeError: Assignment to constant variable.(…)
```

# Types

- Number
- String
- Bolean
- Symbol (ES6)
- Object:
  - Function
  - Array
  - Date
  - RegExp
- Null
- Undefined

# Numbers

Floating point arithmetic should be handled with care. Money values should be represented as cents
```javascript
var aNumber = 123
var aFloat = 123.0
0.1 + 0.3 // 0.4
0.1 + 0.2 //0.30000000000000004
(0.1 + 0.2) === 0.3 // false
Number.MAX_VALUE // 1.7976931348623157e+308
Number.MIN_VALUE // 5e-324
console.log(2*Number.MAX_VALUE)// Infinity
console.log(Number.MIN_VALUE)// Didn't worked
parseInt("30",10); //30
parseInt("010",10); //10
parseInt("010",8); //octal base 8
parseInt("010",2); //binary 2
+ "4" // 4
```
Handling the `NaN` case

```javascript
var underterminedValue = "drums";
if (isNaN(parseInt(underterminedValue,2)))
  {
    console.log("handle not a number case");
  }
else
  {
    console.log("handle number case");
  }
//  handle not a number case
```

# Strings

```javascript
console.log("Yo soy un hombre pobre, pero con dinero");
console.log('Por amor o que?');
console.log('Lineas \n separadas');
```
Wrapper objects

```javascript
var s =  new String('dummy');
console.log(s); // {0: "d", 1: "u", 2: "m", 3: "m", 4: "y", length: 5, [[PrimitiveValue]]: "dummy"
console.log(typeof(s)); // object
var nonObject = "1" + "2"; // undefined
console.log(nonObject); // 12
console.log(typeof(nonObject)); //string
```
Helpers

```javascript
console.log("Hello.length"); // 5
console.log('Hello.charAt(1)'); // e
console.log('Hello'.indexOf('H')); // 0
console.log('Hello'.indexOf('J')); // -1
console.log("Hello".endsWith('o')); // true
console.log("Hello".includes('x')); // false

var splitString = 'Hello World'.split(" ")
console.log(splitString); //["Hello", "World"]

var splitString = 'Hello World'.split("")
console.log(splitString); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

console.log('Hello'.toUpperCase());
console.log('Hello'.toLowerCase());
console.log('Hello   '.trim()); // Hello
```

String Interpolation

```javascript
var a = 1, b = 2;
console.log((`Sum of values: ${a + b}`)); //Sum of values: 3
```

# Undefined

```javascript
var x, y = null
console.log(y); // null (deliberate non-value)
console.log(x); // undefined (not assigned)
```

# Booleans
`false`, `0`, `""`, 'NaN', 'null' and  `undefined` are **represented** as false

```javascript
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));

console.log(false == false); // true
console.log(false == 0); // true
console.log(false == NaN); // false
console.log(false == null); // false
console.log(false == undefined); // false
```

```javascript
var oBooleanFalse = new Boolean(false);
console.log(oBooleanFalse); //Boolean {[[PrimitiveValue]]: false}
console.log(typeof oBooleanFalse); // object
if(oBooleanFalse){
console.log("I am seriously truthy, don't believe me"); // is excecuted!
}
```

Use `valueOf()` to get the value of a Boolean object

```javascript
var oBooleanFalse = new Boolean(false);
if(oBooleanFalse.valueOf()){
  console.log('Test True'); // dont reached
}else{
  console.log('Test False');
}

// Test False
```

# intanceof operator

This operator solves the problen with the `typeof()` operator, which return object no mater what type of object is used.

```javascript
var aStringObj = new String('String');
console.log(typeof aStringObj); // object
console.log(aStringObj instanceof String); // true
```

```javascript
 var aLiteralString = "Test literal";
 console.log(aLiteralString instanceof String); // false
 console.log(typeof aLiteralString); // string
```

Primite values don't have constructors, so when a method is called on them, they are wrapped on an object first, then called the method.

# Date objects

Javascript don have a Date type. Dates are instances of the Date Object

```javascript
 var dateObject = Date();
 console.log(dateObject); // Fri Feb 03 2017 12:36:47 GMT-0300 (CLST)
```

```javascript
var christmasFail = new Date(2015,12,25,0,00,0);
console.log(christmasFail); //Not December, 0 is january, also 12

var christmas = new Date(2015,11,25);
console.log(christmas); //Fri Dec 25 2015 00:00:00 GMT-0300 (CLST)

var christmas = new Date(2015,1,25);
console.log(christmas); //Wed Feb 25 2015 00:00:00 GMT-0300 (CLST)

var testDate = new Date(2015,1,31); // Takes the next month valid date
console.log(testDate); //Tue Mar 03 2015 00:00:00 GMT-0300 (CLST)

```

...also works from literal strings...

```javascript
 var twoThousandSeventeen = new Date("December 01, 2017 00:00:00");
 console.log(twoThousandSeventeen); //Fri Dec 01 2017 00:00:00 GMT-0300 (CLST)
```

# Date methods

```javascript
var today = new Date();
console.log(today.getDate()); // 3
console.log(today.getMonth()); // 1
console.log(today.getFullYear());// 2017
console.log(today.getHours());// 13
console.log(today.getMinutes()); // 4
console.log(today.getSeconds()); // 18
console.log(today.getTime()); //1486137858583
console.log(today.getTimezoneOffset()); // 180
```

```javascript
var start = Date.now();
for (var i = 0; i < 1000000; i++);
var end = Date.now();
console.log(end - start); // 4
```

Recomended libraries : **Moment.js**, **Timezone.js**, **date.js**,

# The + operator

```javascript
var a = "33"
console.log(typeof(a)); // string
a=+a;
console.log(a); // 33
console.log(typeof(a)); //number
```

```javascript
var a = "drums"
a=+a
console.log(a); //NaN
console.log(typeof(a));// number
```

```javascript
var zero = '';
zero=+zero
console.log(zero); // 0
console.log(typeof zero); // number
```

# The ++ and --

**WARNING** see with caution

```javascript
var a=0;
var b=a++
console.log(a); // 1
console.log(b); // 0
```

**Hint** The order matters

```javascript
var a=0;
var b=++a
console.log(a); // 1
console.log(b); // 1
```
# Chained assign

```javascript
var a,b,c;
a=b=c=1;
console.log(a); //1
console.log(b); //1
console.log(c); //1
```

```javascript
(function()
{
    'use strict';
    var a = b = 0;
    console.log(a);
    console.log(b);

}());
// VM2113:4 Uncaught ReferenceError: b is not defined(…)
```

# Boolean operators

`AND(&)`, `OR(||)`, and `NOT(!)`

```javascript
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log('Foo' && 'Bar'); // Bar
console.log('Foo' && false); // false
console.log(false && 'Bar'); // false
console.log(false && (1==2)); //false
```

`OR(||)`

```javascript
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log("Foo" || "Bar"); // Foo
console.log(false || "Bar"); // Bar
console.log("Foo" || false); // Foo
console.log(false || (1==2)); // false
```

```javascript
var a = 0;
console.log(a && "Foo"); // 0 => returns the first `truthy` value
```

```javascript
console.log(0 || "Foo"); // Foo
console.log("Foo" || "Bar"); // Foo
console.log(0 || false); //false
console.log(0 || undefined); //undefined
console.log(0 || NaN); //NaN
```

# Default values

```javascript
function greeting(name){
  name = name || 'Juan';
  console.log("Hola " + name);
}
greeting('Cecilio');
greeting();
```

```javascript
var s = new String("string")
console.log(!s); //false
var z = 0;
console.log(!z); //true
var n = 3;
console.log(!n); //false

var y = null;
var x = NaN;
var w;
console.log(!y); //true
console.log(!x); //true
console.log(!w); //true
```

# Ternay operators

```javascript
var age = 26;
console.log((age > 21) ? "true" : "no"); // true
```

```javascript
var b = true
if((a = b)){
  //is this is really something we want?
  console.log(a);
}
```

```javascript
var b = true;
var a;
if((a == b)){
  //or this?
  console.log(a);
}
```

```javascript
function sayMonth(month){
  switch(month){
    case 1: console.log("January");
      break;
    case 2: console.log("Feb");
      break;
    default:
      console.log("Two month only");
  }
}
sayMonth(2);// Feb
sayMonth(3);// Two month only
```
Watch out!! This one is going to fall through
```javascript
 function debug(level, msg){
   switch(level){
     case "info": //intentional fall-through
     case "warn":
     case "debug": console.log(level+ ": " + msg);
      break;
    case "error": console.log(msg)
   }
 }

 debug("info","Info Message"); // info: Info Message
 debug("debug","Debug Message");// debug: Debug Message
 debug("error","Fatal Exception");// Fatal Exception
```

# `while` and `do-while`
```javascript
var i = 0;
while(i < 10){ i=i+1; console.log(i); }
```
Example of excecuted, then evaluated
```javascript
var i = 0;
do { i=i+1; console.log(i); } while(i < 10);
```

# For loops
```javascript
for (var i = 0; i<5; i++){ console.log("Hello")} // Hello five times
```

```javascript
var i = 0;
for ( ;i<5; i++){console.log("Hi")} // Hi five times
```
```javascript
for(var j = 0;;j++){
  if(j>5){
    break;
  } else {
    console.log('Hi');
  }
}
// Hi six times
```

```javascript
for( var k=0; k<5;){ console.log('Hi'); k++; } // Hi four times
```

No body loop
```javascript
var arr = [10,20,30];
for(i=0; i < arr.length; arr[i++] = i*100);
console.log(arr); // [100, 200, 300]
```

# Equality

Use `===`, and not the weak comparation operator `==`. The weak operator tries to coerce the type before comparison, which can lead to unexpected outcomes. Also, implicit type coercion is costly in terms of performace. In general, stay away from weak equality.

# Javascript Coercion
Explicit Coercion or Casting

```javascript
var eigthySeven = 87
console.log(eigth.toString()[1]); // 7
```
Types review

```javascript
typeof 1 === "number"; // true
typeof "1" === "string"; // true
typeof { age: 33 } === "object"; // true
typeof Symbol() === "symbol"; // true
typeof undefined === "undefined"; // true
typeof true === "boolean"; // true
```

Explicit Coercion

```javascript
var t = 1;
var v = String(t);
console.log(typeof v);
```
Implicit Coercion

```javascript
var t = 1;
var u= ""+t;
console.log(typeof t); // number
console.log(typeof u); // string
var x = null;
console.log(''+null); // nul
console.log(typeof(''+null)); //string
```
JavaScript relies on `toString()` , `toNumber()` , and `toBoolean()` methods to do this internally.
All primitives have a natural string form representation

Javascript wraps these primitive objects in they wrappers by default, making possible to directl access the wrapper's methods and properties as if they were of the primitives.

# WTF!

```javascript
typeof null === "object" //true
```

checking 100% null

```javascript
var x = null;
if (!x && typeof x === "object"){ console.log("100% null") } // 100% null
var y = false;
if (!y && typeof y === "object"){ console.log("100% null") } // don't excecuted
```

```javascript
f = function test(){
  return 2;
}
console.log(typeof f === "function"); // true
```

Values have types, variables don't. Variables can hold any value at any time

# `eval()` not recomended

```javascript
console.log(typeof eval(new String("1+1"))); // object
console.log(eval(new String('1+1'))); // String {0: "1", 1: "+", 2: "1", length: 3, [[PrimitiveValue]]: "1+1"}
console.log(eval("1+1")); // 2
console.log(typeof eval('1+1')); // number
var exp = new String("1+1");
console.log(eval(exp.toString())); // 2
```
