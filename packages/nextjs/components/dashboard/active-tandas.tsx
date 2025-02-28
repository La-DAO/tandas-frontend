export function ActiveTandas() {
  const tandas = [
    {
      name: "Family Savings",
      position: 3,
      totalMembers: 12,
      collected: 6000,
      total: 12000,
      nextPayout: "Mar 15, 2024",
    },
    {
      name: "Home Deposit",
      position: 5,
      totalMembers: 10,
      collected: 8000,
      total: 10000,
      nextPayout: "Apr 1, 2024",
    },
    {
      name: "Emergency Fund",
      position: 2,
      totalMembers: 8,
      collected: 2000,
      total: 8000,
      nextPayout: "Mar 30, 2024",
    },
  ];

  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800">Active Tandas</h2>
      <ul className="mt-4 space-y-4">
        {tandas.map(tanda => (
          <li key={tanda.name} className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800">{tanda.name}</h3>
            <div className="w-full bg-gray-300 rounded-full h-5 my-2">
              <div
                className="bg-blue-600 h-6 rounded-full"
                style={{ width: `${(tanda.collected / tanda.total) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-600">
                  Position: {tanda.position} | Members: {tanda.totalMembers}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Collected: {tanda.collected} | Total: {tanda.total}
                </p>
                <p className="text-sm text-gray-600">Next Payout: {tanda.nextPayout}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
