```ts
class PaymentProcessor {
    pay(){
        console.log('payment done')
    }
}

class FreePaymentProcessor extends PaymentProcessor{
    pay(){
        throw new Error('no implementation')
    }
}
```
- A subclass breaks LSP if it:
  - ❌ Throws new exceptions not expected

```ts
interface Payment{
    pay():void
}

class PaymentProcessor2 implements Payment {
    pay(){
        console.log('payment ....')
    }
}

class FreePaymentProcessor2 {
    applyFree(){
        console.log('no payment needed')
    }
}
```
