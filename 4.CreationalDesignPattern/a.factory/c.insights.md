### Factory vs Constructor
| Constructor	    |  Factory              |
|-----------------|-----------------------|
| new everywhere	|  Centralized creation |
| Tight coupling	|  Loose coupling       |
| Hard to change	|  Easy to extend       |
| No abstraction	|  Polymorphism         |


### Factory vs strategy
| Factory                       | Strategy                |
| ----------------------------- | ----------------------- |
| Creates objects               | Uses behavior           |
| Decides *what to instantiate* | Decides *how to behave* |
| One-time decision             | Runtime decision        |


### When to Use Factory Pattern
- ✅ Use when:
    - Object creation is complex
    - Multiple implementations exist
    - You want to hide new
    - Creation depends on config / input
- ❌ Avoid when:
    - Only one class
    - No variation
    - Over-engineering small apps
 
>- Creation is a responsibility
>- Factory owns that responsibility
>- Caller just uses the object
