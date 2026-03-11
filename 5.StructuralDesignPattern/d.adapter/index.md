- adapter design patter is used in case when you have already an existing object , but you want the result in other format , you can use this adapter design format

```ts
import { RunningDistance } from "./distanceAdaptee/getRunningDistance.js";
import { RunningDistanceKm } from "./distanceAdapter/getRunningDistance.js";

export function CallAdapter(){
    const adaptee = new RunningDistance()

    const adapter = new RunningDistanceKm(adaptee)
    console.log(adapter.getDistanceInKm())
}
```
