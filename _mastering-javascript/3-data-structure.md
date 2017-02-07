---
layout: page
title: Data Manipulation
image_path: https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1000px-Javascript_badge.svg.png
permalink: /data-manipulation/
---

# Regular expressions

```javascript
var groove = /tupa/;
var groove = new RegExp("tupa");
// are the same
```

# RegExp flags:

  - `i` makes the RegExp case-insensitive
  - `g` matches all instances. Default is the first one.
  - `m` match across multiline, textarea for example

    ```javascript
    var groove = /tupa/ig
    var groove = new RegExp("tupa","ig")
    ```

Examples

```javascript
var groove = /()/;
console.log(groove.test('()order')); //

var groove = /deep/i
console.log(groove.test('Deep'));

```
