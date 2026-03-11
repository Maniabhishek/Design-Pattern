- this is the class which is implementing the interface , and it returns us distance in miles , now we need adapter class which can give us distance in KM

```ts
import { DistanceAdaptee } from "./DistanceAdaptee.js";

export class RunningDistance implements DistanceAdaptee {
    getDistanceInMiles(): number{
        return 30
    }
}
```
