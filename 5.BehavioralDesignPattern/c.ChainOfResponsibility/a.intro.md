### Application Usage 
-  ATM / Vending machine
-  Design Logger

```ts
enum LogLevel {
    WARN = 1,
    ERROR = 2,
    INFO = 3,
    DEBUG = 4
}

abstract class Logger {
    logger: Logger | null = null
    constructor(logger: Logger | null){
        this.logger = logger
    }

    log(loglevel: LogLevel, message: string){
        if(loglevel !== null){
            this.logger?.log(loglevel, message)
        }
    }
}

class InfoLogger extends Logger {
    constructor(logger: Logger | null){
        super(logger)
    }

    log(loglevel: LogLevel, message: string){
        if(loglevel === LogLevel.INFO){
            console.log('INFO: ', message)
        }else {
            super.log(loglevel, message)
        }
    }
}

class DebugLogger extends Logger {
    constructor(logger: Logger | null){
        super(logger)
    }

    log(loglevel: LogLevel, message: string){
        if(loglevel === LogLevel.DEBUG){
            console.log('DEBUG: ', message)
        }else {
            super.log(loglevel, message)
        }
    }
}

class WarnLogger extends Logger {
    constructor(logger: Logger | null){
        super(logger)
    }

    log(loglevel: LogLevel, message: string){
        if(loglevel === LogLevel.WARN){
            console.log('WARN: ', message)
        }else {
            super.log(loglevel, message)
        }
    }
}

export function CallLogger(){
    const logger = new InfoLogger(new DebugLogger(new WarnLogger(null)))

    logger.log(LogLevel.INFO, "this is info")
    logger.log(LogLevel.DEBUG, "this is debug")
    logger.log(LogLevel.WARN, "this is warn")
}
```

- well how did i come up with the above code , lets understand
- we need to design logger, which will have different level
- so we first created an abstract class with a log method
- and then we created a different level log class and their constructor initilizes next class in chain
- this way it keeps checking the chain of funcitons


### another way of creating chains
```ts
enum LogLevel {
    WARN = 1,
    INFO = 2,
    DEBUG = 3
}

abstract class Logger {
    logLevel: LogLevel
    next: Logger | null = null
    constructor(logLevel: LogLevel){
        this.logLevel = logLevel
    }

    setNext(logger: Logger){
        this.next = logger
        return logger
    }

    log(loglevel: LogLevel, message: string){
        if(loglevel === this.logLevel){
            this.write(loglevel, message)
        }
        if(this.next){
            this.next.log(loglevel, message)
        }
    }

    abstract write(logLevel: LogLevel, message: string): void
}

class InfoLogger extends Logger{
    write(logLevel: LogLevel, message: string): void {
        if(logLevel === LogLevel.INFO){
            console.log('INFO: ', message)
        }
    }
}

class DebugLogger extends Logger{
    write(logLevel: LogLevel, message: string): void {
        if(logLevel === LogLevel.DEBUG){
            console.log('Debug: ', message)
        }
    }
}

class WarnLogger extends Logger{
    write(logLevel: LogLevel, message: string): void {
        if(logLevel === LogLevel.WARN){
            console.log('WARN: ', message)
        }
    }
}

export function CallLogger2(){
    const info = new InfoLogger(LogLevel.INFO)
    const debug = new DebugLogger(LogLevel.DEBUG)
    const warn = new WarnLogger(LogLevel.WARN)

    info.setNext(debug).setNext(warn)

    info.log(LogLevel.INFO, "this is INFO ")
    info.log(LogLevel.DEBUG, "this is DEBUG ")
    info.log(LogLevel.WARN, "this is WARN ")
}

```
