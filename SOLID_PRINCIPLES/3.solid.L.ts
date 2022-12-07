// L - Liskov Substitution principle 
// if class B is a subtype of class A , then we should be able to replace object of A with B wothout 
// breaking the behaviour of the program

// subclass should extend the capability of parent class not narrow it down

/*
  suppose we have a class A , any code that take Object of A and later point of time we change this 
  to object of B then the program should not break 
  so any class when we extend it then it should have all the capabilities of parent class.
  it should not happen that child class reduces its feature
*/

// lets understand it with an example
interface Bike {
  turnOnEngine(): void;
  accelerate(): void;
}

class MotorCycle implements Bike{
  private isEngineOn: boolean;
  private speed: number;

  turnOnEngine(){
    this.isEngineOn = true;
  }

  accelerate(): void {
    this.speed = this.speed + 10 ;
  }
}


class Bicycle implements Bike{
  private isEngineOn: boolean;
  private speed: number;
  turnOnEngine(){
    this.isEngineOn = true;
    throw new Error("it doesn't have engine");
  }

  accelerate(): void {
    this.speed = this.speed + 10 ;
  }
}

/*
  now let say we have a code and it uses Motorcycle object and if we replaces bicycle Object then 
  our code will break since it doesn't follow the liskov principle , above code is narrowing down the parent class 
  
*/
