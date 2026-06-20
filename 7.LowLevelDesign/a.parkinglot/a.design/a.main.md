### Functional Requirements

#### Entry flow:
- vehicle arrives at gate
- generate a ticket and assign slot based on vehicle type
- Mark slot as occupied
- Return EntryResult with success/failure status

#### Exit flow:
- user presents tickets at exits
- calculate fee based on pricing rules (minimum of flat and hourly pricing)
- process payment through the payment gateway
- Release slot and generate receipt
- Return ExitResult with success/failure status

#### Admin configurations:
- Add/Edit/Delete floors and slots
- Define pricing rules based on vehicle type (both flat and hourly rates)
- Update flat and hourly pricing for vehicle types
- view current parking status

> You can think of cases like server failures, where we may need a human to override instead of automated gates working by themselves

#### Non-function Requirements
- scalability: Must support multiple parking slots and thousands of slots
- Consistency: strong consistency for slot allocation and release
- Availability: High availability for entry/exit even during payment gateway failure
- latency: low latency (<500 ms ) for ticket generation and exit processing
- extensibility: easily add new vehicle types, pricing strategies, or gateways
- security: role based access for admin actions

#### Edge Cases
- Payment failure during exit - retry and hold slot
- ticket lost: allow admin override
- clock skew: system time validation
- slot state mismatch: periodic reconcilation

> 

#### step 1: lets follow the steps we are starting with *identify core entities*
- core entities
<img width="400" height="564" alt="image" src="https://github.com/user-attachments/assets/dfc41abd-246f-4279-8320-b24af283cdb7" />
- some other entities
<img width="360" height="564" alt="image" src="https://github.com/user-attachments/assets/7508d425-5b3d-4641-b0c2-bce93ff4545b" />

#### Step 2: Discuss interaction flow
- lets see the flows
  - Entry flow:
    - Driver enters, get a slot , generate ticket
  - Exit flow:
    - Driver exits, shows the ticket, price computed, (minimum of flat or hourly rate pricing), pays the amount (with retries if it fails), get the receipt, released, ticket deactivate to avoid multiple entry
  - Admin flow:
    - Admin requests to add floor, add slots, or update pricing 

> at this point start thinking about the classes, what all classes you are going to need




