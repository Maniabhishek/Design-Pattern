### Decorator vs Inheritance
| Inheritance     | Decorator      |
| --------------- | -------------- |
| Static          | Dynamic        |
| Class explosion | Flexible       |
| Compile-time    | Runtime        |
| Tight coupling  | Loose coupling |

### Decorator vs Middleware
- Middleware = functional decorator
- Decorator = OO decorator
- Same idea, different style.

### When to Use Decorator Pattern
- ✅ Use when:
    - You need to add responsibilities dynamically
    - Multiple combinations exist
    - Order of behavior matters
    - You want to follow OCP
- ❌ Avoid when:
    - Only one behavior
    - Simple conditional logic is enough
    - Object identity matters strongly

### Common Mistakes (Interview Traps)
- ❌ Modifying original class
- ❌ Too many small decorators
- ❌ Confusing Decorator with Adapter
- ❌ Forgetting delegation (super call)


- Core behavior stays untouched
- Decorators wrap and enhance
- Order matters
