### What is Dependency Inversion Principle
- High-level modules should not depend on low-level modules.
- Both should depend on abstractions.
- Abstractions should not depend on details.
- Details should depend on abstractions.

### Lets first understand the what is mean (Abstractions should not depend on details, Details should depend on abstractions.)

#### First: What is an Abstraction vs a Detail?
- Interface
- Abstract class
- Business contract
- What the system does

```ts
interface PaymentGateway {
  pay(amount: number): void;
}

```

#### Detail 
- Concrete implementation 
- Infrastructure / vendor code 
- How it is done

```ts
class RazorpayGateway implements PaymentGateway {
  pay(amount: number) {
    console.log("Paid via Razorpay");
  }
}
```

#### What WRONG Design Looks Like (❌ Abstraction depending on details)
```ts
class RazorpayGateway {
  pay(amount: number) {}
}

interface PaymentGateway {
  razorpay: RazorpayGateway; // ❌ abstraction depends on detail
}
```

#### ❌ Why above is bad
- Interface is now tied to Razorpay
- Can’t use Stripe, PayPal, UPI, etc.
- Changing vendor = changing abstraction
- Abstraction is polluted by detail

#### Correct Dependency Direction (DIP)
- Abstraction is independent
```ts
interface PaymentGateway {
  pay(amount: number): void;
}
```

- Detail depends on abstraction
```ts
class RazorpayGateway implements PaymentGateway {
  pay(amount: number) {
    console.log("Razorpay payment");
  }
}

```

#### Why This Rule Exists (Big Picture)
- Business rules should:
- Outlive frameworks
- Outlive vendors
- Outlive databases

#### Frameworks & vendors:
- Change often
- Get replaced
- Become obsolete
- So:
    - Abstractions must be stable
    - Details must be replaceable


#### Backend Example (Very Common Mistake) ❌ Abstraction depends on detail
```ts
import { MongoClient } from "mongodb";

interface UserRepository {
  client: MongoClient; // ❌
  save(user: any): void;
}
```
- ❌ Problem
- Interface is now Mongo-specific
- Switching DB breaks abstraction

#### ✅ Correct DIP Design
```ts
interface UserRepository {
  save(user: any): void;
}

class MongoUserRepository implements UserRepository {
  save(user: any) {
    console.log("Saved to Mongo");
  }
}
```

#### Abstraction ≠ Interface File Location (Subtle but Important) Many devs think:
- “If interface is in a separate file, DIP is followed”
- ❌ Not true.
- ❌ Still wrong

```ts
interface Logger {
  logToFile(message: string): void; // file-based detail leaked
}

✅ Better abstraction
interface Logger {
  log(message: string): void;
}
```

#### How to Detect This Violation Quickly Ask:
- Does my interface mention:
- Database names?
- SDK types?
- HTTP frameworks?
- Would switching vendors change my interface?
- If yes → abstraction depends on detail ❌

#### Why This Matters for Testing
```ts
❌ Bad abstraction
interface EmailSender {
  sendViaSMTP(msg: string): void;
}
```

#### Hard to mock without SMTP semantics
```ts
✅ Good abstraction
interface EmailSender {
  send(msg: string): void;
}
```
- Easy to mock, fake, stub
