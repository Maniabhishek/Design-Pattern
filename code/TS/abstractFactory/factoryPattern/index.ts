
// interface Product
interface Product {
    operation(): string
}

// Product is being implemented by ConcreteProduct1

class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{concrete product 1}'
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{concrete product 2}'
    }
}

abstract class Creator {
    abstract factoryMethod(): Product

    someOperation(): string{
        const product = this.factoryMethod()

        return `Creator: The same creator's code has just worked with ${product.operation()}`
    }
}

class ConcreteCreate1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1()
    }
}

class ConcreteCreate2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2()
    }
}

function clientCode(creator: Creator){
    console.log(creator.someOperation())
}



export function CallClientCode(){
    clientCode(new ConcreteCreate1())
    clientCode(new ConcreteCreate2())
}
