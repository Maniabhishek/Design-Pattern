- well the idea is simple , whenever we have objects , and the calling method when uses those classes , it is possible that object can be null, so avoid any error we use if (obj !== null) or when obj== null then we return error
- so we can n number of situation where our code will call obj !== null, so to avoid this, we can use this design pattern

<img width="568" height="287" alt="image" src="https://github.com/user-attachments/assets/6a3167ed-f045-47d2-af74-fbd7a001a2b3" />


```ts
interface IPayment {
    pay(): void
    getPaymentStatus(): string
}

class CardPayment implements IPayment{
    pay(){
        console.log('card payment done')
    }

    getPaymentStatus(): string {
        return "PAID"
    }
}

class UPIPayment implements IPayment {
    pay(){
        console.log('payment done')
    }

    getPaymentStatus(): string {
        return "PAID"
    }
}

class NullPayment implements IPayment {
    pay(){
        console.log('no payment')
    }

    getPaymentStatus(): string {
        return "no status"
    }
}

class PaymentService {
    constructor(private pyament: IPayment){}

    pay(){
        this.pyament.pay()
        this.pyament.getPaymentStatus()
    }
}

function GetPayments(type: string){
    if(type === 'CARD'){
        return new CardPayment()
    }else if(type === 'UPI'){
        return new UPIPayment()
    }else {
        return new NullPayment()
    }
}

export function CallPayments(){
    const payment = GetPayments('wallet')
    payment.pay()

    const cardPayment = GetPayments('CARD')
    cardPayment.pay()
}

```
