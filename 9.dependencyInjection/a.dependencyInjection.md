- problem: assume you have order service in which you have inventoryService, paymentservice, NotificationService, below is the code

```
class OrderService {
  private inventoryService: InventoryService = new InventoryService()
  private paymentService: PaymenteService = new RazorPayService()
  private notificationService: NotificationService = new NotificationService()

  public void checkout(){
    this.inventory.GetItem()
    this.paymentService.Pay()
    this.notficationService.sendConfirmation()
  }
}
```

-  in the above code you can see a issue like:
  - hard coded logic: tightly coupled OrderService with specific implementations
  - scalability issue : tomorrow if i want to have a different payment method it will be a problem as it is only for  RazorPayService
  - difficult to test : as original function will be called , no mocks can be used in this case
