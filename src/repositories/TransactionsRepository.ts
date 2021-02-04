import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  // public getBalance(): Balance {
  //   const { income, outcome } = this.transactions.reduce(
  //     (accumulator: Balance, transaction: Transaction) => {
  //       switch (transaction.type) {
  //         case 'income':
  //           accumulator.income += transaction.value;
  //           break;
  //         case 'outcome':
  //           accumulator.outcome += transaction.value;
  //           break;
  //         default:
  //           break;
  //       }
  //       return accumulator;
  //     },
  //     {
  //       income: 0,
  //       outcome: 0,
  //       total: 0,
  //     },
  //   );
  //   const total = income - outcome;
  //   return {
  //     income,
  //     outcome,
  //     total,
  //   };
  // }
}

export default TransactionsRepository;
