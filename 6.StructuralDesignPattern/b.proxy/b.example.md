```ts
interface IFileService {
    downloadFile():void
}

class FileService implements IFileService {
    constructor(){
        console.log('downloading file')
    }
    downloadFile(): void {
        console.log('file name downloaded')
    }
}

class FileServiceProxy implements IFileService {
    fileservice: IFileService

    constructor(private userRole: string){
        this.fileservice = new FileService()
        this.userRole = userRole
    }

    downloadFile(): void {
        if(this.userRole !== 'admin'){
            console.log('unauthorized')
            return
        }

        this.fileservice.downloadFile()
    }
}

export function CallFileService(){
    const file = new FileServiceProxy('user')
    file.downloadFile()
}
```

- in the above code, we have file service interface and its implementation
- then what we want is to add access authorization of user , whether we need to verify user before downloading file

```ts
interface IImage {
    display(): void
}

class Image implements IImage {
    fileName: string
    constructor(name: string){
        this.fileName = name
        console.log('downloading file')
    }

    display(){
        console.log('image here: ', this.fileName)
    }
}

class ImageProxy implements IImage {
    imageObj: IImage | null = null
    constructor(){}
    display(){
        if(!this.imageObj){
            this.imageObj = new Image("abc.com")
        }
        this.imageObj.display()
    }
}
```

