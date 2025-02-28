import React from 'react';
import Link from 'next/link';

const DashboardShell: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4 text-lg font-bold">Menu</div>
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard">
              <a className="block p-4 hover:bg-gray-700">Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="/groups">
              <a className="block p-4 hover:bg-gray-700">Groups</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-4">
        {/* Main content goes here */}
      </div>
    </div>
  );
};

export default DashboardShell;