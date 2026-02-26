### 2️⃣ Real Backend Example (Node.js / TypeScript)
- Scenario: HTTP Request Handling
- You want to add:
- Logging
- Authentication
- Rate limiting
- Caching
- without modifying core handler.

```ts
class UserController {
  handle(req: any) {
    console.log("Log request");
    console.log("Check auth");
    console.log("Rate limit");
    return "User data";
  }
}
```
- ❌ Tight coupling
- ❌ Hard to reuse
- ❌ Violates SRP

### ✅ Decorator Pattern in Backend
```ts
// ### Step 1: interface handler
interface Handler {
  handle(req: any): string;
}
```
### Step 2: Core handler
```ts
class UserHandler implements Handler {
    handle(req: any){
        return "user data"
    }
}
```
### Step 3: Base Decorator
```ts
class HandlerDecorator implements Handler {
    handler: Handler
    constructor(handler: Handler){
        this.handler = handler
    }
    handle(req: any): string{
        return this.handler.handle(req)
    }
}
```
### Step 4: Backend Decorators
```ts
class LoggingDecorator extends HandlerDecorator {
    handle(req: any): string {
        console.log('logged request')
        return super.handle(req)
    }
}

class AuthenticationDecorator extends HandlerDecorator {
    handle(req: any): string{
        console.log('authenticated')
        return super.handle(req)
    }
}

class RatelimitDecorator extends HandlerDecorator {
    handle(req: any): string {
        console.log('rate limit decorator')
        return super.handle(req)
    }
}
```
### Step 5: Composition (Middleware-like)
```ts
export function CallRequestHandler(){
    const requestHandler = new LoggingDecorator(new AuthenticationDecorator(new RatelimitDecorator(new UserHandler())))

    requestHandler.handle({user: "abhi"})
}
```
