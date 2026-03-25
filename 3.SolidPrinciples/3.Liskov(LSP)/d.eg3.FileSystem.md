```ts
class FileStorage {
  save(file: string) {
    console.log("Saving file:", file);
  }
}

class ReadOnlyStorage extends FileStorage {
  save(file: string) {
    throw new Error("Cannot save in read-only storage");
  }
}
```
### Problem:
- 👉 Caller expects save() to work
- 👉 Subclass breaks it ❌

```ts
interface ReadableStorage {
  read(): string;
}

interface WritableStorage {
  save(file: string): void;
}

class S3Storage implements ReadableStorage, WritableStorage {
  read() {
    return "file data";
  }

  save(file: string) {
    console.log("Saved:", file);
  }
}

class ReadOnlyStorage implements ReadableStorage {
  read() {
    return "readonly data";
  }
}
```

