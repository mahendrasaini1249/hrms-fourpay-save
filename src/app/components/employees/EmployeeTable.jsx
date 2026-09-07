"use client";

import Link from "next/link";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

export default function EmployeeTable({
    employees = [],
    showAllDetails = false,
}) {
    return (
        <div className="bg-white mt-4 rounded-xl shadow p-4 overflow-x-auto">

            <h2 className="text-lg font-semibold mb-4">
                Employee List
            </h2>

            <table className="w-full text-sm text-left">

                {/* Table Head */}
                <thead className="text-slate-500 border-b">
                    <tr>

                        <th className="py-2 px-3">
                            Img
                        </th>

                        <th className="py-2 px-3">
                            Email
                        </th>

                        {/* Extra fields for Directory */}
                        {showAllDetails && (
                            <>
                                <th className="py-2 px-3">
                                    Number
                                </th>

                                <th className="py-2 px-3">
                                    Designation
                                </th>
                            </>
                        )}

                        <th className="py-2 px-3">
                            Department
                        </th>

                        <th className="py-2 px-3">
                            Status
                        </th>

                        <th className="py-2 px-3 text-center">
                            View
                        </th>

                        <th className="py-2 px-3 text-center">
                            Action
                        </th>

                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>

                    {employees.map((emp) => (

                        <tr
                            key={emp.id}
                            className="border-b hover:bg-slate-50"
                        >

                            {/* Profile Image */}
                            <td className="py-4 px-3">

                                <img
                                    src={emp.profileImage}
                                    alt={emp.fullName}
                                    width={50}
                                    height={50}
                                    className="w-12 h-12 rounded-full object-cover" />
                            </td>



                            {/* Email */}
                            <td className="py-4 px-3">
                                {emp.email}
                            </td>

                            {/* Employee ID */}
                            {showAllDetails && (
                                <td className="py-4 px-3">
                                    {emp.phone}
                                </td>
                            )}

                            {/* Designation */}
                            {showAllDetails && (

                                <td className="py-4 px-3">
                                    {emp.designation}
                                </td>

                            )}

                            {/* Department */}
                            <td className="py-4 px-3">
                                {emp.department}
                            </td>

                            {/* Status */}
                            <td className="py-4 px-3">

                                <span
                                    className={`px-4 py-1 rounded-full text-xs ${emp.employmentStatus === "Active"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {emp.employmentStatus}
                                </span>

                            </td>


                            {/* View */}
                            <td className="py-4 px-3 text-center">
                                <Link
                                    href={`/admin/employeemanagement/all-employee/${emp.id}`}
                                    title="View Employee"
                                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                                >
                                    <FaEye size={15} />
                                </Link>

                            </td>

                            {/* Action */}
                            <td className="py-4 px-3">

                                <div className="flex items-center justify-center gap-3">

                                    {/* Edit */}
                                    <Link
                                        href={`/admin/employeemanagement/all-employee/${emp.id}/edit`}
                                        title="Edit Employee"
                                        className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-yellow-50 text-yellow-600 hover:bg-yellow-100 transition"
                                    >
                                        <FaEdit size={14} />
                                    </Link>

                                    {/* Delete */}
                                    <button
                                        type="button"
                                        title="Delete Employee"
                                        className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition"
                                    >
                                        <FaTrash size={14} />
                                    </button>

                                </div>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}