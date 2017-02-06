---
layout: page
title: Masterting Javascript
permalink: /mastering-js/
---

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1000px-Javascript_badge.svg.png" alt="{{ javascript }}" style="width: 30%; height: 30%"/>
<br/>

This is the second jump on JavaScript for Rubyists. Here we are going to digg depper in the singularities of the language with examples more than with explanations. In order to get better understanding of the examples read them first, then run them in the console and read again.

A ditalied explanation of these concepts are found in this [book](https://www.amazon.com/Mastering-JavaScript-Ved-Antani/dp/1785281348) 

This is just an student's page intended to reinforce and complement concepts. No copyright infringement intended. Anyway, you can always drop me an email if you want to discuss some topic.

Keep coding!

{% for mastering in site.mastering-javascript %}
  <div class="">
    <h1> <a href="{{ mastering.url }}">{{ mastering.title }}</a></h1>
  </div>
{% endfor %}
