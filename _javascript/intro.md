---
layout: page
title: Introduction to Javascript for Rubyists
image_path: https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1000px-Javascript_badge.svg.png
---

Alright, we all know how a for loop works so we are going to skip that and focus on how to get productive and avoid the horrible parts of the language. Another good news it that JavaScript has more in common with Ruby than with Java.

+ The first important concept es that functions are "first-class citizens". That means functions can be passed around just like any other variable.

+ Almost everything is an object. The basic JavaScript object looks like a Ruby Hash, but its keys must be strings. If property names are legal variable names, quotes are optionals. Don't get confused with JSON, where all strings must be quoted.

  ```javascript
  album = {'title': 'Live in Japan',
  'releaseInfo': {'year': 1972, genre: 'Hard Rock, Heavy Metal' }    
  }
  ```

+ Accessing an object property can be done with `album.title` or `album['title']`

+ As Ruby it is dynamic typed. Variables don't have types, but objects they refer to do.

+ The primitive object types are `"object", "string", "array", "number", "boolean", "function" and "undefined"`. Just write `typeof(album)` and you'll get it's primitive type.

+ Classes and types matter even less than in Ruby. JavaScript has no classes, but there are some codding conventions that are used to achieve some of the effects on having classes.

+ Functions are closures that carry their environment with them, allowing to execute properly at a different place and time than where they were defined

+ Code blocks like `do..end` in Ruby are almost the same in  JavaScript written like `function() {...}`

+ Unlike Ruby, `false`, `null`, `undefined`, empty string `''` and `NaN`(not-a-number) are **falsy**, `true` and all other values are **truthy**. Ruby uses `nil` to mean both "undefined" (a variable that has never been given a value) and "empty" (a value that is always false)

+ The keyword `var` limits the scope of the variable to the function in which it appears, otherwise it becomes a global variable.  

+ Common naming conventions are: `localVar`, `local_var`, `ConstructorFunction`, `GLOBAL`

+ Every statement should be separated by semicolons, even though the interpreter will try to auto-complete the missing ones, it is consider a bad practice to avoid them.

Like we said, the basic type in JavaScript is the `object`, which is an unordered list of key/value pairs or property values. The values of a property can be any JavaScript expression, including other objects, the only restriction is `undefined`. This allows that a JavaScript object can have function-valued properties. This great feature is used by libraries to collect all their functions and variables into a single namespace. JQuery does exactly that, defining a single global variable through which all features of the library are accessed, rather than polluting the global namespace with many objects. This pattern can be adopt with our code with the same purpose like we will see in the next [post]({{ site.baseurl }}{% link _javascript/functions-and-constructors.md %})
