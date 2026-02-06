### Scenario
- Your backend can run on:
    - AWS
    - GCP
- Each cloud provides:
    - Storage
    - Queue
 
```ts
interface Storage {
    upload(): void
}

interface Queue {
    send(): void
}

class AwsStorage implements Storage{
    upload(): void {
        console.log('aws storage')
    }
}

class AwsQueue implements Queue {
    send(): void {
        console.log('aws queue')
    }
}

class GCPStorage implements Storage {
    upload(): void {
        console.log('aws storage')
    }
}

class GCPQueue implements Queue {
    send(): void{
        console.log('GCP Queue')
    }
}

interface CloudFactory {
    createStorage(): Storage
    createQueue(): Queue
}

class AwsFactory implements CloudFactory {
    createQueue(): Queue {
        return new AwsQueue()
    }

    createStorage(): Storage{
        return new AwsStorage()
    }
}

class GCPFactory implements CloudFactory {
     createQueue(): Queue {
        return new GCPQueue()
    }

    createStorage(): Storage{
        return new GCPStorage()
    }
}

function Usage(cfactory: CloudFactory){
    const storage = cfactory.createStorage()
    const queue = cfactory.createQueue()

    storage.upload()
    queue.send()
}

export function CallUsage(){
    Usage(new AwsFactory())
}
```
