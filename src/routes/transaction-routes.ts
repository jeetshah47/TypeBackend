import transactionRepo from "@src/repos/transaction-repo";
import { IReq, IRes } from "./shared/types";
import HttpStatusCodes from "@src/declarations/major/HttpStatusCodes";

const paths = {
  basePath: "/transactions",
  get: "/all",
  getId: "/:id",
} as const;

async function getAll(_: IReq, res: IRes) {
  const transactions = await transactionRepo.getAll();
  return res.status(HttpStatusCodes.OK).json(transactions);
}

async function getOne(req: IReq, res: IRes) {
  const transactions = await transactionRepo.getOne(Number(req.params.id));
  return res.status(HttpStatusCodes.OK).json(transactions);
}

export default {
  paths,
  getAll,
  getOne,
} as const;
