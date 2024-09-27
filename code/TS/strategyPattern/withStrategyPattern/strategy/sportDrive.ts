import { IDrive } from "./driveStrategy";

export class Sports implements IDrive{
    drive(){
        console.log('drive sport vehicle')
    }
}