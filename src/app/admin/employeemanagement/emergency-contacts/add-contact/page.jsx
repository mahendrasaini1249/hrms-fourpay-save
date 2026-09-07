"use client";

import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaUser, FaUsers, FaPhone, FaSave } from "react-icons/fa";

export default function Page() {
    return (
        <div className="w-full">
            <div className="flex flex-col mb-6">

                <div>
                    <h1 className="text-2xl font-bold text-slate-800">
                        Add Contact Information
                    </h1>

                    <p className="text-sm text-slate-500 mt-1">
                        Add employee emergency contact information
                    </p>
                </div>

                <Link
                    href="/admin/employeemanagement/emergency-contacts"
                    className="w-[150px] justify-center inline-flex items-center gap-2 mt-5 px-3 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium transition"
                >
                    <FaArrowLeft className="text-xs" />
                    Back to Contacts
                </Link>

            </div>


            {/* ================= FORM CARD ================= */}

            <div className="w-full bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">


                {/* Card Header */}

                <div className="px-6 py-5 border-b border-slate-200">

                    <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                            <FaUsers />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-slate-800">
                                Add Emergency Contact
                            </h2>

                            <p className="text-xs text-slate-500 mt-1">
                                Enter the emergency contact details for an employee
                            </p>
                        </div>

                    </div>

                </div>


                {/* ================= FORM ================= */}

                <form>

                    <div className="p-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


                            {/* Employee */}

                            <div>

                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Employee
                                    <span className="text-red-500 ml-1">*</span>
                                </label>

                                <div className="relative">

                                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none" />

                                    <select
                                        name="employee"
                                        className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg bg-white text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                        defaultValue=""
                                    >

                                        <option value="" disabled>
                                            Select Employee
                                        </option>

                                        <option value="1">
                                            Rahul Sharma - EMP001
                                        </option>

                                        <option value="2">
                                            Employee 2 - EMP002
                                        </option>

                                        <option value="3">
                                            Employee 3 - EMP003
                                        </option>

                                    </select>

                                </div>

                            </div>


                            {/* Contact Person */}

                            <div>

                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Contact Person Name
                                    <span className="text-red-500 ml-1">*</span>
                                </label>

                                <div className="relative">

                                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />

                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter contact person name"
                                        className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                    />

                                </div>

                            </div>


                            {/* Relationship */}

                            <div>

                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Relationship
                                    <span className="text-red-500 ml-1">*</span>
                                </label>

                                <div className="relative">

                                    <FaUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none" />

                                    <select
                                        name="relation"
                                        defaultValue=""
                                        className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg bg-white text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                    >

                                        <option value="" disabled>
                                            Select Relationship
                                        </option>

                                        <option value="Father">
                                            Father
                                        </option>

                                        <option value="Mother">
                                            Mother
                                        </option>

                                        <option value="Spouse">
                                            Spouse
                                        </option>

                                        <option value="Brother">
                                            Brother
                                        </option>

                                        <option value="Sister">
                                            Sister
                                        </option>

                                        <option value="Son">
                                            Son
                                        </option>

                                        <option value="Daughter">
                                            Daughter
                                        </option>

                                        <option value="Other">
                                            Other
                                        </option>

                                    </select>

                                </div>

                            </div>


                            {/* Phone */}

                            <div>

                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Phone Number
                                    <span className="text-red-500 ml-1">*</span>
                                </label>

                                <div className="relative">

                                    <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />

                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter phone number"
                                        className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                    />

                                </div>

                            </div>


                            {/* Alternate Phone */}

                            <div>

                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Alternate Phone
                                </label>

                                <div className="relative">

                                    <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />

                                    <input
                                        type="tel"
                                        name="alternatePhone"
                                        placeholder="Enter alternate phone number"
                                        className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                    />

                                </div>

                                <p className="text-xs text-slate-400 mt-1.5">
                                    Optional
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* ================= FOOTER ================= */}

                    <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">


                        {/* Cancel */}

                        <Link
                            href="/admin/employeemanagement/emergency-contacts"
                            className="px-4 py-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-600 text-sm font-medium transition"
                        >
                            Cancel
                        </Link>


                        {/* Save */}

                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition"
                        >
                            <FaSave className="text-xs" />
                            Add Contact
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}