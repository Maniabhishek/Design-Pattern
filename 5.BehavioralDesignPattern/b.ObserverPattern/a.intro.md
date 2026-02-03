### What is the Observer Pattern?
- Observer Pattern defines a one-to-many relationship where multiple objects are notified automatically when one object changes state.

### In simple words:
- 👉 One object publishes events
- 👉 Many objects listen and react
- 👉 Publisher does NOT know who the listeners are

### Key Idea (Remember This)
>- “Don’t call me, I’ll notify you.”

### 1️⃣ Simple Real-World Example (Very Intuitive)
- Scenario: YouTube Channel
  - YouTube Channel → Subject
  - Subscribers → Observers
  - New video uploaded → All subscribers get notified
 
```ts
interface Subscribers {
    update(name: string): void
}

class Users implements Subscribers {
    username: string
    constructor(name: string){
        this.username = name
    }
    update(title: string){
        console.log(`video ${title} uploaded and notified to user ${this.username}`)
    }
}

class YoutubeChannel {
    private subscribers: Subscribers[] = []

    upload(title: string){
        console.log('uploaded video')
        this.notify(title)
    }

    subscribe(s: Subscribers){
        this.subscribers.push(s)
    }

    unsubscribe(subscriber: Subscribers){
        this.subscribers = this.subscribers.filter(s => s!== subscriber )
    }

    notify(title: string){
        this.subscribers.forEach(s => s.update(title))
    }
}

export function CallYoutubeChannel(){
    const user1 = new Users("abhi")
    const user2 = new Users("abhi2")
    const user3 = new Users("abhi3")

    const yt = new YoutubeChannel()
    yt.subscribe(user1)
    yt.subscribe(user2)
    yt.subscribe(user3)

    yt.upload("daldal")
}
```

### 2️⃣ Real Backend Example (Node.js / TypeScript)
- Scenario: Order Placed Event, When an order is placed:
    - Send email
    - Send SMS
    - Update inventory
    - Trigger analytics
### ❌ Without Observer Pattern (Very Common Mistake)
```ts
class OrderService {
  placeOrder() {
    console.log("Order placed");

    console.log("Send email");
    console.log("Send SMS");
    console.log("Update inventory");
    console.log("Update analytics");
  }
}
```

- ❌ Tightly coupled
- ❌ Hard to extend
- ❌ Violates SRP & OCP

### ✅ Observer Pattern for Backend Events
#### Step 1: Observer interface
```ts
interface OrderObserver {
  onOrderPlaced(orderId: string): void;
}
```

#### Step 2: Observers (Side effects)
```ts
class EmailService implements OrderObserver {
  onOrderPlaced(orderId: string) {
    console.log(`Email sent for order ${orderId}`);
  }
}

class InventoryService implements OrderObserver {
  onOrderPlaced(orderId: string) {
    console.log(`Inventory updated for ${orderId}`);
  }
}

class AnalyticsService implements OrderObserver {
  onOrderPlaced(orderId: string) {
    console.log(`Analytics updated for ${orderId}`);
  }
}
```

#### Step 3: Subject (Publisher)
```ts
class OrderService {
  private observers: OrderObserver[] = [];

  addObserver(observer: OrderObserver) {
    this.observers.push(observer);
  }

  placeOrder(orderId: string) {
    console.log("Order placed:", orderId);
    this.notify(orderId);
  }

  private notify(orderId: string) {
    this.observers.forEach(o => o.onOrderPlaced(orderId));
  }
}

```

#### Step 4: Wire it together
```ts
const orderService = new OrderService();

orderService.addObserver(new EmailService());
orderService.addObserver(new InventoryService());
orderService.addObserver(new AnalyticsService());

orderService.placeOrder("ORD-1");
```
