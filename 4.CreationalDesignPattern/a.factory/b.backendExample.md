```ts
interface Notification {
    send(): void
}

class SMSNotification implements Notification {
    send(): void {
        console.log('sms sent')
    }
}

class MailNotification implements Notification {
    send(): void {
        console.log('Mail Notification')
    }
}

class PushNotification implements Notification {
    send(): void {
        console.log('Push Notification')
    }
}

class NotificationFactory{
    static Create(type: string): Notification{
        switch(type){
            case "mail":
                return new MailNotification()
            case "sms": 
                return new SMSNotification()
            case 'push':
                return new PushNotification()
            default:
                throw new Error("invalid type")
        }
    }
}

export function CallNotificationFactory(){
    const mail = NotificationFactory.Create("mail")
    mail.send()
}

```
