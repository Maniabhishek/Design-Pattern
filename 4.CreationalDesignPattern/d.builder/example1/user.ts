export class User {
    id: string;
    name?: string | undefined;
    email?: string | undefined;
    age?: number | undefined;
    dob?: string | undefined;
    height?: number | undefined;
    weight?: number | undefined;
    picture?: string | undefined;    
    constructor(id: string, name?: string, email?: string, age?: number, dob?: string, height?: number, weight?: number, picture?: string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
        this.dob = dob;
        this.height = height;
        this.weight = weight;
        this.picture = picture;
    }
}
