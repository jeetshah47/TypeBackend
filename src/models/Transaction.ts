export interface Transaction {
    id: number;
    amount: number;
    description: string;
    date: Date;   
}

export interface TransactionSection { 
    id: number;
    date: Date;
    transactions: Transaction[];
 }