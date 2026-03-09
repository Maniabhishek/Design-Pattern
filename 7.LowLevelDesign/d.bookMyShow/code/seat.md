```ts
export enum SeatCategory {
    SILVER = 1,
    GOLD = 2,
    DIAMOND = 3
}

export interface ISeat {
    getSeatId(): number;
    setSeatId(id: number): void;
    getRow(): number;
    setRow(row: number): void;
    setCategory(seatCategory: SeatCategory): void;
    getCategory(): SeatCategory
}

export class Seat implements ISeat {
    id: number;
    row: number;
    seatCategory: SeatCategory
    constructor(id: number, row: number, seatCategory: SeatCategory){
        this.id = id;
        this.row = row;
        this.seatCategory = seatCategory
    }

    public getSeatId(){
        return this.id
    }

    public setSeatId(id: number): void {
        this.id = id
    }

    public getRow(){
        return this.row
    }

    public setRow(row: number){
        this.row = row
    }

    public setCategory(seatCategory: SeatCategory){
        this.seatCategory = seatCategory
    }

    public getCategory(){
        return this.seatCategory
    }
}


```
