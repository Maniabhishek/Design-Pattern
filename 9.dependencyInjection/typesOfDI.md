- three types of DI
  - Constructor injection
    - immutable dependecies
    - test - friendly
    - enforces required depedencies 
  - Setter Injection
    - mutable
    - can be misused by not calling setter 
  - Interface Injection
    - rarely used 

### Interface injection example
```
interface InjectableLogger{
  void injectableLogger(logger: logger): void
}
```
