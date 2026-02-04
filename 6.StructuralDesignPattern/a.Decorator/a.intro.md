### What is the Decorator Pattern?
> Decorator Pattern lets you add new behavior to an object dynamically, without modifying its original class.

### In simple words:
- 👉 Wrap an object
- 👉 Add behavior before / after
- 👉 Keep the original object unchanged

### One-line intuition
- Decorator = “Wrap & Enhance”

### 1️⃣ Simple Real-World Example (Coffee ☕)
- Base coffee: ₹100
- Add-ons:
    - Milk 
    - Whipped Cream (+₹30)

### ❌ Without Decorator (Bad)
```ts
class Coffee {
  cost(): number {
    return 100;
  }
}

class MilkCoffee extends Coffee {
  cost(): number {
    return 120;
  }
}

class MilkSugarCoffee extends Coffee {
  cost(): number {
    return 130;
  }
}

```

#### Step 1: Component Interface
```ts
interface Coffee {
    cost(): number
    description(): string
}
```
#### Step 2: Concrete Component
```ts
class SimpleCoffee implements Coffee {
    cost(){
        return 100
    }

    description(){
        return 'simple coffee'
    }
}
```
#### Step 3: Base Decorator
```ts
class CoffeeDecorator implements Coffee {
    coffee: Coffee
    constructor(coffee: Coffee){
        this.coffee = coffee
    }
    cost(){
        return this.coffee.cost()
    }

    description(){
        return this.coffee.description()
    }
}
```
#### Step 4: Concrete Decorators
```ts
class MilkDecorator extends CoffeeDecorator {
    cost(){
        return super.cost() + 50
    }

    description(){
        return super.description() + ' with milk'
    }
}

class WhippedCreamDecorator extends CoffeeDecorator {
    cost(){
        return super.cost() + 100
    }

    description(){
        return super.description() + ' with whipped cream'
    }
}
```

```ts
export function CallCoffee(){
    const coffee = new SimpleCoffee()
    const mc = new MilkDecorator(coffee)
    const wc = new WhippedCreamDecorator(coffee)

    console.log(mc.cost(), mc.description())
    console.log(wc.cost(), wc.description())
}
```

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
