---
layout: page
title: JavaScript Testing Tools
image_path: https://c1.staticflickr.com/1/33/66281384_4997df55b7.jpg
permalink: /js-testing/
---

As Rubyists when we think of testing code, we don't imagine the amount of task that we need to address in order to get our test suite up-and running (a descent automated test suite). Form the beginning we have Minitest as the default testing framework in the Ruby 2.0 Standard Library and the default test framework for Rails. Also we have RSpec, another great testing framework with all the necessary pieces ready to get an automated test suite. We don't test our code once, we test it all the time. That's why our test suite needs to be light, fast and automated.
s
The truth is that in JavaScript we don't have those thing by default and we need to manage a lot of libraries and dependencies to get our test suite up and running. In my personal experience, it took me three days to get my test suite ready to work on an Angular1.5 project (whit Ember is a lot easier and feels like Rails because it has a test suite ready to go from the beginning, but we are not always lucky enough to pick the frameworks and legacy code needs us).

Depending on how much intense is your app in JavaScript is the amount of work and tools to get you covered. For simple JQuery and AJAX interactions in a Rails app we can go with [Jasmine-Rails gem](https://github.com/searls/jasmine-rails). Jasmine (https://jasmine.github.io/) has become the most popular choice for testing Angular apps also, and can be used to test Node.js code too.

But for more intense JavaScript apps like SPA's we need to test our code in different browsers and for those test we'll need to emulate those browsers.

Testing SPA's is a huge topic and libraries and frameworks are constantly evolving. So in this entry we'll focus in the current set of tools that will allow us to get a test suite on an Angular 1.5.

In a Angular application, test will fall into two types: unit tests and end to end test(E2E). The first type are like black-box-style test, where a piece of the application is isolated, mocked out its dependencies, and fed with some inputs, then it output or functionality is verified. On the other hand E2E tests simulates high level interaction by simulating a user interacting with components and ensuring proper behavior. For this tests we need an actual web browser that loads and execute our code.

For unit test, the common tool is [Karma](https://karma-runner.github.io/1.0/index.html), a test runner which will execute our test and give us feedback whether our test pass or fail, and where in our code. In the case of E2E test there is a special framework for Angular called [Protractor](http://www.protractortest.org/#/).

Both tools will require a *\*.conf.js* file which will act as the test suite director when invoked by Grunt or Gulp (task runners).

The good news is that both, Karma unit test and Protractor end-to-end test use the Jasmine syntax, which is inspired by RSpec.  

Depending on which came first in our task runner, each set of test will execute separately. Karma will load a headless browser, generally PhantomJS, and Protractor will load Sellenium WebDriver to set up a real browser which we can see in action in our local development environment.

We can see that testing Angular applications requires a fair amount of configuration and when they say that Angular is a framework built with testability in mind, they refer to the modularity of the code (modules, dependencies, services) which can be mocked and isolated for testing, but definitely not when we are thinking on a out-of-the-box test suite.

Maybe that's one of the main reasons why [Thoughtworks](https://www.thoughtworks.com/radar/languages-and-frameworks), a leading edge technological company, recommends frameworks like Ember and React and not so much Angular JS for new projects.

But there are a lot of Angular apps out there that need support and it our mission to build a healthy test suite before touching the code.

An excellent course, that covers step by step all the configuration needed is found on [Tuts+](https://code.tutsplus.com/courses/angularjs-for-test-driven-development)          
