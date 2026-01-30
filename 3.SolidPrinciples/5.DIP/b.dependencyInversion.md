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

### Classic DP violation
```ts
class MySqlDatabase {
    connect(){
        console.log("connecting to db")
    }
}

class DbService {
    mysql: MySqlDatabase = new MySqlDatabase()
    
    createOrder(){
        this.mysql.connect()
        console.log("order created")
    }
}

```
- whats wrong in the above code
  - OrderService (high-level) depends on MySQLDatabase (low-level)
  - Switching DB = change business logic
  - Impossible to unit test without real DB

### Fixing DIP Step by Step
-  step 1: introduce an abstraction
```ts
interface Database {
    connect(): void
}
```

- Step 2: Make low level module depend on abstraction
```ts
class MySqlDb implements Database {
    connect(){
        console.log('connected to MySqlDb')
    }
}

class NoSqlDb implements Database {
    connect(){
        console.log('connected to NoSqlDb')
    }
}
```

- Step 3: Make high level module depend on abstraction
```ts
class OrderService {
    private db: Database

    constructor(db: Database){
        this.db = db
    }

    createOrder(){
        this.db.connect()
        console.log('created order')
    }

}
```

- Step 4: Wire dependencies (Composition Root)
```ts
const db = new MongoDatabase();
const orderService = new OrderService(db);

orderService.createOrder();

```
#### Benefits of DIP code
- DB can be swapped
- Business logic unchanged
- Easy testing

### Why It’s Called Dependency INVERSION
- ❌ Traditional flow:
```
OrderService → MySQLDatabase
```
- ✅ DIP flow:
```
OrderService → Database ← MySQLDatabase
```

### DIP vs Dependency Injection (Very Common Confusion)
| DIP                     | Dependency Injection           |
| ----------------------- | ------------------------------ |
| Design principle        | Technique                      |
| Says *what* to do       | Says *how* to do               |
| Depends on abstractions | Constructor / setter injection |

### Real World Example 
```ts
class EmailService {
    sendSMTPEmail(){}
}

class UserService {
    emailService : EmailService = new EmailService()

    createUser(){
        this.emailService.sendSMTPEmail()
        console.log('send email service')
    }
}
```

-  fixing the above code , and make it follow DIP
```ts
interface IEmail {
    send(): void
}

class SmtpEmail implements IEmail {
    send(){
        console.log('sending smtp email')
    }
}

class SendgridEmail implements IEmail {
    send(){
        console.log('sending smtp email')
    }
}

class UserService {
    private emailService: IEmail

    constructor(emailService: IEmail){
        this.emailService = emailService
    }

    createUser(){
        this.emailService.send()
    }
}
```

### DIP Enables Testability (Huge Benefit)
- Unit test without real dependencies
```ts
class FakeEmailService implements IEmail {
    send(){
        console.log('fake email: fake')
    }
}

const u = new UserService2(new FakeEmailService())
u.createUser()
```
- No SMTP
- No network
- Fast tests

### Subtle DIP Violation
```ts
interface Database {
  connect(): void;
}

class OrderService {
  constructor(private db: MySQLDatabase) {} // ❌
}

```
