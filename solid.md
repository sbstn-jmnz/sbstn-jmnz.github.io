---
layout: page
title: SOLID Design Principles and Code Metrics
permalink: /solid/
---

<img src="http://www.publicdomainpictures.net/pictures/190000/velka/branch-patterns-with-light-flares.jpg" alt="{{ javascript }}" style="width: 70%; height: 70%"/>
<br/>

Here we are going to cover good class design, in other words, how classes will interact with each others, and show some proven solutions to common problems (patterns).

TDD and BDD can help us to prove that our code does what it is supposed to do, and also can warn us when some change is breaking other parts of our program, but they don't warn us when we are making a class that in the future will be difficult to extract or extend. This is where design patterns help us identify which parts change from the ones that stays the same. The over all goal is to minimize the cost of change.

In Agile environments it is quite difficult to predict when to apply certain pattern because we don't have the complete picture of how the complete application will be and apply patterns early in the development process can be futile, so we will have to refactor with the proper pattern(s) when the cost of change is taking more than expected by the team. On the other hand, with plan and document approach is easier because the entire program is specified.

One thing to remember is that design patterns are not an indicator of the code quality or software quality. For code quality (method level code) we have specific metrics (ABC score and Cyclomatic Complexity), and having good method level code it is not an indicator that our classes are well structured.

This series takes the [Engineering Software as a Service](https://www.amazon.com/Engineering-Software-Service-Approach-Computing/dp/0984881247/ref=sr_1_1?ie=UTF8&qid=1485709222&sr=8-1&keywords=Engineering+Software+as+a+Service) SOLID version, which changes the I (most used for Interface segregation) for Dependency Injection and D for Demeter principle, which are more often in dynamic languages.

{% for solid in site.solid %}
  <div class="">
    <h1> <a href="{{ solid.url }}">{{ solid.title }}</a></h1>
  </div>
{% endfor %}
