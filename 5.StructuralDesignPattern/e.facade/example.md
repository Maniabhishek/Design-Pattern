- the idea is to hide the complexity behind the single point entry
- for example, when you boot your computer , cpu starts, memory loads , hard drive spins, os loads, driver initializes
- but as a user we need not to do any of those , we just click the power button

```ts
class User {
    createUser(){
        console.log('user created')
    }
}

class Notification {
    sendNotification(){
        console.log('welcome email sent')
    }
}

class Wallet{
    create(){
        console.log('created wallet')
    }
}

class UserRegistrationFacade {
    user: User;
    notification: Notification;
    wallet: Wallet;

    constructor(user: User, notification: Notification, wallet: Wallet){
        this.user = user;
        this.notification = notification;
        this.wallet = wallet
    }

    register(){
        this.user.createUser();
        this.notification.sendNotification()
        this.wallet.create()
    }
}


```
