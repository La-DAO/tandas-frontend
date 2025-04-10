import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div className="text-lg font-medium">Tandas</div>
        <div className="flex items-center gap-2">
          <div className="avatar">
            <div className="w-8 h-8 rounded-full bg-gray-700">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
          </div>
          <span>0.00</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Welcome back!</h1>
          <p className="text-gray-400">Here's an overview of your Tanda activities</p>
        </section>

        {/* Payment Info */}
        <section className="flex justify-between items-end mb-12">
          <div>
            <p className="text-gray-400 text-sm mb-1">Next Payment Due</p>
            <p className="text-xl font-medium">May 14, 2025</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Amount Due</p>
            <p className="text-xl font-medium">$20.00</p>
          </div>
          <button className="btn btn-primary bg-emerald-700 hover:bg-emerald-800 border-none rounded-full px-6">
            Pay Now
          </button>
        </section>

        {/* Metrics */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Total Savings */}
            <div className="bg-gray-900 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-1">Total Savings</p>
              <p className="text-2xl font-bold">$23,400 USDC</p>
              <p className="text-emerald-500 text-sm">+12.5%</p>
            </div>

            {/* Claimable Amount */}
            <div className="bg-gray-900 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-1">Claimable Amount</p>
              <p className="text-2xl font-bold">$200</p>
              <div className="flex justify-between items-center">
                <p className="text-emerald-500 text-sm">+1%</p>
                <button className="btn btn-sm bg-emerald-700 hover:bg-emerald-800 border-none rounded-full px-4 text-xs">
                  Claim
                </button>
              </div>
            </div>

            {/* Next Payout */}
            <div className="bg-gray-900 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-1">Next Payout</p>
              <p className="text-2xl font-bold">$2,000 USDC</p>
              <p className="text-gray-400 text-sm">Due Mar 15</p>
            </div>

            {/* Total Returns */}
            <div className="bg-gray-900 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-1">Total Returns</p>
              <p className="text-2xl font-bold">$4,000</p>
              <p className="text-emerald-500 text-sm">+22%</p>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="mb-6">
          <div className="tabs tabs-boxed bg-transparent">
            <button className="tab bg-emerald-700 text-white rounded-full">Tandas</button>
            <button className="tab bg-gray-800 text-white rounded-full ml-2">Transactions</button>
            <div className="ml-auto flex items-center">
              <span>All</span>
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </div>
          </div>
        </section>

        {/* All Tandas */}
        <section>
          <h2 className="text-xl font-bold mb-4">All Tandas</h2>
          <div className="space-y-4">
            {/* Group 1 */}
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Group 1</p>
                  <p className="text-gray-400 text-sm">Payment Due: 2/20/2025</p>
                  <p className="text-gray-400 text-sm">Amount Due: $200 USDC</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="btn btn-sm bg-emerald-700 hover:bg-emerald-800 border-none rounded-full px-4">
                    Join
                  </button>
                  <button className="btn btn-sm btn-circle btn-ghost">
                    <ChevronDownIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Group 3 */}
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Group 3</p>
                  <p className="text-gray-400 text-sm">Payment Due: 2/20/2025</p>
                  <p className="text-gray-400 text-sm">Amount Due: $200 USDC</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="btn btn-sm bg-emerald-700 hover:bg-emerald-800 border-none rounded-full px-4">
                    Join
                  </button>
                  <button className="btn btn-sm btn-circle btn-ghost">
                    <ChevronDownIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Group 3 (duplicate in the screenshot) */}
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Group 3</p>
                  <p className="text-gray-400 text-sm">Payment Due: 2/20/2025</p>
                  <p className="text-gray-400 text-sm">Amount Due: $200 USDC</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="btn btn-sm bg-emerald-700 hover:bg-emerald-800 border-none rounded-full px-4">
                    Join
                  </button>
                  <button className="btn btn-sm btn-circle btn-ghost">
                    <ChevronDownIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Payable Section */}
          <div className="mt-4">
            <h2 className="text-xl font-bold">Payable</h2>
            {/* Payable content would go here */}
          </div>
        </section>
      </main>
    </div>
  );
}
