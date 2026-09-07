"use client";

import {
    FaBuilding,
    FaUserTie,
    FaUsers,
    FaCheckCircle,
    FaArrowLeft,
} from "react-icons/fa";
import { useParams } from "next/navigation";
import organizationData from "@/app/data/organizationdata";

export default function page() {

    const { id } = useParams();

    const Designation = organizationData.find(
        (item) =>
            item.module === "designation" &&
            item.id === Number(id)
    );

    if (!Designation) {
        return (
            <div className="min-h-screen bg-slate-100 p-6">
                <div className="mx-auto max-w-4xl">
                    <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
                        <h2 className="text-xl font-semibold text-slate-800">
                            Designation Not Found
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            The requested Designation does not exist.
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
                        Designation Details
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        View complete Designation information
                    </p>
                </div>


                {/* Main Card */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                    {/* Card Header */}
                    <div className="flex items-center gap-4 border-b border-slate-200 bg-slate-50 px-6 py-5">

                        {/* Icon */}
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                            <FaBuilding size={24} />
                        </div>


                        {/* Department Name */}
                        <div>
                            <h2 className="text-xl font-semibold text-slate-800">
                                {Designation.designationName}
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Designation Code: {Designation.designationCode}
                            </p>
                        </div>


                        {/* Status */}
                        <div className="ml-auto">
                            <span
                                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium ${Designation.status === "Active"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                                    }`}
                            >
                                <FaCheckCircle size={12} />

                                {Designation.status}
                            </span>
                        </div>

                    </div>


                    {/* Department Information */}
                    <div className="p-6">

                        <h3 className="mb-5 text-base font-semibold text-slate-800">
                            Designation Information
                        </h3>


                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">


                            {/* Department  */}
                            <div className="rounded-xl border border-slate-200 p-4">
                                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
                                    <FaUserTie />
                                    Level
                                </div>

                                <p className="font-medium text-slate-800">
                                    {Designation.level}
                                </p>
                            </div>

                            <div className="rounded-xl border border-slate-200 p-4">
                                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
                                    <FaUserTie />
                                    Department
                                </div>

                                <p className="font-medium text-slate-800">
                                    {Designation.department}
                                </p>
                            </div>


                            {/* Employees */}
                            <div className="rounded-xl border border-slate-200 p-4">
                                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
                                    <FaUsers />
                                    Total Employees
                                </div>

                                <p className="font-medium text-slate-800">
                                    {Designation.employees}
                                </p>
                            </div>


                            {/* Status */}
                            <div className="rounded-xl border border-slate-200 p-4">
                                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
                                    <FaCheckCircle />
                                    Status
                                </div>

                                <p className="font-medium text-slate-800">
                                    {Designation.status}
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* Footer */}
                    <div className="flex justify-end border-t border-slate-200 bg-slate-50 px-6 py-4">

                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                        >
                            <FaArrowLeft size={13} />
                            Back
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}