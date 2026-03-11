- this is an interface for an existing scenario , the problem is , we need to convert to or adapt to another object
```ts
import { DistanceAdaptee } from "./DistanceAdaptee.js";

export class RunningDistance implements DistanceAdaptee {
    getDistanceInMiles(): number{
        return 30
    }
}
```
