## Basic OOPS

> - Object-oriented programming is a paradigm based on the concept of wrapping pieces of data, and behavior related to that data, into special bundles called objects, which are constructed from a set of “blueprints”, defined by a programmer, called classes.
> - So a class is like a blueprint that defines the structure for objects, which are concrete instances of that class.

### Pillar of OOPS
1. Abstraction
> - Abstraction is the process of hiding the internal details of an application from the outer world. Abstraction is used to describe things in simple terms. It’s used to create a boundary between the application and the client programs.
> - Abstraction is present in almost all the real life machines.Your car is a great example of abstraction. You can start a car by turning the key or pressing the start button. You don’t need to know how the engine is getting started, what all components your car has. The car internal implementation and complex logic is completely hidden from the user.We can heat our food in Microwave. We press some buttons to set the timer and type of food. Finally, we get a hot and delicious meal. The microwave internal details are hidden from us. We have been given access to the functionality in a very simple manner.
> - Abstraction in oops - Objects are the building blocks of Object-Oriented Programming. An object contains some properties and methods. We can hide them from the outer world through access modifiers. We can provide access only for required functions and properties to the other programs. This is the general procedure to implement abstraction in OOPS.
> - There are two types of abstraction. Data Abstraction and Process Abstraction 
>> Data abstraction When the object data is not visible to the outer world, it creates data abstraction. If needed, access to the Objects’ data is provided through some methods.
>> Process abstraction We don’t need to provide details about all the functions of an object. When we hide the internal implementation of the different functions involved in a user operation, it creates process abstraction.
2. Encapsulation
> Encapsulation is the technique used to implement abstraction in object-oriented programming. Encapsulation is used for access restriction to class members and methods. Access modifier keywords are used for encapsulation in object oriented programming. For example, encapsulation in java is achieved using private, protected and public keywords.
3. Polymorphism 
> Polymorphism is the concept where an object behaves differently in different situations. There are two types of polymorphism - compile time polymorphism and runtime polymorphism. (method overloading and method overriding)
4. Inheritance
> Inheritance is the object-oriented programming concept where an object is based on another object. Inheritance is the mechanism of code reuse. The object that is getting inherited is called the superclass and the object that inherits the superclass is called a subclass.

### Relationship between objects 
> - Dependency: Class А can be affected by changes in class B.
> - Association: Object А knows about object B. Class A depends on B.
> - Aggregation: Object А knows about object B, and consists of B. Class A depends on B.
> - Composition: Object А knows about object B, consists of B, and manages B’s life cycle. Class A depends on B.

- Design patterns are typical solutions to commonly occurring problems in software design.
- They are like pre-made blue-prints that you can customize to solve a recurring design problem in your code.
- Patterns are often confused with algorithms, because both concepts describe typical solutions to some known problems. While an algorithm always defines a clear set of actions that can achieve some goal, a pattern is a more high-level description of a solution. The code of the same pattern applied to two different programs may be different.

## Classification of Patterns
- Design patterns differ by their complexity, level of detail and scale of applicability to the entire system being designed. Lets take the analogy to road construction: you can make an intersection safer by either installing some traffic lights or building an entire multi-level interchange with underground passages for pedestrians.
- The most universal and high-level patterns are architectural patterns. Developers can implement these patterns in virtual- ly any language. Unlike other patterns, they can be used to design the architecture of an entire application.
- In addition, all patterns can be categorized by their intent, or purpose. Three main groups of patterns
  - Creational patterns
  - Structural patterns
  - Behavioral patterns

