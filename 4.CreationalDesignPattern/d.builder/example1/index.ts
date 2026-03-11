import { UserBuilder } from "./userBuilder.js";

export function CallUserBuilder(){
    const userbuilder = new UserBuilder("abc2343")

    const user = userbuilder.setAge(29).setEmail('abhishek@gmail.com').build()
    console.log(user)
}
