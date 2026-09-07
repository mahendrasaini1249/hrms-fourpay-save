"use client";

import Link from "next/link";
import { FaEdit, FaTrash, FaIdCard } from "react-icons/fa";

export default function IdCardsTable({ employees }) {
    return (
        <div className="w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">

            <table className="w-full min-w-[900px] text-left">

                {/* Table Head */}

                <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                        <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                            Employee Profile
                        </th>

                        <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                            Employee ID
                        </th>

                        <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                            Department
                        </th>

                        <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                            Phone
                        </th>

                        <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                            Status
                        </th>

                        <th className="px-5 py-4 text-sm font-semibold text-center text-slate-600">
                            Action
                        </th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-slate-100">

                    {employees.length > 0 ? (
                        employees.map((employee) => (

                            <tr
                                key={employee.id}
                                className="hover:bg-slate-50 transition">

                                {/* Employee */}
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-3">

                                        <img
                                            src={employee.profileImage}
                                            alt={employee.name}
                                            className="h-10 w-10 rounded-full object-cover border"
                                        />
                                        <div>{employee.fullName}</div>
                                    </div>


                                </td>

                                {/* Employee ID */}
                                <td className="px-5 py-4 text-sm font-medium text-slate-700">
                                    {employee.employeeId}
                                </td>

                                {/* Department */}
                                <td className="px-5 py-4 text-sm text-slate-600">
                                    {employee.department}
                                </td>

                                {/* Phone */}
                                <td className="px-5 py-4 text-sm text-slate-600">
                                    {employee.phone}
                                </td>

                                {/* Status */}
                                <td className="px-5 py-4">
                                    <span
                                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${employee.employmentStatus === "Active"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {employee.employmentStatus}
                                    </span>
                                </td>

                                {/* Actions */}
                                <td className="px-5 py-4">
                                    <div className="flex items-center justify-center gap-2">
                                        {/* View */}
                                        {/* <Link
                                            href={`/admin/employeemanagement/all-employee/${employee.id}`}
                                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
                                            title="View Employee"
                                        >
                                            <FaEye size={14} />
                                        </Link> */}

                                        {/* Edit */}
                                        <Link
                                            href={`/admin/employeemanagement/all-employee/${employee.id}/edit`}
                                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-50 text-yellow-600 hover:bg-yellow-100"
                                            title="Edit Employee"
                                        >
                                            <FaEdit size={14} />
                                        </Link>

                                        {/* Delete */}
                                        <button
                                            type="button"
                                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-600 hover:bg-red-100"
                                            title="Delete Employee"
                                        >
                                            <FaTrash size={14} />
                                        </button>

                                        {/* ID Card */}
                                        <Link
                                            href={`/admin/employeemanagement/id-cards/${employee.id}`}
                                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100"
                                            title="ID Card"
                                        >
                                            <FaIdCard size={14} />
                                        </Link>

                                    </div>
                                </td>

                            </tr>
                        ))
                    ) : (

                        <tr>
                            <td
                                colSpan="7"
                                className="px-5 py-10 text-center text-sm text-slate-500"
                            >
                                No employees found
                            </td>
                        </tr>

                    )}

                </tbody>

            </table>

        </div>
    );
}