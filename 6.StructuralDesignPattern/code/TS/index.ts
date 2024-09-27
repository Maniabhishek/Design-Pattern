abstract class BasePizza {
    abstract cost(): number
}

class Marghrita extends BasePizza {
    cost(){
        return 100
    }
}

class VegDelight extends BasePizza {
    cost(){
        return 200
    }
}

abstract class TopingDecorator extends BasePizza {

}

class ExtraCheese extends TopingDecorator {
    pizza: BasePizza
    constructor(basePizza: BasePizza){
        super()
        this.pizza = basePizza
    }
    cost(): number {
        return this.pizza.cost() + 20
    }
}

class Mushroom extends TopingDecorator {
    pizza: BasePizza
    constructor(basePizza: BasePizza){
        super()
        this.pizza = basePizza
    }

    cost(): number {
        return this.pizza.cost() + 40
    }
}


export function Call_decorator () {
    const pizza = new ExtraCheese(new Marghrita())
    console.log(pizza.cost())

    const mpizza = new ExtraCheese(new Mushroom(new VegDelight()))
    console.log(mpizza.cost())
}
