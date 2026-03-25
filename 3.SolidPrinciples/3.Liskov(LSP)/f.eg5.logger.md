```ts
class Logger {
  log(message: string) {
    console.log(message);
  }
}

class SilentLogger extends Logger {
  log(message: string) {
    // do nothing
  }
}
```

### Problem:
- 👉 Caller expects logs
- 👉 Subclass silently ignores ❌

```ts
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(message);
  }
}

class NullLogger implements Logger {
  log(message: string) {
    // explicitly designed no-op
  }
}
```
