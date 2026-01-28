### Interface Segregation Principle
- Clients should not be forced to depend on interfaces they do not use.

#### Simple meaning:
- Don’t create fat / bloated interfaces
- Prefer small, focused interfaces
- A class should implement only what it actually needs

```ts
interface Worker {
  work(): void;
  eat(): void;
  sleep(): void;
}

class Robot implements Worker {
  work() {}
  eat() {
    throw new Error("Robots don't eat");
  }
  sleep() {
    throw new Error("Robots don't sleep");
  }
}

```

### what's wrong in the above code
- Robot class is forced to implement method it doesnt need
- Leads to runtime errors
- Clear ISP violation

### ISP Compliant design
```ts
interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

interface Sleepable {
  sleep(): void;
}

class Human implements Workable, Eatable, Sleepable {
  work() {}
  eat() {}
  sleep() {}
}

class Robot implements Workable {
  work() {}
}
```
- no dummy methods
- no unexpected exceptions
- Clean contracts

### Why ISP Matters (Real Backend Example)
```ts
interface Repository{
    save(): void
    delete(): void
    getData(): void
}

export class RepositoryService implements Repository {
    save(): void{
    }

    delete(){
    }
    getData(){
    }
}
```
### what violates in above interface
- read repository is forced to implement save and delete method

### Better approach 
```ts
interface ReadRepository<T> {
  find(): T[];
}

interface WriteRepository<T> {
  save(item: T): void;
  delete(id: string): void;
}
```
-  create seperate interface for read and write repository
