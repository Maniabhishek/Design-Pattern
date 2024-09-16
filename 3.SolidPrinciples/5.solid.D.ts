// D -  Dependency Inversion Principle
// Class should depend on interfaces rather than concrete classes 

/**
 * Suppose we have a class of MacBook that take KeyBoard and Mouse in constructor to initialize 
 * Suppose Keyboard interface has class that implements it is WiredKeyboard and BluetoothMouse
 * similarly for Mouse Interface has class that implements it is WiredMouse and BluetoothMouse
 */

interface Keyboard{

}

interface Mouse{

}

class WiredKeyboard implements Keyboard{

}

class WiredMouse implements Mouse{

}

class MacBook{
  private keyboard: WiredKeyboard;
  private mouse: WiredMouse;

  constructor(keyboard: WiredKeyboard, mouse: WiredMouse){
    this.keyboard = keyboard;
    this.mouse = mouse;
  }

}

/**
 * above class doesn't follow the depedency inversion principle
 * it depend on concrete class which means we cannot pass bluetooth keyboard and mouse 
 * so class should not depend on concrete class but it should depend upon interface 
 * so that it can be changed accordingly , whatever we passes
 */

 class MacBook2{
  private keyboard: Keyboard;
  private mouse: Mouse;

  constructor(keyboard: Keyboard, mouse: Mouse){
    this.keyboard = keyboard;
    this.mouse = mouse;
  }

}
