```ts
import { ISeat, Seat } from "./seat.js";

export interface IScreen {
    getSeats(): Seat[]
    setSeats(seats: Seat[]): void
    getScreenId(): number;
    setScreenId(id: number): void;
}

export class Screen implements IScreen {
    id: number;
    seats: Seat[] = []
    constructor(id: number){
        this.id = id
    }

    public getSeats(){
        return this.seats
    }

    public setSeats(seats: Seat[]): void {
        this.seats = seats
    }

    public setScreenId(id: number): void {
        this.id = id
    }

    public getScreenId(): number{
        return this.id
    }
}
```
