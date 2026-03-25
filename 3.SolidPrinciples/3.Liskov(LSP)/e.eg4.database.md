```
class Database {
  connect() {
    console.log("Connected to DB");
  }
}

class CachedDatabase extends Database {
  connect() {
    console.log("Returning cached data, no DB connection");
  }
}

```

### Problem:
- 👉 Caller expects real DB connection
- 👉 Subclass changes meaning of connect() ❌

```ts
interface DataSource {
  getData(): string;
}

class Database implements DataSource {
  getData() {
    return "DB data";
  }
}

class Cache implements DataSource {
  getData() {
    return "Cached data";
  }
}
```
