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
