import { TransactionSection } from "@src/models/Transaction";
import orm from "./mock-orm";

async function getOne(id: number): Promise<TransactionSection | null> {
  const db = await orm.openTransactionDb();
  for (const transaction of db.transactions) {
    if (transaction.id === id) {
      return transaction;
    }
  }
  return null;
}

async function getAll(): Promise<TransactionSection[]> {
  const db = await orm.openTransactionDb();
  return db.transactions;
}


export default {
  getOne,
  getAll,
} as const;
