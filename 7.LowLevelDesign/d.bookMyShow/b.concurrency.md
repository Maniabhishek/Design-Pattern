- now there can be a scenario when multiple users try to book the same seat at the same time, eg., seat 15 user1 and user2 both wants to book the same ticket at the same time, we should not allot same seat to the multiple user
- one more important thing is when a user books a ticket , that seat should be locked for atleast certain period of time, and once ticket is booked without any failure , we need to lock that seat

- lets discuss about the first topic how we can actually efficiently book ticket concurrently
- when two users try to book the same ticket at the same time , the very important point is taking a lock on the seat
- there are two ways we can take the lock
  - optimistic approach
  - pessimistic approach

### pessimistic approach
-  what happens in pessimistic approach the moment a user comes to book a seat it will immediately lock the seat and no other transaction can actually book the seat
-  is this a good approach , lets understand , when a users transaction books a seat and takes a locks on it, now all the other user who fethces the seat to book they will find that seat locked , imagine a millions of user on your application and all of them start booking at the first few request will lock all those seats and other user will starts to see all the seats as blocked even when it is not necessary that all the transaction actually gets successful, hence this approach in this case is not ideal

### optimistic approach 
- now two or more transaction starts , we wont immediately take the lock on the seat but instead both the transaction can start the process , and at the time of update we will lock the seat
- so how exactly we will do it , we will use versioning initially lets say that a seat will have a v1 version 
