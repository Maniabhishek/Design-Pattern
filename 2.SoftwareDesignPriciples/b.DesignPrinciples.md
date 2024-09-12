- What is good software design? How would you measure it? What practices would you need to follow to achieve it? How can you make your architecture flexible, stable and easy to understand?
These are the great questions; but, unfortunately, the answers are different depending on the type of application you’re building. Nevertheless, there are several universal principles of software design that might help you answer these questions for your own project. Most of the design patterns listed here are based on these principles.

- Encapsulate what varies
 - Identify the aspects of your application that vary and separate them from what stays the same. The main goal of this principle is to minimize the effect caused by changes.
 - Imagine that your program is a ship, and changes are hideous mines that linger under water. Struck by the mine, the ship sinks.
 - Knowing this, you can divide the ship’s hull into independent compartments that can be safely sealed to limit damage to a single compartment. Now, if the ship hits a mine, the ship as a whole remains afloat.
 - In the same way, you can isolate the parts of the program that vary in independent modules, protecting the rest of the code from adverse effects. As a result, you spend less time getting the program back into working shape, implementing and test- ing the changes.
- Encapsulation on a method level ,
  - let say we have a method to get the total of order now that method contains the tax calculation as , but tomorrow tax calculation may change as per the country
  - so You can extract the tax calculation logic into a separate method, hiding it from the original method.
```
method getOrderTotal(order) is total = 0
  foreach item in order.lineItems
      total += item.price * item.quantity
  if (order.country == "US")
  total += total * 0.07 // US sales tax
  else if (order.country == "EU"):
  total += total * 0.20 // European VAT
  return total
```
- after seperating the method
```
method getOrderTotal(order) is total = 0
  foreach item in order.lineItems
  total += item.price * item.quantity total += total * getTaxRate(order.country) return total
  method getTaxRate(country) is if (country == "US")
  return 0.07 // US sales tax else if (country == "EU")
  return 0.20 // European VAT else
  return 0
```

- Encapsulation on a class level
  - Over time you might add more and more responsibilities to a method which used to do a simple thing. These added behav- iors often come with their own helper fields and methods that eventually blur the primary responsibility of the containing class. Extracting everything to a new class might make things much more clear and simple.

<img width="200" height="200" alt="image" src="https://github.com/user-attachments/assets/0dc05563-636b-46c3-9845-817b0d7a529d">
<img width="200" height="200" alt="image" src="https://github.com/user-attachments/assets/45a70bf5-9787-44ee-b1c7-4d0d0e46009a">


