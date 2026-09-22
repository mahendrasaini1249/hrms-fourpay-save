
"use client";

import {
    Search,
    Bell,
    Menu,
    ChevronDown,
    LogOut,
    UserRound,
} from "lucide-react";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const { user, logout } = useAuth();

    // Logged in user name
    const userName = user?.name || "User";

    // Logged in user role
    const userRole = user?.role || "User";

    // First letter
    const firstLetter = userName.charAt(0).toUpperCase();

    // Profile open
    const handleProfile = () => {
        setIsOpen(false);

        router.push("/admin/profile");
    };

    // Logout
    const handleLogout = () => {
        logout();

        setIsOpen(false);

        router.replace("/login");
    };

    return (
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white p-[8.2px]">

            {/* Left Side */}
            <div className="flex items-center gap-4">

                <button
                    className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
                >
                    <Menu size={22} />
                </button>

                <div>
                    <h1 className="text-xl font-semibold text-slate-800">
                        Dashboard
                    </h1>
                </div>

            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">

                {/* Search */}
                <div className="hidden items-center rounded-lg border border-slate-200 bg-slate-50 px-3 md:flex">

                    <Search
                        size={18}
                        className="text-slate-400"
                    />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-[180px] bg-transparent px-2 py-2 text-sm outline-none"
                    />

                </div>

                {/* Notification */}
                <button className="relative rounded-lg p-2.5 text-slate-600 hover:bg-slate-100">

                    <Bell size={21} />

                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

                </button>

                {/* Profile */}
                <div className="relative">

                    {/* Profile Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-slate-100"
                    >

                        {/* Avatar */}
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                            {firstLetter}
                        </div>

                        {/* Name + Role */}
                        <div className="hidden sm:block">

                            <p className="text-xs font-semibold capitalize text-black">
                                {userRole}
                            </p>

                        </div>

                        {/* Arrow */}
                        <ChevronDown
                            size={17}
                            className={`hidden text-slate-400 transition-transform sm:block ${isOpen ? "rotate-180" : ""
                                }`}
                        />

                    </button>

                    {/* Dropdown */}
                    {isOpen && (
                        <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-lg border border-slate-200 bg-white p-2 shadow-lg">

                            {/* User Info */}
                            <div className="border-b border-slate-100 px-3 py-3">

                                <p className="truncate text-sm font-semibold text-slate-800">
                                    {userName}
                                </p>

                                <p className="text-xs capitalize text-slate-500">
                                    {userRole}
                                </p>

                            </div>

                            {/* Profile */}
                            <button
                                onClick={handleProfile}
                                className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-100"
                            >
                                <UserRound size={17} />
                                Profile
                            </button>

                            {/* Logout */}
                            <button
                                onClick={handleLogout}
                                className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                            >
                                <LogOut size={17} />
                                Logout
                            </button>

                        </div>
                    )}

                </div>

            </div>

        </header>
    );
}