## Program to an interface, not an implementation
- Program to an interface, not an implementation. Depend on abstractions, not on concrete classes.
- You can tell that the design is flexible enough if you can easily extend it without breaking any existing code.
- Let’s make sure that this statement is correct by looking at cat example. A Cat that can eat any food is more flexible than one that can eat just sausages. You can still feed the first cat with sausages because they are a subset of “any food”; however, you can extend that cat’s menu with any other food.

### When you want to make two classes collaborate, you can start by making one of them dependent on the other. However, there’s another, more flex- ible way to set up collaboration between objects:
- Determine what exactly one object needs from the other: which methods does it execute?
- Describe these methods in a new interface or abstract class.
- Make the class that is a dependency implement this interface.
- Now make the second class dependent on this interface rather than on the concrete class. You still can make it work with objects of the original class, but the connection is now much more flexible.

