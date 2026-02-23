```ts
class Cell {
    constructor(public row: number, public col: number, private symbol: string | null = null){
        this.col = col
        this.row = row
        this.symbol = symbol
    }

    isEmpty(): boolean {
        return this.symbol === null
    }

    setSymbol(symbol: string){
        if(!this.isEmpty()) throw new Error("cell already has value")
        
        this.symbol = symbol
    }

    getSymbol(): string | null{
        return this.symbol
    }
}

class Board {
    private grid: Cell[][]

    constructor(private size: number){
        this.grid = Array.from({length: size}, (_, row: number)=> 
            Array.from({length: size}, (_, col: number) => new Cell(row, col))
        );
    }

    getCell(row: number, col: number): Cell{
        return this.grid[row]![col]!
    }

    getSize(){
        return this.size
    }
}

abstract class Player {
    constructor(public name: string, public symbol: string){
        this.name = name
        this.symbol = symbol
    }
    abstract makeMove(row: number, col: number, player: Player): Move;
}

class HumanPlayer extends Player {
    makeMove(row: number, col: number, player: Player): Move {
        return new Move(row, col, player)
    }
}

class PlayerFactory {
    static createPlayer(type: string, name: string, symbol: string){
        if(type == "HUMAN"){
            return new HumanPlayer(name, symbol)
        }else {
            throw new Error("Invalid player type")
        }
    }
}

class Move {
    constructor(public row: number, public col: number, public player: Player){
        this.row = row;
        this.col = col;
        this.player = player
    }
}

interface WinningStrategy {
    checkWinner(board: Board, move: Move): boolean
}

class RowColumnDiagonalStrategy implements WinningStrategy {
    checkWinner(board: Board, move: Move): boolean {
        const symbol = move.player.symbol
        const size = board.getSize()

        const row = move.row
        const col = move.col

        let isRowWin = true
        let isColWin = true
        let isDiagWin = true
        let isAntiDiagWin = true

        for(let i = 0; i < size ; i++){

            // row win check 
            if(board.getCell(row, i).getSymbol() !== symbol){
                isRowWin = false
            }

            // col win check
            if(board.getCell(i, col).getSymbol() !== symbol){
                isColWin = false
            }

            // diagonal check 
            if(board.getCell(i, i).getSymbol() !== symbol){
                isDiagWin = false
            }

            // anti diagonal win check
            if(board.getCell(i, size-i-1).getSymbol() !== symbol){
                isAntiDiagWin = false
            }
        }
        return isAntiDiagWin || isDiagWin || isRowWin || isColWin
    }
}

enum GameStatus {
    Win,
    Draw,
    InProgress
}

class Game {
    gameStatus: GameStatus = GameStatus.InProgress
    currentPlayerIndex = 0

    constructor(private board: Board, private player: Player[], private winningStrategy: WinningStrategy){
        this.board = board;
        this.player = player;
        this.winningStrategy = winningStrategy
    }

    makeMove(move: Move){

        if(this.gameStatus !== GameStatus.InProgress){
            throw new Error("game over")
        }

        const row = move.row
        const col = move.col
        const player = move.player

        const cell = this.board.getCell(row, col)
        cell.setSymbol(player.symbol)

        if(this.winningStrategy.checkWinner(this.board, move)){
            this.gameStatus = GameStatus.Win
            console.log(`${player.name} wins!`)
            return;
        }

        this.nextTurn()
    }

    nextTurn(){
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.player.length
    }
}

```
