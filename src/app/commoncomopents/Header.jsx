import {
    Search,
    Bell,
    Menu,
    ChevronDown,
} from "lucide-react";

export default function Header() {
    return (
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white p-[8.2px]">
            {/* Left Side */}
            <div className="flex items-center gap-4">
                <button className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden">
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
                <div className="hidden items-center rounded-lg border border-slate-200 bg-slate-50 px-3 md:flex">
                    <Search size={18} className="text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-[180px] bg-transparent px-2 py-2 text-sm outline-none"
                    />
                </div>
                <button className="relative rounded-lg p-2.5 text-slate-600 hover:bg-slate-100">
                    <Bell size={21} />
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
                </button>
                <div className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-slate-100">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                        A
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-sm font-semibold text-slate-700">Admin</p>
                        <p className="text-xs text-slate-400">HR Manager</p>
                    </div>
                    <ChevronDown size={17} className="hidden text-slate-400 sm:block" />
                </div>
            </div>
        </header>
    );
}