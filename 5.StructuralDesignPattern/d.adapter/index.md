```ts
import { RunningDistance } from "./distanceAdaptee/getRunningDistance.js";
import { RunningDistanceKm } from "./distanceAdapter/getRunningDistance.js";

export function CallAdapter(){
    const adaptee = new RunningDistance()

    const adapter = new RunningDistanceKm(adaptee)
    console.log(adapter.getDistanceInKm())
}
```
