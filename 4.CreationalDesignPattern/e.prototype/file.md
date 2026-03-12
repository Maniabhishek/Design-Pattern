- when object creation is expensive that is when we should prototype pattern, this is quiet a simple design pattern
- whenever a object creation involves , database interaction , object creation have heavy configuration, object creation takes time, instead of creating object everytime , just create a base object once and clone it afterwards
- 
### Real World Example
- Photocopy MachineImagine you have a document.
- Instead of rewriting the document again and again, you:
- Original Document → Photocopy → Many copies
- The original document is the prototype.
- Each copy is a clone.

### Structure of Prototype Pattern, We need:
- Prototype Interface (clone method)
- Concrete Prototype (actual object)
- Client uses clone()

```ts
class HttpRequest{
    url: string;
    headers: Record<string, string>;
    method: string;

    constructor(url: string, headers: Record<string, string>, method: string){
        this.url = url;
        this.headers = headers;
        this.method = method;
    }

    clone(){
        return new HttpRequest(this.url, this.headers, this.method)
    }
}

export function CallHttpRequest(){
    const baseRequest = new HttpRequest('/user', {'authorization': 'nasfjsdf'}, 'get')

    const request2 = baseRequest.clone()
    request2.url = '/event'
}
```
