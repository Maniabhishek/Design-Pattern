## Program to an interface, not an implementation
- Program to an interface, not an implementation. Depend on abstractions, not on concrete classes.
- You can tell that the design is flexible enough if you can easily extend it without breaking any existing code.
- Let’s make sure that this statement is correct by looking at cat example. A Cat that can eat any food is more flexible than one that can eat just sausages. You can still feed the first cat with sausages because they are a subset of “any food”; however, you can extend that cat’s menu with any other food.

### When you want to make two classes collaborate, you can start by making one of them dependent on the other. However, there’s another, more flex- ible way to set up collaboration between objects:
- Determine what exactly one object needs from the other: which methods does it execute?
- Describe these methods in a new interface or abstract class.
- Make the class that is a dependency implement this interface.
- Now make the second class dependent on this interface rather than on the concrete class. You still can make it work with objects of the original class, but the connection is now much more flexible.

<img width="300" alt="image" src="https://github.com/user-attachments/assets/c1b796e4-76ea-4119-a6fd-748ed8b71a2a">

- After making this change, you won’t probably feel any immediate benefit. On the contrary, the code has become more complicated than it was before. However, if you feel that this might be a good extension point for some extra functionality, or that some other people who use your code might want to extend it here, then go for it.

### Example
- Let’s look at another example which illustrates that working with objects through interfaces might be more beneficial than depending on their concrete classes. Imagine that you’re creating a software development company simulator. You have different classes that represent various employee types.

<img width="400" alt="image" src="https://github.com/user-attachments/assets/0ae32791-514a-4c36-b09a-7444ff3bb4af">
- in the above example the Company class is tightly coupled to concrete classes of employees. 
- However, despite the difference in their implementations, we can generalize various work-related methods and then extract a common interface for all employee classes.
- After doing that, we can apply polymorphism inside theclass, treating various employee objects via the Employee interface.
<img width="400" alt="image" src="https://github.com/user-attachments/assets/895eac4e-c259-4569-969d-b7ecd5b7be6f">
- the above example is better than previous one , but the resof the company class still depends on concrete employee classes
- The Company class remains coupled to the employee classes. This is bad because if we introduce new types of companies that work with other types of employees, we’ll need to override most of the Company class instead of reusing that code.
- To solve this problem, we could declare the method for getting employees as abstract.
- Each concrete company will implement this method differently, creating only those employees that it needs.
<img width="400" alt="image" src="https://github.com/user-attachments/assets/7bb2b84d-1988-4059-bf8c-f9896462d7f0">
