### What is Singleton Pattern?
- Singleton ensures that a class has only one instance and provides a global access point to it.
- 👉 Only one object exists
- 👉 Everyone uses the same object
- “One system, one brain.”

### 1️⃣ Simple Real-World Example (Printer 🖨️)
- Office has:
    - Many employees
    - One shared printer
    - You don’t create a new printer every time someone prints.

### ❌ Without Singleton (Wrong)
```ts
const printer1 = new Printer();
const printer2 = new Printer(); // ❌ two printers
```

### ✅ Singleton Printer
```ts
class Printer {
    private static instance: Printer
    private constructor(){}

    static getInstance(){
        console.log('Executing getInstance')
        if(!Printer.instance){
            console.log('instance doesnt exists')
            Printer.instance = new Printer()
        }
        console.log('returning printer')
        return Printer.instance
    }

    print(text: string){
        console.log('printing... ', text)
    }
}

export function CallPrinter(){
    const p1 = Printer.getInstance()
    const p2 = Printer.getInstance()

    console.log(p1 == p2)
}
```

### 2️⃣ Key Elements of Singleton

- Private constructor
- Prevents new
- Static instance
- Stores the single object
- Global access method
- getInstance()

### 3️⃣ Backend Example
```ts
class Logger {
    private static instance: Logger
    private constructor(){}

    getInstance(): Logger{
        if(!Logger.instance){
            Logger.instance = new Logger()
        }
        return Logger.instance
    }

    log(message: string){
        console.log('message: ', message)
    }
}
```

### another example
```ts
class Logger {
  private static instance: Logger;

  private constructor(private level: string) {}

  static init(level: string) {
    if (!Logger.instance) {
      Logger.instance = new Logger(level);
    }
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      throw new Error("Logger not initialized");
    }
    return Logger.instance;
  }
}

```

#### Thread Safety (Interview Trap 🚨)
- In multi-threaded languages (Java, C++) , Two threads may create two instances at same time
    - TypeScript / Node.js
        - Single-threaded
        - Event loop
        - Lazy singleton is safe in most cases
        - “In Node.js, Singleton is naturally safer due to single-threaded execution, but care is needed in clustered setups.”



### Eager vs Lazy Singleton
- eager Singleton (at load time)
```ts
class Printer {
    private static instance: Printer = new Printer()
    private constructor(){}

    static getInstance(){
        console.log('Executing getInstance')
        return Printer.instance
    }

    print(text: string){
        console.log('printing... ', text)
    }
}
```

- Lazy singleton
```ts
class Logger {
    private static instance: Logger
    private constructor(){}

    getInstance(): Logger{
        if(!Logger.instance){
            Logger.instance = new Logger()
        }
        return Logger.instance
    }

    log(message: string){
        console.log('message: ', message)
    }
}
```

| Lazy                | Eager               |
| ------------------- | ------------------- |
| Created when needed | Created immediately |
| Saves memory        | Simpler             |
| Slightly complex    | No condition        |


































