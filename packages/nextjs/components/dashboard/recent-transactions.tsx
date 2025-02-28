import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export function RecentTransactions() {
  const transactions = [
    {
      type: "Contribution",
      tanda: "Family Savings",
      amount: 1000,
      date: "Today",
      isContribution: true,
    },
    {
      type: "Payout",
      tanda: "Home Deposit",
      amount: 2000,
      date: "Yesterday",
      isContribution: false,
    },
    {
      type: "Contribution",
      tanda: "Emergency Fund",
      amount: 500,
      date: "Mar 1",
      isContribution: true,
    },
    {
      type: "Interest",
      tanda: "Family Savings",
      amount: 150,
      date: "Feb 28",
      isContribution: false,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {transactions.map((transaction, i) => (
            <div key={i} className="flex items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20">
                {transaction.isContribution ? (
                  <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-emerald-500" />
                )}
              </div>
              <div className="ml-4 flex-1">
                <p className="text-sm font-medium leading-none">{transaction.type}</p>
                <p className="text-sm text-muted-foreground">{transaction.tanda}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">${transaction.amount.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">{transaction.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

