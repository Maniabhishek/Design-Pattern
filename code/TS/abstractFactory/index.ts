interface AbstractProductA{
    usefulFunctionA(): string
}

class ConcreteProductA1 implements AbstractProductA{
    public usefulFunctionA(): string {
        return 'The result of the product A1.'
    }
}

class ConcreteProductA2 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'The result of the product A2'
    }
}

interface AbstractProductB {
    usefulFunctionB(): string;
}

class ConcreteProductB1 implements AbstractProductB{
    usefulFunctionB(): string {
        return 'The result of the product B1'
    }
}

class ConcreteProductB2 implements AbstractProductB{
    usefulFunctionB(): string {
        return 'The result of the product B2'
    }
}

interface AbstractFactory {
    createProductA(): AbstractProductA
    createProductB(): AbstractProductB
}

class ConcreteFactory1 implements AbstractFactory{
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1()
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB1()
    }
}

class ConcreteFactory2 implements AbstractFactory{
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2()
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB2()
    }
}

function clientCode(factory: AbstractFactory){
    const productA = factory.createProductA()
    console.log(productA.usefulFunctionA())

    const productB = factory.createProductB()
    console.log(productB.usefulFunctionB())
}

export function call_ClientCode_AbstractFactory(){
    clientCode(new ConcreteFactory1())
}
