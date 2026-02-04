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
    - Milk (+₹20)
    - Sugar (+₹10)
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
