export class Item {
    code: number;
    name: string;
    price: number;
    constructor(code: number, name: string, price: number){
        this.code = code;
        this.name = name;
        this.price = price;
    }

    getName(){
        return this.name
    }

    getCode(){
        return this.code
    }

    getPrice(){
        return this.price
    }
}