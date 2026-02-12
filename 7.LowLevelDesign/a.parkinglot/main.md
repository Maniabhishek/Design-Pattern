### 1️⃣ How to START in an Interview (Very Important)
- “Designing a Parking Lot”

### ✅ Step 1: Ask Clarifying Questions

- “Before designing, I’d like to clarify requirements.”
- What vehicle types? (Car, Bike, Truck?)
- Multiple floors?
- Entry & Exit gates?
- Payment needed?
- Spot assignment automatic or manual?
- Concurrency? (multiple cars entering)

### 2️⃣ Final Assumptions 
- For this design, we’ll assume:
    - Vehicle types: Bike, Car, Truck
    - Spot types: BikeSpot, CarSpot, TruckSpot
    - Multiple floors
    - Automatic spot assignment
    - Entry & Exit
    - Payment based on time

### 3️⃣ Core Design Principles (Say This)
- “We’ll follow SOLID principles and keep the system extensible.”
- Patterns used:
    - Strategy → Pricing
    - Factory → Vehicle creation
    - Singleton → ParkingLot
    - Abstraction → Vehicle, ParkingSpot
### 4️⃣ Core Entities (UML-Level Thinking)
- Main Classes
- ParkingLot (Singleton)
- ParkingFloor
- ParkingSpot
- Vehicle
- Ticket
- PaymentStrategy

```ts
import crypto from "crypto"

abstract class Vehicle {
    type: VehicleType 
    plate: string

    constructor(plate: string, type: VehicleType){
        this.type = type
        this.plate = plate
    }
}

enum VehicleType {
    CAR,
    BIKE,
    TRUCK
}

class Bike extends Vehicle {
    constructor(plate: string){
        super(plate, VehicleType.BIKE )
    }
}

class Car extends Vehicle {
    constructor(plate: string){
        super(plate, VehicleType.CAR)
    }
}

class Truck extends Vehicle {
    constructor(plate: string){
        super(plate, VehicleType.TRUCK)
    }
}

class ParkingSpot {
    vehicleType: VehicleType ;
    vehicle: Vehicle | null = null
    private id: number;

    constructor(id: number, vehicleType: VehicleType ){
        this.vehicleType = vehicleType
        this.id = id
    }

    isFree(): boolean{
        return this.vehicle === null
    }

    assignVehicle(vehicle: Vehicle): boolean {
        if(this.vehicle || this.vehicleType !== vehicle.type){
            return false
        }
        this.vehicle = vehicle
        return true
    }

    removeVehicle(){
        this.vehicle = null
    }
}

class ParkingFloor {
    parkingSpots: ParkingSpot[] = []
    level: number;

    constructor(level: number, spots: ParkingSpot[]){
        this.level = level
        this.parkingSpots = spots
    }

    findSpot(vehicle: Vehicle){
        console.log(`floor: ${this.level} total parking spot: ${this.parkingSpots.length}`)
        return this.parkingSpots.find(spot => {
            return spot.isFree() && spot.vehicleType === vehicle.type || null
        })
    }
}

class Ticket {
    vehicle: Vehicle
    parkingSpot: ParkingSpot
    issuedAt: Date = new Date();
    id: string

    constructor(id: string, vehicle: Vehicle, parkingSpot: ParkingSpot){
        this.vehicle = vehicle
        this.parkingSpot = parkingSpot
        this.id = id
    }
}

interface IPricingStrategy {
    calculate(hours: number): number;
}

class HourlyPricing implements IPricingStrategy {
    calculate(hours: number): number {
        return 50 * hours
    }
}

class FlatPricing implements IPricingStrategy {
    calculate(hours: number): number {
        return 1000
    }
}

class ParkingLot {
    private static instance: ParkingLot;
    private floors: ParkingFloor[] = []
    activeTickets: Map<string, Ticket> = new Map()

    private constructor(){}

    static getInstance(){
        if(!this.instance){
            this.instance = new ParkingLot()
        }
        return this.instance
    }

    addFloor(floor: ParkingFloor){
        this.floors.push(floor)
    }

    parkVehicle(vehicle: Vehicle){
        console.log(`total floors: ${this.floors.length}`)
        for(const floor of this.floors){
            const spot = floor.findSpot(vehicle)
            if(!spot){
                throw new Error(`no parking space for this vehicle of type ${vehicle.type}`) 
            }else {
                const isAssgined = spot.assignVehicle(vehicle)
                console.log(`parked ${vehicle.type} : ${isAssgined}`)
                const newTicket = new Ticket(crypto.randomUUID(), vehicle, spot)
                this.activeTickets.set(newTicket.id, newTicket)
                return newTicket
            }
        }
    }

    unParkVehicle(ticketId: string, pricing: IPricingStrategy){
        const ticket = this.activeTickets.get(ticketId)
        const parkingSpot = ticket?.parkingSpot
        parkingSpot?.removeVehicle()
        const hours = (Date.now() - ticket?.issuedAt.getTime()!)/(1000*60*60)
        this.activeTickets.delete(ticketId)
        return pricing.calculate(Math.ceil(hours))
    }
}

export function CallParkingLot(){
    const parkingLot = ParkingLot.getInstance()

    const spot1 = new ParkingSpot(1, VehicleType.BIKE)
    const spot2 = new ParkingSpot(2, VehicleType.TRUCK)
    const spot3 = new ParkingSpot(3, VehicleType.BIKE)
    const spot4 = new ParkingSpot(4, VehicleType.CAR)
    const floor1 = new ParkingFloor(1, [spot1, spot2, spot3, spot4])

    parkingLot.addFloor(floor1)

    const bike1 = new Bike("1")
    parkingLot.parkVehicle(bike1)
    const bike2 = new Bike("2")
    parkingLot.parkVehicle(bike2)
}
```
