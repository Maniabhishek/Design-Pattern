/*
  SOLID 
  S => Single Responsibility Principle
  O => Open/ Closed principle
  L => Liskov Substitution Principle
  I => Interface Segmented Principle
  D => Dependency Inversion Principle

  Advantages of following these principles:
    Help us write better and scalable code:
      Avoid duplicate code
      Easy to maintain 
      Easy to understand 
      Flexible software
      Reduce Complexity
*/

// Let's see , what is single responsibility principle
/*
  It means there should only be one reason to change the class
  let's understand with an example 
*/

class Product {
  Name: string;
  Price: number;
  Year: number;
  type: string;

  constructor(name: string, price: number,year: number, type: string){
    this.Name = name;
    this.Price = price;
    this.Year = year;
    this.type = type;
  }
}

// let create a Invoice class for calculation of amount 
class Invoice {
  private product: Product;
  private quantity: number;
  
  constructor(product: Product, quantity: number){
    this.product = product;
    this.quantity = quantity;
  }

  public calculateTotal(): number{
    const price: number = this.product.Price * this.quantity;
    return price;
  }

  public sendEmail(){
    // send email
  }

  public saveToDb(){
    // save to db
  }

}

/* now above class can be changed due to multiple reason:
  for example :
    if we want to add gst while calculating the total 
    or if we change the logic of generating the pdf 
    or if we also want to add the feature to save data to another db 
    then there are more than one reason to change the class 
*/

// lets improve it 
class InvoiceRe {
  private product: Product;
  private quantity: number;
  
  constructor(product: Product, quantity: number){
    this.product = product;
    this.quantity = quantity;
  }

  public calculateTotal(): number{
    const price: number = this.product.Price * this.quantity;
    return price;
  }
}

class InvoiceDao {
  private inovice: InvoiceRe;

  constructor(invoice: InvoiceRe){
    this.inovice = invoice;
  } 

  public saveToDb(){
    //save into db
  }
}

class InvoicePrinter{
  private invoice: InvoiceRe;

  constructor(invoice: InvoiceRe){
    this.invoice = invoice;
  }

  public generateInvoice(){
    // generates the invoice
  }
}

/*
so what have we done so far we only kept calculate total method in Invoice class 
and seperated the other method like saveToDb to another data access class 
and generateInvoice to another class 
now each of the class has only single reason to change the class 
*/


