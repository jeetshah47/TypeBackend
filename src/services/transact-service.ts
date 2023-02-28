import { TransactionSection } from "@src/models/Transaction";
import transactionRepo from "@src/repos/transaction-repo";

const getAll = (): Promise<TransactionSection[]> => {
  return transactionRepo.getAll();
};

const getOne = (id: number): Promise<TransactionSection | null> => {
  return transactionRepo.getOne(id);
};

export default {
  getAll,
  getOne,
} as const;
