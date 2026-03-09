```ts
import { IScreen } from "./screen.js";
import { IShow } from "./show.js";

export interface ITheatre {
    setShow(shows: IShow[]): void
    getShows(): IShow[]
    getCity(): City
    getScreen(): IScreen[]
    setScreen(screen: IScreen[]): void
    getName(): string
}

export enum City {
    Bangalore = "BANGALORE",
    Mumbai = "DELHI"
}

export class Theatre implements ITheatre {
    theatreId: number;
    name: string
    screen: IScreen[];
    city: City;
    shows: IShow[];
    constructor(theatreId: number, screen: IScreen[] = [], city: City, shows: IShow[] = [], name: string){
        this.city = city;
        this.theatreId = theatreId;
        this.screen = screen
        this.shows = shows
        this.name = name
    }

    getName(){
        return this.name
    }

    setShow(shows: IShow[]){
        this.shows = shows
    }

    getShows(): IShow[]{
        return this.shows
    }

    getCity(){
        return this.city
    }

    getScreen(){
        return this.screen
    }

    setScreen(screen: IScreen[]){
        this.screen = screen
    }
}

```
