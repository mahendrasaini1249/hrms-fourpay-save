"use client";

import Link from "next/link";
import {
    FaEye,
    FaTrash,
    FaSignOutAlt,
    FaCalendarAlt,
} from "react-icons/fa";

export default function ExitEmployeeTable({ employees }) {

    const exitEmployees = employees.filter(
        (emp) => emp.employmentStatus === "Exited"
    );
    return (
        <div className="w-full">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">
                        Exit Employees
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Manage employee exit records
                    </p>
                </div>
            </div>

            {/* Table Card */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                {/* Card Header */}
                <div className="px-5 py-4 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                            <FaSignOutAlt className="text-sm" />
                        </div>

                        <div>
                            <h2 className="font-semibold text-slate-800">
                                Exit Records
                            </h2>
                            <p className="text-xs text-slate-500">
                                {employees.length} exit employees
                            </p>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">
                                    Employee
                                </th>

                                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">
                                    Employee ID
                                </th>

                                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">
                                    Exit Date
                                </th>

                                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">
                                    Exit Type
                                </th>

                                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">
                                    Status
                                </th>

                                <th className="text-center px-5 py-3 text-xs font-semibold text-slate-500 uppercase">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100">
                            {exitEmployees.length > 0 ? (
                                exitEmployees.map((emp) => (
                                    <tr
                                        key={emp.id}
                                        className="hover:bg-slate-50 transition"
                                    >
                                        {/* Employee */}
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={emp.profileImage}
                                                    alt={emp.fullName}
                                                    className="w-10 h-10 rounded-full object-cover"
                                                />

                                                <div>
                                                    <p className="text-sm font-semibold text-slate-700">
                                                        {emp.fullName}
                                                    </p>

                                                    <p className="text-xs text-slate-400">
                                                        {emp.department}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Employee ID */}
                                        <td className="px-5 py-4">
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-semibold">
                                                {emp.employeeId}
                                            </span>
                                        </td>

                                        {/* Exit Date */}
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <FaCalendarAlt className="text-slate-400 text-xs" />
                                                {emp.exitDetails?.exitDate}
                                            </div>
                                        </td>

                                        {/* Exit Type */}
                                        <td className="px-5 py-4">
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-semibold">
                                                {emp.exitDetails?.exitType}
                                            </span>
                                        </td>

                                        {/* Status */}
                                        <td className="px-5 py-4">
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-green-50 text-green-700 text-xs font-semibold">
                                                {emp.exitDetails?.clearanceStatus}
                                            </span>
                                        </td>

                                        {/* Actions */}
                                        <td className="px-5 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <Link
                                                    href={`/admin/employeemanagement/exit-employee/${emp.id}`}
                                                    className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 flex items-center justify-center"
                                                >
                                                    <FaEye className="text-xs" />
                                                </Link>


                                                <button className="w-8 h-8 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 flex items-center justify-center">
                                                    <FaTrash className="text-xs" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="px-5 py-12 text-center">
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                                <FaSignOutAlt />
                                            </div>

                                            <p className="text-sm font-semibold text-slate-700 mt-3">
                                                No Exit Records
                                            </p>

                                            <p className="text-xs text-slate-400 mt-1">
                                                No employee exit records available
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}