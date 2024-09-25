// let's see open/ closed principle
// it says open for extension but closed for Modification

// let's understand with the previous example
class InvoiceDao2 {
    private inovice: InvoiceRe;
  
    constructor(invoice: InvoiceRe){
      this.inovice = invoice;
    } 
  
    public saveToDb(){
      //save into db
    }
  }

// now let's assume that this class is tested and live 
// now tomorrow another requirement comes and we want to save this data in to file as well then 
// we added another method to the above class

class InvoiceDao2Re {
  private inovice: InvoiceRe;

  constructor(invoice: InvoiceRe){
    this.inovice = invoice;
  } 

  public saveToDb(){
    //save into db
  }

  public saveToFile(){
    //save to file
  }
}

// does our above solution follows the open/ closed principles
// no it doesn't , so how can we improve it  

interface IInvoiceDao{
  save(inovice: InvoiceRe):void;
}

class DatabaseInvoiceDao implements IInvoiceDao{
  public save(inovice: InvoiceRe): void {
    //save to db
  }
}

class FileInvoiceDao implements IInvoiceDao{
  public save(inovice: InvoiceRe): void {
    
  }
}

// so above code follows the open/closed principle 
// so when tomorrow something comes to save to another db for example mongodb 
// then we wont make changes to these two class but we will make another class that will implement save in order to save data to mognodb
