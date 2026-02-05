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
