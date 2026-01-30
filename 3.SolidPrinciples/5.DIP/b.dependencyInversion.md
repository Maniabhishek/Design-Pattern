### As wesaw in the previous file:
- High-level modules should not depend on low-level modules.
- Both should depend on abstractions.
- Abstractions should not depend on details.
- Details should depend on abstractions.

### In simple words
- Business logic should not care how things are implemented
- Depend on interfaces, not concrete classes
- Swap implementations without changing business code

### High-level vs Low-level (Very Important)
#### High-level module
- Business rules
- Use cases
- Core logic

```
Example

OrderService
PaymentService
UserService
```
#### Low-level module
- DB
- Email
- Logger
- Cache
- HTTP clients

```
Example

MySQLDatabase
MongoClient
SendGridEmail
ConsoleLogger
```

