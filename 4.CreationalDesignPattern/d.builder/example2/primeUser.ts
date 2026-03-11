import { UserBuilder } from "./userBuilder.js";

export class PrimeUser extends UserBuilder {

    setPrevilege(previlege: string[]){
        this.previlege = previlege
        return this
    }
}
