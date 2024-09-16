// I - interface segmented Principle
/*
  interfaces should be such , that one should not implement unnecessary functions they do not need 
*/

interface RestaurantEmployee{
  washDishes(): void;
  serveFood(): void;
  cookFood(): void;
}

class Waiter implements RestaurantEmployee{
  washDishes(): void {
    //doesn't wash dishes
  }
  serveFood(): void {
    //serve food
  }

  cookFood(): void {
    // doesn't cook food
  }
}

/*
  now in above class we have some unnecessary function which we dont even need it 
  hence we should create interface in such a way that , only required funciton are implemented 
  so create small interface for each class
*/

