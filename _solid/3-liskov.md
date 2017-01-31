---
layout: page
title: Liskov Substitution Principle
image_path: https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1000px-Javascript_badge.svg.png
permalink: /liskov/
---

The *Liskov Substitution Principle* states that every method of an object should also work correctly on any subclass of the object class. That is that inherited classes should respond to all of the parents methods.

So when creating a subclass we end up changing the parent class we should stop and think if classical inheritance is the appropriate solution. The suggested way of dealing with this problem is to use composition and delegation rather than inheritance. By the way, composition is to simply set an instance variable an object that has the behavior we are looking for, so we can use some of it's method on our new class and not inherit the complete class. This way we complement our class with those methods.

Let's see an example:

{% highlight ruby linenos %}
class Bird
  def hatch ...;  end
  def eat ...;  end
  def fly ...; end
end

class Ostrich < Bird
  def fly
    raise "Ostrich can't fly"
  end
end
{% endhighlight %}    

There are many cases when we use inheritance when we really shouldn't. The above case is obvious, but there are some other cases where the difference is subtle [(The typical examples of Squares and Rectangles)](http://www.oodesign.com/liskov-s-substitution-principle.html). Let's see how can improve the above class

{% highlight ruby linenos %}
class Bird
  def hatch ...;  end
  def eat ...;  end
  def fly ...; end
end

class Ostrich
  attr_accessor :bird
  def initialize
    @bird = Bird.new # => composition
  end

  def hatch ; bird.hatch ; end # => delegation
  def eat ;  bird.eat ; end # => delegation

end
{% endhighlight %}

This way we can still use the behavior from the bird class (duck typing) but without breaking the LSP.
