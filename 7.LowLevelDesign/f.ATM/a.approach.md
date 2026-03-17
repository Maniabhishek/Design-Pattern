- we ae going to develop an ATM machine, its working , the design pattern we are going to use
- lets think what happens when a user comes to ATM , user comes with a card -> insert the card -> authenticate itself -> list operations -> perform operations and done

<img width="632" height="311" alt="image" src="https://github.com/user-attachments/assets/355b092e-6821-4554-bddc-d3f129d69a92" />

- so if you see in the above image , we can clearly notice that , certain operations are performed at particular state , not all of the operations can be performed in any state, this means we can use state design pattern

<img width="466" height="383" alt="image" src="https://github.com/user-attachments/assets/ff90b9d4-16a7-427e-9d65-43fe99ef1c98" />

### UML diagram
<img width="715" height="249" alt="image" src="https://github.com/user-attachments/assets/f5e7fc4a-69ac-4d91-965d-d8c2b7def40b" />

<img width="1130" height="585" alt="image" src="https://github.com/user-attachments/assets/d4b7bb1c-375a-432b-98c6-9f93b2262e72" />

- as in the image above we can see that we have implemented withdrawal processor this is using chain of responseibility as withdrawal of moneny can be mix of denominations, hence we are using chain of responsibility
