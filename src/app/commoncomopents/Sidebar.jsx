
"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, LayoutDashboard } from "lucide-react";
import { usePathname } from "next/navigation";
import sidebarData from "./SidebarData";

export default function Sidebar() {
  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState(null);

  const handleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <aside className="sticky top-0 left-0 flex h-screen flex-col overflow-hidden bg-slate-900 text-white">

      {/* Logo */}
      <div className="flex h-[70px] shrink-0 items-center border-b border-slate-700 px-6">
        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 font-bold">
            H
          </div>

          <Link href="/admin/dashboard">
            <div>
              <h1 className="text-lg font-bold">HRMS</h1>
              <p className="text-xs text-slate-400">Admin Panel</p>
            </div>
          </Link>

        </div>
      </div>

      {/* Sidebar Menu */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden p-4 scrollbar-hide">

        {/* Dashboard */}
        <Link href="/admin/dashboard">
          <button
            className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 ${pathname === "/admin/dashboard"
              ? "bg-blue-600"
              : "hover:bg-blue-700"
              }`}
          >
            <LayoutDashboard size={19} strokeWidth={2} />
            <span>Dashboard</span>
          </button>
        </Link>

        {/* Modules */}
        {sidebarData.map((item) => {
          const Icon = item.icon;

          // Only clicked module will remain open
          const isOpen = openMenu === item.id;

          return (
            <div key={item.id} className="mb-1 mt-4">

              {/* Module Button */}
              <button
                onClick={() => handleMenu(item.id)}
                className={`flex w-full items-center justify-between whitespace-nowrap rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${isOpen
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-blue-700 hover:text-white"
                  }`}
              >

                <span className="flex min-w-0 items-center gap-2">

                  <Icon size={19} className="shrink-0" />

                  <span className="whitespace-nowrap">
                    {item.title}
                  </span>

                </span>

                {item.children && (
                  <ChevronDown
                    size={17}
                    className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                )}

              </button>

              {/* Children */}
              {item.children && isOpen && (
                <div className="ml-5 mt-1 border-l border-slate-700 pl-4">

                  {item.children.map((child) => {

                    const isChildActive =
                      pathname.startsWith(child.path);

                    return (
                      <Link
                        key={child.path}
                        href={child.path}
                        className={`mb-1 block whitespace-nowrap rounded-lg px-3 py-2 text-sm transition ${isChildActive
                          ? "bg-slate-800 text-white"
                          : "text-slate-400 hover:bg-blue-600 hover:text-white"
                          }`}
                      >
                        {child.title}
                      </Link>
                    );

                  })}

                </div>
              )}

            </div>
          );
        })}

      </nav>
    </aside>
  );
}

