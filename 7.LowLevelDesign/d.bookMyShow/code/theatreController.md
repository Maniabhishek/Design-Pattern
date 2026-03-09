```ts
import { Movie } from "./movie.js";
import { IShow } from "./show.js";
import { City, ITheatre } from "./theatre.js";

export class TheatreController {
    theatreByCity: Map<City, ITheatre[]>
    allTheatre: ITheatre[]

    constructor(){
        this.theatreByCity = new Map<City, ITheatre[]>
        this.allTheatre = []
    }
    addTheatre(city: City,theatre: ITheatre){
        let allTheatereInCity = this.theatreByCity.get(city) || []
        allTheatereInCity = [...allTheatereInCity!, theatre]
        this.theatreByCity.set(city, allTheatereInCity)
        this.allTheatre.push(theatre)
    }

    getAllShow(movieToWatch: Movie, city: City){
        try {
            console.log('running getAllShow movie id: ', movieToWatch.id)
            const theatreVsShows = new Map<string, IShow[]>()
            const theatresInCity = this.theatreByCity.get(city)
            if(theatresInCity == null){
                throw new Error('there is no theatre in this city')
            }
            for(const theatre of theatresInCity){
                const shows = theatre.getShows()
                const theatreName = theatre.getName()
                for(const show of shows){
                    const movie = show.getMovie()
                    if(movie.id === movieToWatch.id){
                        let currentlyAdded = theatreVsShows.get(theatreName) || []
                        currentlyAdded = [...currentlyAdded, show]
                        theatreVsShows.set(theatreName, currentlyAdded)
                    }
                }
            }
            console.log("theatreVsShows: ",theatreVsShows)
            return theatreVsShows
        } catch (error: any) {
            console.log(error?.message)
            return new Error(`error: ${error}`)
        }
    }
}
```
