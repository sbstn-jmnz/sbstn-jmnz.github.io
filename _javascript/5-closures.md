---
layout: page
title: Closures
image_path: https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1000px-Javascript_badge.svg.png
permalink: /closures/
---

A very basic closure. The function `testClosure` is called from the global scope and reach logic and variables from its scope. A function's local variable is not available once the function's scope is closed!

```javascript
function testClosure(){
  var x = 4; // local scope variable
  return x;
}
testClosure(); // 4
console.log(x); // Uncaught ReferenceError: x is not defined(…)
```

A closure wraps up the environment, binding necessary variables from other scopes.

```javascript
function testClosure() {
  var x = 4;
  function closeX() {
    return x;
  };
  return closeX;
};

var anotherVar = testClosure();
anotherVar(); // 4 we are reaching the x variable form a completly different scope.
```
Example DRYing common functionality

```javascript
function ticketMaker(band) {
    return function (name){
      alert("Ticket for " + name + " to " + band + " concert")
    }

}

var rafagaTicketMaker = ticketMaker("Rafaga");
var americoTicketMaker = ticketMaker("Americo");
var primusTicketMaker = ticketMaker("Primus");

console.log(rafagaTicketMaker); // =>function(name){ alert("Ticket for " + name + ...) }

rafagaTicketMaker('Fernando');
americoTicketMaker('Mono');
primusTicketMaker('Pervers');
```

Modify bounded variables in the background, great example. Each returned function has it own `fanNumber` variable

```javascript
function ticketMaker(band) {
  var fanNumber = 0;
    return function (name){
      fanNumber++;
      alert("Ticket for " + name + " to " + band + " concert" + " number " + fanNumber)
    }
}
  var rafagaTicketMaker = ticketMaker("Rafaga");
  rafagaTicketMaker('Fernando');
  rafagaTicketMaker('Mono');

  var primusTicketMaker = ticketMaker("Primus");
  primusTicketMaker('Seba');
  primusTicketMaker('Pervers');

  rafagaTicketMaker('Mona');
  rafagaTicketMaker('Romis');
```
# Loops and Closures
Warning!!, bounded valiables get bound in the last minute. In this case `i` will be the same value everytime the function gets called. Because the for loop checks all the times

```javascript
function getArrayPos(value,array) {
  var function_holder;
  for (var i = 0; i < array.length; i++) {
    if (array[i] == value) {
      function_holder = function(){
        alert('Value ' + value + " is in position " + i)
      };
    };
  };
  return function_holder; // Here is when the closures closes the environment, but here i is the last index
};
var testArray = ["str1","str2","str3","str4"];
var getPos = getArrayPos("str2",testArray)
getPos(); // => Value str2 in position 4 WHAT!!!!
```
Solution:

```javascript
function getArrayPos(value,array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return function(){ //just return before the loops ends, forcing the coorect i value be bouded
        alert('Value ' + value + " is in position " + i)
      };
    };
  };
};
var testArray = ["str1","str2","str3","str4"];
var getPos = getArrayPos("str2",testArray)
getPos(); // => Value str2 in position 1
```
Refactoring

```javascript
function getArrayPos(array){
  return function(value) { // The complete iterator over the array is returned
    for (var i = 0; i < array.length; i++) {
      if (array[i] == value) {
        alert('Value ' + value + " is in position " + i);
      };
    };
  };
};
var testArray = ["str1","str2","str3","str4"];
var getPos = getArrayPos(testArray) // getPos is a powerful iterator for testArray
getPos("str2"); // => Value str2 in position 1
getPos("str4"); // => Value str2 in position 3

```

Another wrong implementation

```javascript
for(var i=1; i<=5; i++){
  setTimeout(function(){console.log(i);},i*100);
}
```

Solution:
The use of an iife inside each iteration creates a new scope for each iteration, and updates de local copy with the correct value. Horrible code!

```javascript
for (var i=1; i <= 5; i++) {
  (function(j){
    setTimeout(function(){
      console.log(j);
    }, j*100);})(i);
}
```
