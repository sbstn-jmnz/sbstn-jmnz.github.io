---
layout: page
title: Open/Closed Principle
image_path: https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1000px-Javascript_badge.svg.png
permalink: /open-close/
---

This one is rough, so we will go step by step. This principle states that classes should be closed against modification, but open for extension. In simple words, classes should be able to extend its behavior, without modifying existing code that can potentially affect other classes.

Metaprogramming and the *Abstract factory pattern* can help us in this situations. Imagine that we have a `GarageBand` class that depends on a `DrumKit` class with many subclasses which are initialized depending on the `@style` variable:

{% highlight ruby linenos %}
class GarageBand
  #... rest of the class omitted
  def drums
   drum_set =
    case @style
    when :jazz
      JazzDrumKit.new()
    when :metal
      MetalDrumKit.new()
    when :pop
      PopDrumKit.new()
    end          
  end
end
{% endhighlight %}  

But, what happen in the future when we need to add new subclasses like, Latin, Funk or Ethnic kits. We will need to modify a super class and add more case statements. This is like `goto` declarations and will become ugly code.

The key of the *Abstract factory pattern* is that it can instantiate objects whose subclass isn't known until runtime. Here is how it look like:

{% highlight ruby linenos %}
class GarageBand
#... rest of the class omitted
  def drums
    drum_class =
    begin
     @style.to_s.classify.constantize
    rescue NameError
     'Invalid style'
    end  
    drum_set = drum_class.send(:new,self)  
  end
end
{% endhighlight %}  

Whit this approach we can add as many new subclasses and there is no need to modify the `GarageBand` class. This class is open for extension but closed against modification.
