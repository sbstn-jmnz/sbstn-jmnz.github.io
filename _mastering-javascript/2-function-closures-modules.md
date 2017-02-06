---
layout: page
title: Functions, Closures, and Modules
image_path: https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1000px-Javascript_badge.svg.png
permalink: /fn-closures-modules/
---

A function statement

```javascript
function add(a,b){
  return b+a;
}
```
Function expressions

```javascript
var add = function(a,b){
  return a+b;
}
```
```javascript
var factorial = function factorial(n) {
  if(n <= 1) return 1;
  return n * factorial(n -1);
};
console.log(factorial(3));
```
self-invoking function expressions

```javascript
(function() {
  console.log("Hello There");
})();
```
# Functions example

```javascript

var validateDateForAge = function(data) {
  person = data();
  console.log(person);
  if (person.age < 1 || person.age > 99){
    return true
  }else{
    return false;
  }
};

var errorHandlerForAge = function(error){
  console.log("Error with age");
};

function parseRequest(data, validateData, errorHandler){
  var error = validateData(data);
  if (!error){
    console.log("Ok");
  }else{
    errorHandler();
  }
};

var generateDataForDrummer = function(){
  return {
  name: "Neil Peart",
  age: Math.floor(Math.random()* (100 -1)) + 1
  };
} ;
var generateDataForBassPlayer = function(){
  return {
  name: "Felipe Gomez",
  age: Math.floor(Math.random()* (100 -1)) + 1
  };
} ;

parseRequest(generateDataForBassPlayer, validateDateForAge, errorHandlerForAge);
parseRequest(generateDataForDrummer, validateDateForAge, errorHandlerForAge);
```
# IIFE

```javascript
(function() {
  var a = 6;
  console.log(a);
  })();
```
 Douglas Crockfords IIFE

```javascript
(function() {
  var a = 6;
  console.log(a);
}());
```
With parameters

```javascript
(function(b) {
  var a = 2;
  console.log( a + b);
})(5);
```
# WTF AGAIN
variables and function declarations are moved up during compilation fase(hoisting). Assignment or other logic are left in place.

```javascript
a=1;
var a; // is this line hoisted to the top first?
console.log(a); // 1
```
function declaration hoisting

```javascript
foo();
function foo(){  //hoisted. This way can be used before defining it
  console.log(a); //undefined
  var a = 1; // hoisted to the top of the foo() scope
}
```
Hoisting is made by scopes. So variables and function declaration are hoisted te the top of their scope

```javascript
functionOne();
var functionOne = function(){
  console.log("FN1") // Error!
};
functionTwo();
function functionTwo(){
  console.log("functionTwo");
};
```
function declarations are hoisted first, then variable declarations

# Danger Zone **Never** do this!! Browsers behave differently
```javascript
if (true) {
  function say(){ return "true"}
}else {
  function say(){ return "false"}
}
say();
```
better apprach with function expresions

```javascript
var sayMoo;
if (true) {
  sayMoo = function(){return 'true'};
} else {
  sayMoo = function(){return 'false'};
};
sayMoo();
```

function declatations are allowed to appear only in the program or function body.
Blocks can only contain statemens and not function declarations. It is always advisible to not use function declarations in conditional blocks

# Arguments parameter
Hint! Never name a parameter arguments. This would overide the original one.

```javascript
var logSum = function(){
  var i, total = 0;
  for (i =0; i < arguments.length; i += 1) {
    total += arguments[i];
  };
  console.log(total);
};
logSum(1,2,3,4,5,6); // 21
```
Convert the arguments parameter to a real array

```javascript
  var args = Array.prototype.slice.call(arguments);
```

# Constructor preview

```javascript
var Person = function(name){
  this.name = name;
};
Person.prototype.greet = function(){
  return this.name;
};
var robert = new Person("Albert F. Collins")
console.log(robert.greet());
```

# Function Methods
As objects they have some methods, like `apply()` with two parameters, the first provides the context, and the other and array of values used as invocation arguments. `call()` is almost the same, but arguments are passed directlyin the arguments list.

# Anonymous functions in objects

```javascript
var momis = {
  say: function(){
    console.log('Hola Sebi');
  }
}
momis.say();
```

# Anonymous functions as a parameter to other function

```javascript
function eventHandler(event){
  event();
}
eventHandler(function(){
  console.log("Event fired!");
})
```

# Closures
Closure is the scope created when a function is declared. It allows the function to access and manipulate variables that are external to this function. In other words, they allow a function to access all the variables, and other functions, that are in scope wjen the function itself is declared.

```javascript
var outer = "Outer";
var copy;
function outerFn(){
  var inner = "Inner"
  function innerFn(){
    console.log(outer);
    console.log(inner);
  }
  copy = innerFn;
}
outerFn(); //Outer
copy(); // Inner
innerFn(); // innerFn is not defined
```

All variables in an outer scope are included in the scope, enven if they are declared after the function.

```javascript
var outer = 'outer';
var copy;
function outerFn(){
var inner = "inner";
  function innerFn(params){
    console.log(outer);
    console.log(inner);
    console.log(params);
    console.log(magic);
  };
  copy = innerFn;
};
console.log(magic); // magic is not defined
var magic = "Magic";
outerFn();
copy('copy');
```
# Common closure patterns

```javascript
function delay(message){
  setTimeout(function timerFn(){
    console.log(message); // The scope for timerFn can access the message variable
  },1000);
}
delay('Hello there')
```

# To allow encapsulation

```javascript
function PrivateTest(){
var results = 0;
  this.getResults = function(){ return results; };
  this.setResults = function(){ results++; }
}
var private = new PrivateTest();
private.setResults();
console.log(private.results); //undefined
console.log(private.getResults());// 1
```

# Loops and closures
Wrong implementation

```javascript
for(var i=1; i<=5; i++){
  setTimeout( function delay(){
    console.log(i);
  },i*100);
}
```
Right way
The use of an iife inside each iteration creates a new scope for each iteration, and updates de local copy with the correct value.

```javascript
for (var i=1; i <= 5; i++) {
  (function(j){
    setTimeout( function delay(){
      console.log(j);
    }, j*100);
  })(i);
}
```

# Modules

```javascript
var moduleName = function(){
  // private state
  // private functions
  return {
    // public state
    // return public variables
  }
}
```

```javascript
var   superModule = (function(){
  var secret = "supersecretkey";
  var password = 'duke';

    function getSecret() {
      console.log( secret);
    };

    function getPassword() {
      console.log(password);
    }

  return {
    getSecret: getSecret,
    getPassword: getPassword
  };
}());
superModule.getSecret();
superModule.getPassword();
```
