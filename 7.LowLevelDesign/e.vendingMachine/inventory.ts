import { Item } from "./item.js";
import { ItemShelf } from "./ItemShelf.js";

export class Inventory {
    shelves: ItemShelf[] = []
    objectItem: Record<string, number> = {}
    constructor(capacity: number){
        this.shelves = new Array(capacity)
    }

    addShelves(idx: number, shelf: ItemShelf){
        console.log('adding shelves')
        this.shelves[idx] = shelf
        for(const item of shelf.getItems()){
            if(!this.objectItem[item.name]){
                this.objectItem[item.name] = 0
            }
            this.objectItem[item.name]! += 1
        }
    }

    getItem(code: number){
        for(const shelf of this.shelves){
            console.log(`checking shelf ${shelf.id}`)
            const item = shelf.getItem(code)
            if(item){
                return item
            }
        }
    }

    disperseItem(code: number){
        let isDispersed = false
        const item = this.getItem(code)
        for(const shelf of this.shelves){
            isDispersed = shelf.disperseItem(code)
            if(isDispersed){
                console.log('item found and disbursed')
                break
            }
        }
        if(!isDispersed){
            console.log('no item to disperse')
            throw new Error('no item to disperse')
        }

        if(item){
            this.objectItem[item.name]! -= 1
        }
        return isDispersed
    }

    addItem(item: Item){
        for(const shelf of this.shelves){
            if(shelf.capacity > shelf.currentCount){
                shelf.addItem(item)
                break;
            }
        }
        this.objectItem[item.name]! +=1
    }
    listItem(){
        for(const productName of Object.keys(this.objectItem)){
            console.log(`product name: ${productName} left: ${this.objectItem[productName]}`)
        }
    }
}