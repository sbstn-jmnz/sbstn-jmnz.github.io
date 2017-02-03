---
layout: page
title: Masterting Javascript
permalink: /mastering-js/
---

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1000px-Javascript_badge.svg.png" alt="{{ javascript }}" style="width: 30%; height: 30%"/>
<br/>

This is a series of post to give a straight forward introductions to JavaScript to programmers who already know the Ruby programming language, skipping the basics of loops and the things that every programming language has, focusing in the main differences and also the similarities between both.

Most of the material was learned from the JavaScript chapter of the great book [Engineering Software as a Service](https://www.amazon.com/Engineering-Software-Service-Approach-Computing/dp/0984881247/ref=sr_1_1?ie=UTF8&qid=1485709222&sr=8-1&keywords=Engineering+Software+as+a+Service) which is the recommended text book of two excellent MOOC's available on [edx.org](https://www.edx.org/xseries/agile-development-using-ruby-rails) and complemented with on line resources such of the [Mozilla Development Network](https://developer.mozilla.org/en-US/) and [W3C Schools](http://www.w3schools.com/js/default.asp). The testing chapter was inspired by [Tuts+](https://code.tutsplus.com/courses/angularjs-for-test-driven-development) and [Angular JS Maintaining Web Applications](https://www.packtpub.com/web-development/angularjs-maintaining-web-applications)

This is just an student's page intended to reinforce and complement concepts. No copyright infringement intended. Anyway, you can always drop me an email if you want to discuss some of the topics.       

Keep coding!

{% for mastering in site.mastering-javascript %}
  <div class="">
    <h1> <a href="{{ mastering.url }}">{{ mastering.title }}</a></h1>
  </div>
{% endfor %}
