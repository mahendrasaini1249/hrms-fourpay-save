"use client";
import Link from "next/link";
import {
    FaEye,
    FaEdit,
    FaTrash,
    FaPlus,
    FaPhone,
} from "react-icons/fa";


export default function ContactTable({ employees }) {

    return (
        <div className="w-full">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

                <div>
                    <h1 className="text-2xl font-bold text-slate-800">
                        Emergency Contacts
                    </h1>

                    <p className="text-sm text-slate-500 mt-1">
                        Manage employee emergency contact information
                    </p>
                </div>

                <Link
                    href="/admin/employeemanagement/emergency-contacts/add-contact"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition"
                >
                    <FaPlus className="text-xs" />
                    Add Contact
                </Link>

            </div>


            {/* Table Card */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">

                {/* Table Header */}
                <div className="px-5 py-4 border-b border-slate-200">

                    <div className="flex items-center gap-2">

                        <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                            <FaPhone className="text-sm" />
                        </div>

                        <div>
                            <h2 className="font-semibold text-slate-800">
                                Contact List
                                <span className="ms-7"> {employees.length}</span>
                            </h2>

                            <p className="text-xs text-slate-500">
                                emergency contacts
                            </p>
                        </div>

                    </div>

                </div>


                {/* Responsive Table */}
                <div className="overflow-x-auto">

                    <table className="w-full min-w-[800px]">

                        <thead className="bg-slate-50 border-b border-slate-200">

                            <tr className="">
                                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">
                                    Employee
                                </th>

                                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">
                                    Employee ID
                                </th>

                                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">
                                    Contact Person
                                </th>

                                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">
                                    Relationship
                                </th>

                                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">
                                    Phone
                                </th>

                                <th className="text-center px-5 py-3 text-xs font-semibold text-slate-500 uppercase">
                                    Actions
                                </th>

                            </tr>

                        </thead>


                        <tbody className="divide-y divide-slate-100">
                            {
                                employees.map((contact) => {
                                    return (
                                        <tr key={contact.id} className="hover:bg-slate-50 transition">
                                            {/* Employee */}
                                            <td className="px-5 py-4 ">
                                                <div className="flex items-center gap-3">
                                                    <img width={50} height={50} src={contact.profileImage} alt={contact.fullName} />

                                                    <p className="text-sm font-semibold text-slate-500">
                                                        {contact.fullName}
                                                    </p>

                                                </div>
                                            </td>

                                            {/* emplpoyee id */}
                                            <td className="px-5 py-4">

                                                <p className="text-xs text-slate-500 font-bold mt-0.5">
                                                    {contact.employeeId}
                                                </p>

                                            </td>

                                            {/* Contact Person */}
                                            <td className="px-5 py-4">

                                                <p className="text-sm font-medium text-slate-700">
                                                    {contact.emergencyContact.name}
                                                </p>

                                            </td>

                                            {/* Relationship */}
                                            <td className="px-5 py-4">

                                                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium">
                                                    {contact.emergencyContact.relation}
                                                </span>

                                            </td>

                                            {/* Phone */}
                                            <td className="px-5 py-4">
                                                <span className="text-sm text-slate-700">
                                                    {contact.emergencyContact.phone}
                                                </span>
                                            </td>


                                            {/* Actions */}
                                            <td className="px-5 py-4">

                                                <div className="flex items-center justify-center gap-2">

                                                    {/* View */}
                                                    <Link
                                                        href={`/admin/employeemanagement/emergency-contacts/${contact.id}`}
                                                        title="View"
                                                        className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 flex items-center justify-center transition"
                                                    >
                                                        <FaEye className="text-xs" />
                                                    </Link>


                                                    {/* Edit */}
                                                    <Link
                                                        href={`/admin/employeemanagement/emergency-contacts/${contact.id}/edit`}
                                                        title="Edit"
                                                        className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100 flex items-center justify-center transition"
                                                    >
                                                        <FaEdit className="text-xs" />
                                                    </Link>


                                                    {/* Delete */}
                                                    <button
                                                        type="button"
                                                        title="Delete"
                                                        className="w-8 h-8 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 flex items-center justify-center transition"
                                                    >
                                                        <FaTrash className="text-xs" />
                                                    </button>

                                                </div>

                                            </td>

                                        </tr>
                                    )
                                })
                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}