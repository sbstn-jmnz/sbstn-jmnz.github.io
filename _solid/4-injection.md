---
layout: page
title: Injection Dependencies
image_path: https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1000px-Javascript_badge.svg.png
permalink: /inject/
---

This one states that if two classes depend on each other, but their implementations may change, it is better that both depend on a separate interface injected between them.

In reality is more simple than it sounds, let's see a simple example:

{% highlight ruby linenos %}
class Drummer
  def initialize
    @drumset = DrumSet.new(:tunning => 'low_pitch')
  end
end
{% endhighlight %}

But what if in the future we want a latin drummer with timbales rather than a regular drumset? And even worst, we decide at run time...

Angain, it sounds more complicated than it really is.

{% highlight ruby linenos %}
class Drummer
  def initialize(drum_set_type, tunning)
    @drumset = drum_set_type.new(tunning)
  end
end
{% endhighlight %}

Simple, right. Same lines of code but more powerful and flexible. This way the program can react at runtime which class to initialize, because is injected and not hard-coded in the constructor.

Things can get more complicated and sophisticated when we mix more design pattern. Imagine how many different e-mail services are out there. Each defines it's own methods (API), and maybe we need to use more than one in our application. We can address that with something very similar to the last example, but with an **Adapter** class. This way we can use a common API to talk to different services.

If this adapter also simplifies the underling API, they say it is also a **Facade** and if the adapter is like a controller that depending on the request it decides whether or not to forward the request it is called a **Proxy** class.   
