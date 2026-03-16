import { COIN } from "../coin.js";
import { VendingMachine } from "../vending-machine.js";


export interface State {
    pressInsertCointButton(vendingMachine: VendingMachine): void;
    insertCoin(vendingMachine: VendingMachine, coins: Record<string, number>): void;
    pressSelectionButton(vendingMachine: VendingMachine): void;
    selectProduct(vendingMachine: VendingMachine, code: number): void;
    cancelTransaction(vendingMachine: VendingMachine): void;
    refundMoney(vendingMachine: VendingMachine): void;
    returnChange(vendingMachine: VendingMachine): COIN | null;
    dispense(vendingMachine: VendingMachine): void;
    getName(): string;
}