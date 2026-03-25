```ts
class Notification {
    send(msg: string){
        console.log('sent sms')
    }
}

class SMSNotification extends Notification {
    send(msg: string){
        if(msg.length > 200){
            throw new Error('message length exceeded')
        }
    }
}
```

- parent allows any message but chlid restricts it , Behavioral change -> LSP violation

```ts
interface Notification {
  send(message: string): void;
}

class EmailNotification implements Notification {
  send(message: string) {
    console.log("Email:", message);
  }
}

class SMSNotification implements Notification {
  send(message: string) {
    console.log("SMS:", message.slice(0, 160));
  }
}
```
