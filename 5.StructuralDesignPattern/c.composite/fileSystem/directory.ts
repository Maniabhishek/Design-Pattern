import { FileSystem } from "./fileSystem.js";

export class Directory implements FileSystem {
    directoryName: string;
    fileSystem: FileSystem[];
    constructor(directoryName: string){
        this.directoryName = directoryName
        this.fileSystem = []
    }

    addFileToDirectory(fileSystem: FileSystem){
        this.fileSystem.push(fileSystem)
    }

    ls(){
        console.log(this.directoryName , ': ')
        for(const file of this.fileSystem){
            file.ls()
        }
    }
}
