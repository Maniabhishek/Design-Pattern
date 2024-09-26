// L - Liskov Substitution principle 
// if class B is a subtype of class A , then we should be able to replace object of A with B wothout 
// breaking the behaviour of the program

// subclass should extend the capability of parent class not narrow it down

/*
  suppose we have a class A , there is some program which take Object of A and later point of time we change this 
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
  in the above we see that Motorcycle implemants Bike and has both the method , whereas Bicycle is also an another class which implements Bike but we know bicycle doesn't have Engine so it will throw error  
  our code will break since it doesn't follow the liskov principle , above code is narrowing down the parent class 
  
*/
