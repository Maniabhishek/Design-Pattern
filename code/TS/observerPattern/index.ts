interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notifyAll(): void;
}

class ConcreteSubject implements Subject {
    /**
     * @type {number}
     */
    public state: number = 0;

    /**
     * @type {Observer[]}
     */
    private observers: Observer[] = [];

    public attach(observer: Observer): void {
        const isExist = this.observers.includes(observer)
        if(isExist){
            return console.log('Subject: Observer has been attached already.')
        }
        this.observers.push(observer)
    }

   public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer)
        if(observerIndex === -1) {
            return console.log('Subject: NonExistent observer')
        }
        this.observers.splice(observerIndex, 1)
        console.log('Subject: Detached an observer.')
    }

    public notifyAll(): void {
        for(const observer of this.observers){
            observer.update(this)
        }
    }

    /**
     * Usually, the subscription logic is only a fraction of what a Subject can
     * really do. Subjects commonly hold some important business logic, that
     * triggers a notification method whenever something important is about to
     * happen (or after it).
     */
    public someBusinessLogic(){
        console.log('\nSubject: I\'m doing something important')
        this.state = Math.floor(Math.random() * (10 + 1))

        console.log(`Subject: My state has just changed to: ${this.state}`)
        this.notifyAll()
    }
}

interface Observer {
    update(subject: Subject): void
}

/**
 * Concrete Observers react to the updates issued by the Subject they had been
 * attached to.
 */

class ConcreteObserverA implements Observer {
    // subject: Subject
    // constructor(subject: Subject){
    //     this.subject = subject
    // }
    public update(subject: Subject): void {
        if(subject instanceof ConcreteSubject && subject.state <3) {
            console.log('ConcreteObserverA: Reacted to the event')
        }
    }
}

class ConcreteObserverB implements Observer {
    public update(subject: Subject): void {
        if(subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >=2) ){
            console.log('ConcreteObserverB: Reacted to the event')
        }
    }
}

/**
 * client code
 */

export function Call_executeObserverPattern(){

    const subject = new ConcreteSubject()
    // const observerA = new ConcreteObserverA(subject)
    const observerA = new ConcreteObserverA()
    const observerB = new ConcreteObserverB()
    subject.attach(observerA)
    subject.attach(observerB)
    
    subject.someBusinessLogic()
    subject.someBusinessLogic()
    subject.someBusinessLogic()
    
    subject.detach(observerA)
    subject.detach(observerB)
}
