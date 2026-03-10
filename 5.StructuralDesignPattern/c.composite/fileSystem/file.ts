import { FileSystem } from "./fileSystem.js"

export class File implements FileSystem {
    fileName: string
    constructor(fileName: string){
        this.fileName = fileName
    }

    ls(){
        console.log('filename: ', this.fileName)
    }
}

