---
layout: page
title: SOLID Design Patterns and Code Metrics
permalink: /solid/
---

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1000px-Javascript_badge.svg.png" alt="{{ javascript }}" style="width: 30%; height: 30%"/>
<br/>
{% for javascript in site.javascript %}
  <div class="">
    <h1> <a href="{{ javascript.url }}">{{ javascript.title }}</a></h1>
  </div>
{% endfor %}
