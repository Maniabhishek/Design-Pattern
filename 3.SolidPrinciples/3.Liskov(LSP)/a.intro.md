>- Objects of a superclass should be replaceable with objects of its subclasses without breaking the correctness of the program.

> In simple words:
If S is a subtype of T,
then any code using T should work correctly with S without knowing the difference

### Important Clarification
- LSP is not about syntax
- It is about behavior
- Your code can compile perfectly and still violate LSP.


### Classic LSP Violation (Rectangle–Square Problem)
```ts
class Rectangle {
  protected width: number = 0;
  protected height: number = 0;

  setWidth(w: number){
    this.width = w
  }

  setHeight(h: number){
    this.height = h
  }

  area(){
    return this.height * this.width
  }
}

export class Square extends Rectangle {
  setHeight(h: number): void{
    super.setWidth(h)
    super.setHeight(h)
  }

  setWidth(w: number): void {
    super.setWidth(w)
    super.setHeight(w)
  }
}

export function CallSquare(rectangle: Rectangle) {

  rectangle.setWidth(5);
  rectangle.setHeight(4);

  console.log("Expected area = 20");
  console.log("Actual area =", rectangle.area());
}


export function InvokeCallSquare(){
  const sq = new Square()
  
  CallSquare(sq)
}
```

### Why This is an LSP Violation
- The base class contract says:
- Width and height are independent
- Square changes the rules.
- Even though Square IS-A Rectangle mathematically
- it is NOT substitutable behaviorally.

### Key Rule of LSP (VERY IMPORTANT)
- A subclass must:
  - Not strengthen preconditions
  - Not weaken postconditions
  - Preserve invariants
  - Not throw unexpected exceptions

### Example 1: Strengthening Preconditions ❌

```ts
class PaymentProcessor {
  pay(amount: number) {
    if (amount <= 0) throw new Error("Invalid amount");
  }
}

class CryptoPayment extends PaymentProcessor {
  pay(amount: number) {
    if (amount < 100) throw new Error("Minimum 100 required");
  }
}

```

### Example 2: Example 2: Weakening Postconditions ❌
```ts
class FileStore {
  save(data: string): boolean {
    return true;
  }
}

class CacheStore extends FileStore {
  save(data: string): boolean {
    return false; // sometimes
  }
}

```
