'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex top-0 h-screen left-0">
      <div className="w-64 bg-gradient-to-b from-blue-600 to-blue-800 p-6 shadow-2xl">
        <header className="mb-10">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Dashboard
          </h2>
          <div className="h-0.5 bg-blue-400/50 mt-4" />
        </header>

        <nav>
          <ul className="flex flex-col space-y-2">
            {[
              { href: '/dashboard/home',
                 label: 'Home' },
              {
                href: '/dashboard/articles',
                label: 'Articles',
              },
              { href: '/dashboard/users', 
                label: 'Users' },
              { href: '/',
                 label: 'brimsafa siti' },

            ].map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 py-2.5 px-4 rounded-lg transition-all duration-200 ${
                    pathname === item.href
                      ? 'bg-blue-500/50 text-white shadow-lg'
                      : 'text-blue-100/90 hover:bg-blue-500/30 hover:text-white'
                  }`}
                >
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
