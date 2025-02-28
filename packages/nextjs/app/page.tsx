"use client";

/* import Link from "next/link";
import { useAuthModal } from "@account-kit/react"; */
import type { NextPage } from "next";
import { ActiveTandas } from "~~/components/dashboard/active-tandas";

/* import { BugAntIcon } from "@heroicons/react/24/outline";
import { CounterUI } from "~~/components/counter/CounterUI"; */
import { DashboardWidgets } from "~~/components/dashboard/dashboard-widgets";

/* import { Address } from "~~/components/scaffold-alchemy";
import { useClient } from "~~/hooks/scaffold-alchemy/useClient"; */

const Home: NextPage = () => {
  /*   const { address } = useClient();
  const { openAuthModal } = useAuthModal();
  const isConnected = !!address;
 */
  return (
    <>
      <div className="flex flex-col gap-6 p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-4xl font-bold"><Bienvenido></Bienvenido> Back</div>
            <p className="text-lg mt-2">here&apos;s an overview of your tandas activity</p>
          </div>
          <div className="relative p-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full shadow-lg flex items-center justify-between">
            <div className="absolute inset-0 bg-black opacity-50 rounded-full"></div>
            <div className="relative z-10 flex items-center text-white">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="mr-2">
                <div className="text-lg font-bold">Next Payment Due</div>
                <div className="text-2xl font-extrabold mt-1">3 days</div>
              </div>
            </div>
            <button className="relative z-10 px-2 py-1 bg-white text-black rounded-lg">Pay Now</button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <DashboardWidgets />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <ActiveTandas />
          </div>
          <div>{/* Add another component or content here */}</div>
        </div>
      </div>
    </>
  );
};

export default Home;
