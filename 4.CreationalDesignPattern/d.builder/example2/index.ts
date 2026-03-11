import { GoldUser } from "./goldUser.js";
import { PrimeUser } from "./primeUser.js";
import { UserBuilder } from "./userBuilder.js";

export class CreateUser {
    userBuilder: UserBuilder;
    constructor(userBuilder: UserBuilder){
        this.userBuilder = userBuilder
    }

    create(){
        if(this.userBuilder instanceof PrimeUser){
            return this.createPrimeUser()
        }else if(this.userBuilder instanceof GoldUser){
            return this.createGoldUser()
        }
    }

    createGoldUser(){
        return this.userBuilder.setEmail('abhi@gmail.com').setAge(29).setPrevilege(['gold']).build()
    }

    createPrimeUser(){
        return this.userBuilder.setEmail('mani@gmail.com').setAge(39).setPrevilege(['prime']).build()
    }
}

export function CallCreateUser(){
    const goldUser = new CreateUser(new GoldUser('abc234234'))
    const primeUser = new CreateUser(new PrimeUser('cdf23423'))

    const guser = goldUser.create()
    const puser = primeUser.create()

    guser?.toString()
    puser?.toString()


}
