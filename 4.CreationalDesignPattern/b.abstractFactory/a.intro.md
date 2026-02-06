### What is Abstract Factory Pattern?
- Abstract Factory provides an interface for creating families of related objects without specifying their concrete classes.

### In simple words:
- 👉 Factory creates one object
- 👉 Abstract Factory creates a family of objects that are meant to work together

### One-Line Intuition
- “Factory of factories.”
- Abstract Factory is meant to prevent invalid combinations.
- “One factory = one family of compatible objects”

### 1️⃣ Simple Real-World Example (Furniture Store 🪑🛋️)
#### Scenario
- You have themes:
    - Modern
    - Victorian
- Each theme must provide:
    - Chair
    - Sofa

- ❌ Without Abstract Factory (Messy)
```ts
new ModernChair();
new VictorianSofa(); // ❌ mixed styles
```

### ✅ Abstract Factory Solution
- Step 1: Product Interface
```ts
interface Chair{
    toSit(): void
}

interface Sofa{
    toLieOn(): void
}
```

- Step 2: Concrete Products
```ts
class ModernChair implements Chair{
    toSit(){
        console.log('sitting on modern chair')
    }
}

class VictorianChair implements Chair {
    toSit(){
        console.log('sitting on Victorian chair')
    }
}

class ElectricChair implements Chair {
    toSit(){
        console.log('sitting on Electric chair')
    }
}

class ModernSofa implements Sofa {
    toLieOn(): void {
        console.log('lieing on modern sofa')
    }
}

class VictorianSofa implements Sofa {
    toLieOn(): void {
        console.log('lieing on victorian sofa')
    }
}

class ElectricSofa implements Sofa {
    toLieOn(): void {
        console.log('lieing on electric sofa')
    }
}
```

- Step 3: Abstract Factory Interface
```ts
interface IFurnitureFactory {
    createChair(): Chair
    createSofa(): Sofa
}
```
- concrete factories
```ts
class ModernFurnitureFactory implements IFurnitureFactory {
    createChair(): Chair{
        return new ModernChair()
    }

    createSofa(): Sofa{
        return new ModernSofa()
    }
}

class VictorianFurnitureFactory implements IFurnitureFactory {
    createChair(): Chair{
        return new VictorianChair()
    }

    createSofa(): Sofa{
        return new VictorianSofa()
    }
}

class ElectricFurnitureFactory implements IFurnitureFactory {
    createChair(): Chair{
        return new ElectricChair()
    }

    createSofa(): Sofa{
        return new ElectricSofa()
    }
}
```

- client code
```ts
function UseFurniture(furniture: IFurnitureFactory){
    const chair = furniture.createChair()
    const sofa = furniture.createSofa()

    chair.toSit()
    sofa.toLieOn()
}

export function CallUseFurniture(){
    UseFurniture(new ElectricFurnitureFactory())
}
```
