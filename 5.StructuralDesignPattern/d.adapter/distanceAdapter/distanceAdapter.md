- this is a totally different class which we will use it as an adapter to convert the mile into to KM

```ts
export interface DistanceAdapter {
    getDistanceInKm(): number
}
```
