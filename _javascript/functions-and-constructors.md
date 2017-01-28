---
layout: page
title: Functions and Constructors
image_path: https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1000px-Javascript_badge.svg.png
permalink: /fnctns-and-cnstrctrs/
---

Object orientation and class inheritance are distinct design concepts. Many of us conflate them because popular languages like Java and Ruby use both. JavaScript is object-oriented, but lacks classes. But, like we said in the previous post, there are some sort of patterns that help us achieve similar behavior.  Let's look at some code...

```javascript
    var Record = function(title,year,band) {

      this.title = title;
      this.year = year;
      this.band = band;
      //Yep, an instance method!!
      this.full_title = function() {
        return (this.title + ' (' + this.band + ' ' + this.year + ')');
      };
    };
```

```javascript

  function Record(title,year,band){
    //Same as the above function
  };
```
The first snippet shows a new way (for Rubyists) of defining functions, this is possible because functions are *first-class objects*. `Movie` is just a simple variable whose value happens to be a function. The second snippet looks familiar but it is declared directly on the global namespace. In general, as a best practice, is better to create just a few global variables and our JavaScript functions will be values of properties of those objects.

So let's create a new record...

```javascript
  nevermind = new Record('Nevermind',1991,'Nirvana');
  nevermind.full_title; // => function() {...}
  nevermind.full_title(); // => "Nevermind (Nirvana 1992)"
```
When calling `Record` with the `new` keyword, the value of `this` in the function body will be a new JavaScript object that will be returned by the function. This is very similar to `self` inside the `initialize` constructor method. The returned object will have the declared properties which one of them is also a function. The different behavior is when we call `nevermind.full_title;` which is the function itself. In order to call it we must use `nevermind.full_title()`.

One important think to keep in mind it is that, even though this example looks like we are dealing with classes, constructor and instance methods, they just are not. There is nothing in the function that makes it a constructor. All the magic is done by the keyword `new`. Lets see what happens if we call the Record method without the `new` keyword.

```javascript
  reload = Record('Reload','1997', 'Metallica')
  reload.title; // =>Uncaught TypeError: Cannot read property 'title' of undefined(…)
  reload.full_title(); // => Uncaught TypeError: Cannot read property 'full_title' of undefined(…)
```

The above code is totally legal, but it behavior it is completely different than the expected. Fist the `this` keyword in the function is no longer a new instance of the prototype, in fact it is the global object itself. We can prove it:

```javascript
  title; // => "Reload"
  full_title; // => "function() {...}"
  full_title(); // => "Reload (Metallica 1997)"
```
