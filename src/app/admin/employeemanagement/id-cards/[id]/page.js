"use client";

import { use } from "react";
import {
    FaIdCard,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

import employees from "@/app/data/employee-management";

export default function EmployeeIdCard({ params }) {

    // Next.js 16+
    const { id } = use(params);

    const employee = employees.find(
        (emp) => String(emp.id) === String(id)
    );


    // Employee nahi mila
    if (!employee) {
        return (

            <div className="bg-slate-100 flex items-center justify-center">

                <div className="bg-white rounded-xl shadow-lg p-8 text-center">

                    <h2 className="text-xl font-bold text-red-500">
                        Employee Not Found
                    </h2>

                    <p className="text-slate-500 mt-2">
                        No employee found for ID: {id}
                    </p>

                </div>

            </div>
        );
    }

    return (
        <>
            <div className="bg-slate-100 flex items-center justify-center">

                <div className="w-[360px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">

                    <div className="relative h-[115px] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-6 pt-5">

                        <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-white/10" />

                        <div className="absolute -left-12 bottom-[-50px] w-32 h-32 rounded-full bg-white/10" />


                        <div className="relative flex items-center gap-3 text-white">

                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">

                                <FaIdCard className="text-blue-600 text-2xl" />

                            </div>


                            <div>

                                <h1 className="font-bold text-xl tracking-wide">
                                    Four Pay Save Solutions
                                </h1>

                                <p className="text-xs text-blue-100 mt-1">
                                    EMPLOYEE IDENTIFICATION CARD
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* PROFILE IMAGE */}

                    <div className="relative flex justify-center">

                        <div className="absolute -top-[48px]">

                            <div className="w-25 h-25 rounded-full bg-white p-1.5 shadow-lg">

                                <img
                                    src={employee.profileImage}
                                    alt={employee.firstName}
                                    className="w-full h-full rounded-full object-cover"
                                />

                            </div>

                        </div>

                    </div>


                    {/* NAME */}

                    <div className="text-center mt-[60px] px-2">

                        <h2 className="text-2xl font-bold text-slate-800">
                            {employee.fullName}
                        </h2>

                        <p className="text-blue-600 font-semibold text-sm mt-1">
                            {employee.designation}
                        </p>

                        <p className="text-slate-400 text-xs mt-1">
                            {employee.department}
                        </p>

                    </div>


                    {/* EMPLOYEE ID */}

                    <div className="mx-6 mt-3 py-2 bg-blue-50 border border-blue-100 rounded-xl text-center">

                        <p className="text-[10px] uppercase tracking-[3px] text-slate-400">
                            Employee ID
                        </p>

                        <p className="text-xl font-bold tracking-widest text-blue-700 mt-1">
                            {employee.idCard.cardNumber}
                        </p>

                    </div>


                    {/* PHONE */}

                    <div className="px-6 mt-3 space-y-3">

                        <div className="flex items-center gap-3">

                            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-blue-600">

                                <FaPhone className="text-xs" />

                            </div>


                            <div>

                                <p className="text-[9px] text-slate-400 uppercase">
                                    Phone
                                </p>

                                <p className="text-xs font-semibold text-slate-700">
                                    {employee.phone}
                                </p>

                            </div>

                        </div>


                        {/* EMAIL */}

                        <div className="flex items-center gap-3">

                            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-blue-600">

                                <FaEnvelope className="text-xs" />

                            </div>


                            <div>

                                <p className="text-[9px] text-slate-400 uppercase">
                                    Email
                                </p>

                                <p className="text-xs font-semibold text-slate-700">
                                    {employee.email}
                                </p>

                            </div>

                        </div>


                        {/* ADDRESS */}

                        <div className="flex items-center gap-3">

                            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-blue-600">

                                <FaMapMarkerAlt className="text-xs" />

                            </div>


                            <div>

                                <p className="text-[9px] text-slate-400 uppercase">
                                    Location
                                </p>

                                <p className="text-xs font-semibold text-slate-700">
                                    {employee.address.city}
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* FOOTER */}

                    <div className="mt-5 bg-slate-900 px-6 py-4 text-white">

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-[9px] text-slate-400 uppercase">
                                    Joining Date
                                </p>

                                <p className="text-xs font-semibold mt-1">
                                    {employee.joiningDate}
                                </p>

                            </div>


                            {/* QR */}

                            <div className="w-11 h-11 bg-white p-1 rounded">

                                <div className="w-full h-full grid grid-cols-4 gap-[2px]">

                                    {Array.from({ length: 16 }).map((_, index) => (

                                        <div
                                            key={index}
                                            className={
                                                index % 2 === 0
                                                    ? "bg-slate-900"
                                                    : "bg-white"
                                            }
                                        />

                                    ))}

                                </div>

                            </div>


                            {/* BLOOD GROUP */}

                            <div className="text-right">

                                <p className="text-[9px] text-slate-400 uppercase">
                                    Blood Group
                                </p>

                                <p className="text-sm font-bold text-red-400 mt-1">
                                    {employee.bloodGroup}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}