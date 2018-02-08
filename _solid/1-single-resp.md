---
layout: page
title: Single Responsibility
image_path: https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1000px-Javascript_badge.svg.png
permalink: /srp/
---
This principle says that a class should have one and only one responsibility, that implies only one reason to change. Examples of violation of this principle happens all the time. It is frequent that our `User` model starts to grow with functionality that deals with user related concepts, such as, sign in, send email, validate zip code, address and so on, but those functionalities should be extracted to their own RESTful actions instead of polluting the `User` resource, and would be a good idea to have a `Session` and 'Address' resources that deals with those tasks.

We can measure the *cohesion* of a class by the number of variables accessed by instance methods. In simple words if some methods access some instance or class variables while other methods deals with other subset of variables, might be a good chance that we have two or more classes mixed and could be extracted. For example, if we change the sign in strategy or add a commercial address, we shouldn't change our `User` model.

There **LCOM** (*Lack of Cohesion Method*) quantitative metric warn us about how well cohesive is our class. There are two common variants of this method: the Henderson-Sellers LCOM and the LCOM-4.

The first method range from 0 to 1. 0 means that all instance method access all variables, whereas 1 means that each method deals with just one variable. In other words, methods are completely independent from each other, that is a poorly cohesive class.  

The LCOM-4 variant estimates the number of responsibilities in a class. This method ranges from 1 up to infinity. A score (n) greater than 1 suggest that up to n-1 responsibilities could be extracted into their own classes.

This kind of refactor can often lead to changes in our database schema. For example creating a new table for managing the addresses of our users separately. But this change may lead to another principle violation as we'll see in the Demeter principle. But we can solve it using a technique called *delegation* and maybe some *composition* which will allow us to still call method like `user.zip_code`, without having the implementation in the `User` model, so keep reading.  
