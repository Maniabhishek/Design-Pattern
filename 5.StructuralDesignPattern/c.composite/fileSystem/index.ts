import { Directory } from "./directory.js";
import { File } from "./file.js";

class CallFileSystem {
    execute(){
        const directors = new Directory('Director')
        const directorFile = new File('director1')
        directors.addFileToDirectory(directorFile)

        const managers = new Directory('Managers')
        const managersFile = new File('manager1')

        managers.addFileToDirectory(managersFile)
        directors.addFileToDirectory(managers)

        const employee = new Directory('Employee')
        const empFile = new File('employee1')
        employee.addFileToDirectory(empFile)
        employee.addFileToDirectory(new File('employee2'))
        employee.addFileToDirectory(new File('employee3'))

        managers.addFileToDirectory(employee)
        directors.ls()
    }
}

export function CallFiles(){
    const fs = new CallFileSystem()
    fs.execute()
}
