import { User } from "./user.js";

export class UserBuilder {
    id: string;
    name? : string;
    email? : string;
    age? : number;
    dob? : string;
    height? : number;
    weight? : number;
    picture? : string;

    constructor(id: string){
        this.id = id

    }

    setName(name: string): UserBuilder{
        this.name = name
        return this
    }

    setEmail(email: string): UserBuilder{
        this.email = email
        return this
    }

    setAge(age: number): UserBuilder{
        this.age = age
        return this
    }

    setDob(dob: string): UserBuilder{
        this.dob = dob
        return this
    }

    setHeight(height: number): UserBuilder{
        this.height = height
        return this
    }

    setWeight(weight: number): UserBuilder{
        this.weight = weight
        return this
    }

    setPicture(picture: string): UserBuilder{
        this.picture = picture
        return this
    }

    build(){
        return new User(
            this.id, this.name, this.email, this.age, this. dob, this.height, this.weight, this.picture
        )
    }
}
