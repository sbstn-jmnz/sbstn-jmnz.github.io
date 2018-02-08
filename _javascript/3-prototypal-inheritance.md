---
layout: page
title: Prototypal Inheritance
image_path: https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1000px-Javascript_badge.svg.png
permalink: /prttypl-inhrtnc/
---

In JavaScript every object has one and only one prototype, and that prototype has a link to it's own up to a chain that returns `null` when the `Object` prototype is reached. To get the prototype of an object we can use the `Object.getPrototypeOf()` method or by the property `constructor.prototype` on the object inspected. Like in the next snippet in the browser console :

```javascript
var x = {};
Object.getPrototypeOf(x); // => Object {}
x.constructor.prototype; // => Object {}
Object.getPrototypeOf(x.constructor.prototype); // => null

```
So when a function is called using the `new` keyword, a new object is created with the same prototype as the function.
Also, when a accessing to a property value, the property is looked in the object itself first, is not found, it will look on it's prototype until a matching name is found or the end of the prototype is reached.

We can also modify the prototypes of functions after they are created and get those properties in the new instances. See the example below.

```javascript

var Record = function(title,year,band) {
  this.title = title;
  this.year = year;
  this.band = band;
};

Record.prototype = {
    full_title: function() {
      return (this.title + ' (' + this.band + ' ' + this.year + ')');
    }
}

nevermind = new Record('Nevermind',1991,'Nirvana');
nevermind.full_title; // => function() {...}
nevermind.full_title(); // => "Nevermind (Nirvana 1992)"

```

We have to be aware that when extending the prototype, we just have to declare the property values directly on the prototype as a normal key/value pair, and not using the `self` keyword like in the constructor definition.

In the next entry we'll cover the [JSAPI]({{ site.baseurl }}{% link _javascript/4-jsapi.md %})
