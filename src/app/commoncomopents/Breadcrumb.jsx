"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import sidebarData from "./SidebarData";
import employees from "../data/employee-management";

// Static labels jo sidebar mein nahi hain
const staticLabels = {
    admin: "Admin",
};

// Sidebar se ek flat map banate hain: "employeemanagement" -> "Employee Managment"
// aur "all-employee" -> "All Employees"
function buildLabelMap() {
    const map = { ...staticLabels };

    sidebarData.forEach((item) => {
        if (item.children && item.children.length > 0) {
            item.children.forEach((child) => {
                const segments = child.path.split("/").filter(Boolean);
                // segments = ["admin", "employeemanagement", "all-employee"]

                // dusra segment = module ka slug (employeemanagement)
                const moduleSlug = segments[1];
                if (moduleSlug && !map[moduleSlug]) {
                    map[moduleSlug] = item.title; // "Employee Managment"
                }

                // last segment = specific page ka slug (all-employee)
                const pageSlug = segments[segments.length - 1];
                map[pageSlug] = child.title; // "All Employees"
            });
        }
    });

    return map;
}

export default function Breadcrumb() {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);
    const labelMap = buildLabelMap();

    if (segments.length === 0) return null;

    const getLabel = (segment) => {
        const emp = employees.find((e) => e.employeeId === segment);
        if (emp) return emp.fullName;

        return (
            labelMap[segment] ||
            decodeURIComponent(segment)
                .replace(/-/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase())
        );
    };

    return (
        <nav className="mb-4 flex flex-wrap items-center text-sm text-slate-500">
            <Link href="/" className="flex items-center gap-1 hover:text-blue-600">
                <Home size={14} />
                Home
            </Link>

            {segments.map((segment, index) => {
                if (segment === "admin") return null;

                const href = "/" + segments.slice(0, index + 1).join("/");
                const isLast = index === segments.length - 1;
                const label = getLabel(segment);

                return (
                    <div key={href} className="flex items-center">
                        <ChevronRight size={14} className="mx-1 text-slate-400" />
                        {isLast ? (
                            <span className="font-medium text-slate-800">{label}</span>
                        ) : (
                            <span href={href} className="hover:text-blue-600">
                                {label}
                            </span>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}