import { IDrive } from "./driveStrategy";

export class OffRoad implements IDrive {
    drive ( ) {
        console.log('off road vehicle')
    }
}