"use client";

import { useParams } from "next/navigation";

import {
    FaBuilding,
    FaUserTie,
    FaPhone,
    FaUsers,
    FaCode,
    FaMapMarkerAlt,
    FaCheckCircle,
    FaArrowLeft,
    FaSave,
} from "react-icons/fa";

import organizationData from "@/app/data/organizationdata";

export default function page() {

    const { id } = useParams();

    // URL ID ke basis par department find
    const Department = organizationData.find(
        (item) =>
            item.module === "department" &&
            item.id === Number(id)
    );

    // Agar department nahi mila
    if (!Department) {
        return (
            <div className="min-h-screen bg-slate-100 p-6">

                <div className="mx-auto max-w-4xl">

                    <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">

                        <h2 className="text-xl font-semibold text-slate-800">
                            Department Not Found
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            The requested department does not exist.
                        </p>

                    </div>

                </div>

            </div>
        );
    }


    return (
        <div className="min-h-screen bg-slate-100 p-6">

            <div className="mx-auto max-w-4xl">

                {/* Page Header */}
                <div className="mb-6">

                    <h1 className="text-2xl font-semibold text-slate-800">
                        Edit Department
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Update department information
                    </p>

                </div>


                {/* Edit Card */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">


                    {/* Card Header */}
                    <div className="flex items-center gap-4 border-b border-slate-200 bg-slate-50 px-6 py-5">

                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                            <FaBuilding size={24} />
                        </div>

                        <div>

                            <h2 className="text-xl font-semibold text-slate-800">
                                {Department.departmentName}
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Department ID: {Department.id}
                            </p>

                        </div>

                    </div>


                    {/* Edit Form */}
                    <form>

                        <div className="p-6">

                            <h3 className="mb-5 text-base font-semibold text-slate-800">
                                Department Information
                            </h3>


                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">


                                {/* Department Name */}
                                <div>

                                    <label className="mb-2 block text-sm font-medium text-slate-700">
                                        Department Name
                                    </label>

                                    <div className="relative">

                                        <FaBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

                                        <input
                                            type="text"
                                            name="departmentName"
                                            
                                            className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                        />

                                    </div>

                                </div>


                                {/* Department Code */}
                                <div>

                                    <label className="mb-2 block text-sm font-medium text-slate-700">
                                        Department Code
                                    </label>

                                    <div className="relative">

                                        <FaCode className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

                                        <input
                                            type="text"
                                            name="departmentCode"
                                          
                                            className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-3 text-sm uppercase outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                        />

                                    </div>

                                </div>


                                {/* Department Head */}
                                <div>

                                    <label className="mb-2 block text-sm font-medium text-slate-700">
                                        Department Head
                                    </label>

                                    <div className="relative">

                                        <FaUserTie className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

                                        <input
                                            type="text"
                                            name="head"
                                           
                                            className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                        />

                                    </div>

                                </div>


                                {/* Branch */}
                                <div>

                                    <label className="mb-2 block text-sm font-medium text-slate-700">
                                        Branch
                                    </label>

                                    <div className="relative">

                                        <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

                                        <input
                                            type="text"
                                            name="branch"
                                           
                                            className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                        />

                                    </div>

                                </div>


                                {/* Employees */}
                                <div>

                                    <label className="mb-2 block text-sm font-medium text-slate-700">
                                        Total Employees
                                    </label>

                                    <div className="relative">

                                        <FaUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

                                        <input
                                            type="number"
                                            name="employees"
                                            
                                            min="0"
                                            className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                        />

                                    </div>

                                </div>


                                {/* Phone */}
                                <div>

                                    <label className="mb-2 block text-sm font-medium text-slate-700">
                                        Contact Number
                                    </label>

                                    <div className="relative">

                                        <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

                                        <input
                                            type="tel"
                                            name="phone"
                                            
                                            className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                        />

                                    </div>

                                </div>


                                {/* Status */}
                                <div>

                                    <label className="mb-2 block text-sm font-medium text-slate-700">
                                        Status
                                    </label>

                                    <div className="relative">

                                        <FaCheckCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

                                        <select
                                            name="status"
                                            defaultValue={Department.status}
                                            className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                        >

                                            <option value="Active">
                                                Active
                                            </option>

                                            <option value="Inactive">
                                                Inactive
                                            </option>

                                        </select>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* Footer */}
                        <div className="flex justify-end gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4">

                            <button
                                type="button"
                                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                            >
                                <FaArrowLeft size={13} />
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                            >
                                <FaSave size={14} />
                                Save Changes
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}