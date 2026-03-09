```ts

import { Movie } from "./movie.js";
import { IScreen } from "./screen.js";

export interface IShow {
    getBookedSeatIds(): number[]
    getMovie(): Movie
    getScreen(): IScreen
    setBookedSeatIds(bookedSeats: number[]): void
}

export class Show implements IShow {
    showId: number;
    movie: Movie;
    screen: IScreen;
    showStartTime: number;
    bookedSeatedIds: number[];

    constructor(showId: number, movie: Movie, screen: IScreen, showStartTime: number, bookedSeatIds: number[]) {
        this.showId = showId;
        this.movie = movie;
        this.screen = screen;
        this.showStartTime = showStartTime;
        this.bookedSeatedIds = bookedSeatIds;
    }

    public getBookedSeatIds(): number[] {
        return this.bookedSeatedIds
    }

    public setBookedSeatIds(bookSeats: number[]){
        try {
            if(!bookSeats.every(bookSeat => !this.bookedSeatedIds.includes(bookSeat))){
                throw new Error('seat already booked')
            }
            console.log('successfully booked seat')
            this.bookedSeatedIds = [...this.bookedSeatedIds, ...bookSeats]
        } catch (error: any) {
            console.log(error.message)
            return error
        }
    }

    public getMovie(): Movie {
        return this.movie
    }

    public getScreen(): IScreen {
        return this.screen
    }
}

```
