/* eslint-disable @typescript-eslint/no-unsafe-return */

import jsonfile from "jsonfile";

import { IUserContact } from "../models/User";
import { TransactionSection } from "@src/models/Transaction";

// **** Variables **** //

const dbFileName = "database.json";
const transactionDb = "transactions.json";

// **** Types **** //

interface IDb {
  users: IUserContact[];
}

// interface ICDb {
//   contacts: IUserContact[];
// }

interface ITransactionDb {
  transactions: TransactionSection[];
}

// **** Functions **** //

/**
 * Fetch the json from the file.
 */
function openDb(): Promise<IDb> {
  return jsonfile.readFile(__dirname + "/" + dbFileName);
}

/**
 * Update the file.
 */
function saveDb(db: IDb): Promise<void> {
  return jsonfile.writeFile(__dirname + "/" + dbFileName, db);
}

function openTransactionDb(): Promise<ITransactionDb> {
  return jsonfile.readFile(__dirname + "/" + transactionDb);
}

function saveTransactionDb(db: ITransactionDb): Promise<void> {
  return jsonfile.writeFile(__dirname + "/" + transactionDb, db);
}

// **** Export default **** //

export default {
  openDb,
  saveDb,
  openTransactionDb,
  saveTransactionDb,
} as const;
