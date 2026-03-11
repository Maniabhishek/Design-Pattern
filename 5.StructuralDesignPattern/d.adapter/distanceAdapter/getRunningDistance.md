-  as we see in this class we will not directly call the adaptee but we will pass the adaptee here and then this adapter class will convert it into desired format , give us back the result
```ts
import { DistanceAdaptee } from "../distanceAdaptee/DistanceAdaptee.js";
import { DistanceAdapter } from "./DistanceAdapter.js";

export class RunningDistanceKm implements DistanceAdapter {
    distanceAdaptee: DistanceAdaptee;
    constructor(distanceAdaptee: DistanceAdaptee){
        this.distanceAdaptee = distanceAdaptee
    }

    getDistanceInKm(): number {
        const disInMIles = this.distanceAdaptee.getDistanceInMiles()
        return disInMIles * 1.6
    }
}
```
