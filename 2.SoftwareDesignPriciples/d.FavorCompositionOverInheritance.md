### Inheritance is probably the most obvious and easy way of reusing code between classes.
### Unfortunately, inheritance comes with caveats that often become apparent only after your program already has tons of classes and changing anything is pretty hard. Here’s a list of those problems.
- A subclass can’t reduce the interface of the superclass. You have to implement all abstract methods of the parent class even if you won’t be using them.
- When overriding methods you need to make sure that the new behavior is compatible with the base one. It’s important because objects of the subclass may be passed to any code that expects objects of the superclass and you don’t want that code to break.
- Inheritance breaks encapsulation of the superclass because the internal details of the parent class become available to the subclass. There might be an opposite situation where a programmer makes a superclass aware of some details of subclasses for the sake of making further extension easier.
- Subclasses are tightly coupled to superclasses. Any change in a superclass may break the functionality of subclasses.
- Trying to reuse code through inheritance can lead to creating parallel inheritance hierarchies. Inheritance usually takes place in a single dimension. But whenever there are two or more dimensions, you have to create lots of class combinations, bloating the class hierarchy to a ridiculous size.


> - There’s an alternative to inheritance called composition. Whereas inheritance represents the “is a” relationship between classes (a car is a transport), composition represents the “has a” relationship (a car has an engine).
> - this principle also applies to aggrega-tion - a more relaxed variant of composition where one object may have a reference to the other one but doesn’t manage its lifecycle. Here’s an example: a car has a driver, but he or she may use another car or just walk without the car.


#### Example
- Imagine that you need to create a catalog app for a car manufacturer. The company makes both cars and trucks; they can be either electric or gas; all models have either manual controls or an autopilot.
<img width="400" alt="image" src="https://github.com/user-attachments/assets/af3cb62d-72ff-472a-898c-7e83ee915289">

- As you see, each additional parameter results in multiplying the number of subclasses. There’s a lot of duplicate code between subclasses because a subclass can’t extend two classes at the same time.
- You can solve this problem with composition. Instead of car objects implementing a behavior on their own, they can delegate it to other objects.
- The added benefit is that you can replace a behavior at runtime. For instance, you can replace an engine object linked to a car object just by assigning a different engine object to the car.
<img width="400" alt="image" src="https://github.com/user-attachments/assets/6565c021-a0fd-4b79-aeea-288f5034eb50">
