import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export function PersonalStats() {
  return (
    <Card className="bg-card/50">
      <CardHeader>
        <CardTitle>Personal Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <p className="text-3xl font-bold">$4,000</p>
          <p className="text-sm text-muted-foreground">Interest Gained</p>
        </div>
        <div>
          <p className="text-3xl font-bold">$19,400</p>
          <p className="text-sm text-muted-foreground">Funds Supplied</p>
        </div>
        <div>
          <p className="text-3xl font-bold">27</p>
          <p className="text-sm text-muted-foreground">Rounds participated</p>
        </div>
      </CardContent>
    </Card>
  )
}

