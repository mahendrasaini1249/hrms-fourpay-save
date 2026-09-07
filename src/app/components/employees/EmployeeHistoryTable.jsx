"use client";

import Link from "next/link";

import {
    FaEye,
    FaEdit,
    FaTrash,
    FaHistory,
    FaCalendarAlt,
} from "react-icons/fa";


export default function EmployeeHistoryTable({ emplyees }) {

    return (
        <div className="w-full">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

                <div>

                    <h1 className="text-2xl font-bold text-slate-800">
                        Employee History
                    </h1>

                    <p className="text-sm text-slate-500 mt-1">
                        Track employee activities and employment history
                    </p>

                </div>

            </div>

            {/* TABLE CARD */}

            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">

                {/* CARD HEADER */}

                <div className="px-5 py-4 border-b border-slate-200">

                    <div className="flex items-center justify-between">

                        <div className="flex items-center gap-3">

                            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">

                                <FaHistory className="text-sm" />

                            </div>


                            <div>

                                <h2 className="font-semibold text-slate-800">
                                    History Records
                                </h2>

                                <p className="text-xs text-slate-500">
                                    {emplyees.length} history records
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* TABLE */}

                <div className="overflow-x-auto">

                    <table className="w-full min-w-[900px]">


                        {/* ================= TABLE HEAD ================= */}

                        <thead className="bg-slate-50 border-b border-slate-200">

                            <tr>

                                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">
                                    Employee
                                </th>

                                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">
                                    Employee ID
                                </th>

                                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">
                                    Date
                                </th>

                                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">
                                    Action
                                </th>

                                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">
                                    Description
                                </th>

                                <th className="text-center px-5 py-3 text-xs font-semibold text-slate-500 uppercase">
                                    Actions
                                </th>

                            </tr>

                        </thead>


                        {/* ================= TABLE BODY ================= */}

                        <tbody className="divide-y divide-slate-100">

                            {emplyees.length > 0 ? (

                                emplyees.map((emp) => (

                                    emp.history.map((history) => (

                                        <tr
                                            key={history.id}
                                            className="hover:bg-slate-50 transition"
                                        >

                                            {/* Employee */}
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-3">

                                                    <img
                                                        src={emp.profileImage}
                                                        alt={emp.firstName}
                                                        width={42}
                                                        height={42}
                                                        className="w-10 h-10 rounded-full object-cover"
                                                    />

                                                    <div>
                                                        <p className="text-sm font-semibold text-slate-700">
                                                            {emp.fullName}
                                                        </p>

                                                        <p className="text-xs text-slate-400 mt-0.5">
                                                            Employee
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


                                            {/* Date */}
                                            <td className="px-5 py-4">

                                                <div className="flex items-center gap-2 text-sm text-slate-600">

                                                    <FaCalendarAlt className="text-slate-400 text-xs" />

                                                    {history.date}

                                                </div>

                                            </td>


                                            {/* Action */}
                                            <td className="px-5 py-4">

                                                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-green-50 text-green-700 text-xs font-semibold">

                                                    {history.action}

                                                </span>

                                            </td>


                                            {/* Description */}
                                            <td className="px-5 py-4 max-w-[300px]">

                                                <p className="text-sm text-slate-600 truncate">

                                                    {history.description}

                                                </p>

                                            </td>


                                            {/* Actions */}
                                            <td className="px-5 py-4">

                                                <div className="flex items-center justify-center gap-2">

                                                    {/* View */}
                                                    <Link
                                                        href={`/admin/employeemanagement/employee-history/${emp.id}`}
                                                        title="View History"
                                                        className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 flex items-center justify-center transition"
                                                    >
                                                        <FaEye className="text-xs" />
                                                    </Link>


                                                    {/* Edit */}
                                                    <Link
                                                        href={`/admin/employeemanagement/employee-history/${emp.id}/edit-history`}
                                                        title="Edit History"
                                                        className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100 flex items-center justify-center transition"
                                                    >
                                                        <FaEdit className="text-xs" />
                                                    </Link>


                                                    {/* Delete */}
                                                    <button
                                                        type="button"
                                                        title="Delete History"
                                                        className="w-8 h-8 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 flex items-center justify-center transition"
                                                    >
                                                        <FaTrash className="text-xs" />
                                                    </button>

                                                </div>

                                            </td>

                                        </tr>

                                    ))

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan="6"
                                        className="px-5 py-12 text-center"
                                    >

                                        <div className="flex flex-col items-center">

                                            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                                <FaHistory />
                                            </div>

                                            <p className="text-sm font-semibold text-slate-700 mt-3">
                                                No History Found
                                            </p>

                                            <p className="text-xs text-slate-400 mt-1">
                                                No employee history records available
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