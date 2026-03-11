import { UserBuilder } from "./userBuilder.js"

export class GoldUser extends UserBuilder {

    setPrevilege(previleges: string[]){
        this.previlege = previleges
        return this
    }
}
