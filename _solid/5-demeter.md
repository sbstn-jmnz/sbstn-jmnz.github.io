---
layout: page
title: Demeter Principle
image_path: https://c1.staticflickr.com/1/33/66281384_4997df55b7.jpg
permalink: /demeter/
---

This one is easy to implement and use in almost any object oriented code, but we see violations of this principle everywhere.

In simple words it means use just one dot `(.)`, but the complete definition it that a method can call other method of its own class and methods on the classes of its own instance variables.

One example will clarify this concept:

{% highlight ruby linenos %}
class Drummer < ActiveRecord::Base
  has_one :drumset
end

class DrumSet < ActiveRecord::Base
  bellongs_to :drummer
end

 @drummer.drumset.play # => Demeter violation
{% endhighlight %}

To solve this violation we have to define (delegate) the play method on the Drummer class, like so:

{% highlight ruby linenos %}
class Drummer < ActiveRecord::Base
  has_one :drumset
  def play; drumset.play ; end
  # more elegant solution
  delegate :play, to: :drumset
end

class DrumSet < ActiveRecord::Base
  bellongs_to :drummer
end

 @drummer.play # => no Demeter violation
{% endhighlight %}

This is just a simple example, but in reality they are more nested (Customer with wallet, and balance for example), but the solutions is just as simple. Use delegation and don't talk to strangers
