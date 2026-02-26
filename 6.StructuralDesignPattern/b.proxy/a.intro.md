> Proxy Pattern means: you place a substitute object in front of a real object to control access to it.

### 1. What is Proxy Pattern?
- A Proxy:
    - Has the same interface as the real object
    - Controls access to the real object
    - Can add extra behavior
    - Think of it as a middleman.

### Simple Real-World Example
- ATM Machine
- You don’t directly access your bank account server.
- You interact with:
- ATM → Bank Server
- ATM acts like a proxy:
    - Validates PIN
    - Checks balance
    - Forwards request
    - You never directly talk to the bank system.

### Why Do We Need Proxy? Common reasons:
- Access Control (Authorization)
- Lazy Initialization
- Caching
- Logging
- Remote Access
- Rate limiting

### Structure of Proxy Pattern
- We always have:
- Subject (interface)
- RealSubject (actual object)
- Proxy (controls access)
