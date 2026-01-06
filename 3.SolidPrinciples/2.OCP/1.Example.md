- below code violate OCP:
  - You must modify this method
  - Risk breaking existing logic
  - Retest everything
  - not closed for modification

```ts
class DiscountService {
  calculate(price: number, type: string): number {
    if (type === "STUDENT") {
      return price * 0.9;
    }
    if (type === "SENIOR") {
      return price * 0.8;
    }
    return price;
  }
}

```

## Step by step OCP refactor
#### step 1: identify what varies  
- discount flow changes and core flow does not

#### Step 2: create an abstraction

```ts
interface DiscountStrategy {
  apply(price: number): number;
}
```

#### step 3: Extend via new classes
```ts
class StudentDiscount implements DiscountStrategy {
  apply(price: number) {
    return price * 0.9;
  }
}

class SeniorDiscount implements DiscountStrategy {
  apply(price: number) {
    return price * 0.8;
  }
}
```

#### step 4:  closing existing code
```ts
class DiscountService {
  constructor(private discount: DiscountStrategy) {}

  calculate(price: number): number {
    return this.discount.apply(price);
  }
}

```


