import { ArrowUpRight, PiggyBank, Users, Wallet } from "lucide-react";

export function DashboardWidgets() {
  const widgets = [
    {
      title: "Total Savings",
      value: "$23,400",
      change: "+12.5%",
      icon: PiggyBank,
    },
    {
      title: "Active Tandas",
      value: "3",
      change: "+1",
      icon: Users,
    },
    {
      title: "Next Payout",
      value: "$2,000",
      date: "Mar 15",
      icon: Wallet,
    },
    {
      title: "Total Returns",
      value: "$4,000",
      change: "+22%",
      icon: ArrowUpRight,
    },
  ];

  return (
    <>
      {widgets.map((widget) => (
        <div key={widget.title} className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-row items-center justify-between">
              <h2 className="card-title text-sm font-medium">{widget.title}</h2>
              <widget.icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="text-2xl font-bold">{widget.value}</div>
            {widget.change && <p className="text-xs text-emerald-500">{widget.change}</p>}
            {widget.date && <p className="text-xs text-muted-foreground">Due {widget.date}</p>}
          </div>
        </div>
      ))}
    </>
  );
}
