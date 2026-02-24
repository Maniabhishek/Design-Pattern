### Clarify Requirements
- Single building or multiple buildings?
- Number of elevators?
- Min/max floors?
- Peak optimization required?
- Fire/emergency mode?
- Priority handling (VIP, maintenance)?
### assume:
- Multiple elevators
- N floors
- Internal + external requests
- Efficient scheduling
- Scalable design

### Identify Core Components
- buttons
- display
- door
- motor
- elevator 
- building
- floor
- ElevatorController
- StateManagement


### Step 3: Identify Design Patterns Needed , This problem naturally uses:
| Pattern       | Why                                     |
| ------------- | --------------------------------------- |
| **Singleton** | ElevatorController (central dispatcher) |
| **Strategy**  | Scheduling algorithm                    |
| **State**     | Elevator states (MovingUp, Idle, etc.)  |
| **Observer**  | Display updates                         |
| **Factory**   | Creating elevators                      |

```ts
enum Direction {
    UP = "UP",
    DOWN = "DOWN",
    IDLE = "IDLE"
}

enum ElevatorState {
    MOVING = "MOVING",
    STOPPED = "STOPPED",
    MAINTENANCE = "MAINTENANCE"
}

// ### Step 5: Model Request
// - We have two types:
// - External request (from floor)
// - Internal request (from inside elevator)

class Request {
    floor: number;
    direction: Direction;

    constructor(floor: number, direction: Direction){
        this.floor = floor
        this.direction = direction
    }
}

class Elevator {
    direction: Direction = Direction.IDLE
    state: ElevatorState = ElevatorState.STOPPED
    currentFloor: number = 0
    requests: number[] = []
    id: number
    
    constructor(id: number){
        this.id = id
    }

    addRequests(floor: number){
        this.requests.push(floor)
        this.requests.sort((a,b)=> a-b)
    }

    move(){
        if(this.requests.length == 0){
            this.direction = Direction.IDLE
            this.state = ElevatorState.STOPPED
            return
        }
        while(this.requests.length){
    
            const target = this.requests[0]!
    
            if(target > this.currentFloor) {
                this.direction = Direction.UP
                this.currentFloor++
            }else if(target < this.currentFloor){
                this.direction = Direction.DOWN
                this.currentFloor--
            }
    
            console.log(`elevator ${this.id} is at floor ${this.currentFloor}`)
    
            if(target === this.currentFloor){
                console.log(`elevator ${this.id} stopped at floor ${target}`)
                this.requests.shift()
            }
        }
    }

    getFloor(){
        return this.currentFloor
    }

    getDirection(){
        return this.direction
    }
}

class ElevatorController {
    private static instance: ElevatorController = new ElevatorController();
    elevators: Elevator[] = []
    private constructor(){}

    static getInstance(): ElevatorController{
        if(!ElevatorController.instance){
            ElevatorController.instance = new ElevatorController()
        }
        return ElevatorController.instance
    }

    addElevator(elevator: Elevator){
        this.elevators.push(elevator)
    }

    findBestElevator(request: Request){
        return this.elevators.reduce((prev, curr)=> {
            return Math.abs(prev.currentFloor - request.floor) < Math.abs(curr.currentFloor - request.floor) ? prev : curr
        })
    }

    handleExternalRequest(request: Request){
        const bestElevator = this.findBestElevator(request)
        bestElevator.addRequests(request.floor)
    }

    step(){
        this.elevators.forEach(elevator => elevator.move())
    }
}

class Building {
    floor: number;
    elevatorCount: number;

    constructor(floor: number, elevatorCount: number){
        this.floor = floor;
        this.elevatorCount = elevatorCount
        for(let i = 0; i < elevatorCount; i++){
            const controller = ElevatorController.getInstance()
            controller.addElevator(new Elevator(i))
        }
    }
}

export function CallBuildingElevator(){
    const building = new Building(5, 2)

    const controller = ElevatorController.getInstance()

    controller.handleExternalRequest(new Request(3, Direction.UP))
    controller.handleExternalRequest(new Request(2, Direction.DOWN))

    controller.step()
}
```

### Scheduling Strategy Improvement
- Instead of nearest:
  - Use Strategy Pattern:
```ts
interface SchedulingStrategy {
    findElevator(elevators: Elevator[], request: Request): Elevator;

}
```
- Implement:
  - NearestStrategy
  - ScanAlgorithm
  - LookAlgorithm
  - AI based optimization
  - Then inject into controller.


### Scalability Concerns
- In real production:
- Requests come from distributed systems
- Controller may run on multiple nodes
- Use message queue (Kafka)
- Persist state in DB
- Leader election for controller

### Edge Cases
- Elevator full
- Fire alarm
- Emergency override
- Power failure
- Door obstruction
- Mentioning these = huge interview brownie points.

### Concurrency Handling
- In real system:
- Multiple threads update elevator state
- Use locks / mutex
- Or event-driven model
