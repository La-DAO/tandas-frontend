import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export function GroupsGrid() {
  const groups = [
    {
      id: 1,
      name: "Group 1",
      description: "This is a description of the Group and why people are involved with this Group",
      members: 11,
      startDate: "Feb 20, 2025",
      amount: 200,
      currentAmount: 800,
      goal: 2000,
    },
    // Add more groups as needed
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Groups</h2>
          <p className="text-sm text-muted-foreground">
            This is an overview of all the groups available and what you can join
          </p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700">+ Create Group</Button>
      </div>
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map(group => (
          <Card key={group.id} className="bg-card/50">
            <CardHeader>
              <CardTitle>{group.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{group.description}</p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <img
                  alt="Organizer"
                  className="rounded-full"
                  height="24"
                  src="/placeholder.svg?height=24&width=24"
                  width="24"
                />
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <img
                      key={i}
                      alt="Member"
                      className="rounded-full border-2 border-background"
                      height="24"
                      src="/placeholder.svg?height=24&width=24"
                      width="24"
                    />
                  ))}
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-muted text-xs">
                    +{group.members - 3}
                  </span>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm">
                  <span className="text-muted-foreground">Starting: {group.startDate}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-muted-foreground">Amount: {group.amount} USDC</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{group.currentAmount} USDC</span>
                    <span>Goal ${group.goal}</span>
                  </div>
                  <Progress value={(group.currentAmount / group.goal) * 100} className="bg-emerald-950" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Join</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
