"use client";

import employees from "@/app/data/employee-management";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { use } from "react";

export default function Page({ params }) {

    const { id } = use(params);

    const employee = employees.find(
        (emp) => String(emp.id) === String(id)
    );

    if (!employee) {
        return (
            <div className="p-6">
                Employee not found
            </div>
        );
    }

    const history = employee.history[0];

    return (
        <div className="min-h-screen bg-slate-100 p-6">

            <div className="max-w-3xl mx-auto">

                <Link
                    href="/admin/employeemanagement/employee-history"
                    className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 mb-5"
                >
                    <FaArrowLeft />
                    Back to Employees
                </Link>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">

                    <div className="px-6 py-5 border-b border-slate-200">
                        <h1 className="text-xl font-semibold text-slate-800">
                            Employee History
                        </h1>

                        <p className="text-sm text-slate-500 mt-1">
                            View employee history details
                        </p>
                    </div>

                    <div className="p-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <div>
                                <p className="text-sm text-slate-500 mb-1">
                                    Employee Name
                                </p>

                                <p className="font-medium text-slate-800">
                                    {employee.fullName}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500 mb-1">
                                    Employee ID
                                </p>

                                <p className="font-medium text-slate-800">
                                    {employee.employeeId}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500 mb-1">
                                    Action
                                </p>

                                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                                    {history.action}
                                </span>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500 mb-1">
                                    Date
                                </p>

                                <p className="font-medium text-slate-800">
                                    {history.date}
                                </p>
                            </div>

                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-200">

                            <p className="text-sm text-slate-500 mb-2">
                                Description
                            </p>

                            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                                <p className="text-slate-700 leading-6">
                                    {history.description}
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}