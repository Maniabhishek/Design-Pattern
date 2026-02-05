### What is Factory design pattern
> Factory Pattern encapsulates object creation logic and returns objects without exposing the instantiation details.

### In simple words
- 👉 You ask for an object
- 👉 Factory decides which class to create
- 👉 You don’t care about new

### One-line intuition
- “Don’t create objects directly. Ask a factory.”

### 1️⃣ Simple Real-World Example (Vehicle Factory 🚗🏍️)
- Scenario
  - You want vehicles:
  - Car
  - Bike
  - Truck
#### You don’t want calling code to know constructors.

### ❌ Without Factory (Bad)
```ts
function getVehicle(type: string) {
  if (type === "car") return new Car();
  if (type === "bike") return new Bike();
}

```
#### Problems:
- Creation logic everywhere
- Violates Open/Closed Principle
- Hard to scale

### ✅ Factory Pattern
- Step 1: Common interface
```ts
interface Vehicle {
    Drive(): void
}
```

- step 2: concrete class

```ts
  class Car implements Vehicle {
    Drive(): void{
        console.log('car drive')
    }
  }
  class MotorCycle implements Vehicle {
    Drive(): void{
        console.log('MotorCycle drive')
    }
  }
```

- Step 3: Factory Class
```ts
class VehicleFactory {
    static getVehicle(type: string){
        switch(type){
            case "car": 
                return new Car()
            case "mc":
                return new MotorCycle()
            default:
                throw new Error("invalid car type")
        }
    }
}
```

- step 4: Usage
```ts
export function CallVehicleFactory(){
    const car = VehicleFactory.getVehicle("car")
    car.Drive()
}
```
