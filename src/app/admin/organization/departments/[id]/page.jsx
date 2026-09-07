"use client";

import {
    FaBuilding,
    FaUserTie,
    FaPhone,
    FaUsers,
    FaCode,
    FaMapMarkerAlt,
    FaCheckCircle,
    FaArrowLeft,
} from "react-icons/fa";
import { useParams } from "next/navigation";
import organizationData from "@/app/data/organizationdata";

export default function page() {

    const { id } = useParams();

    const Department = organizationData.find(
        (item) =>
            item.module === "department" &&
            item.id === Number(id)
    );

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
                        Department Details
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        View complete department information
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
                                {Department.departmentName}
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Department Code: {Department.departmentCode}
                            </p>
                        </div>


                        {/* Status */}
                        <div className="ml-auto">
                            <span
                                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium ${Department.status === "Active"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                                    }`}
                            >
                                <FaCheckCircle size={12} />

                                {Department.status}
                            </span>
                        </div>

                    </div>


                    {/* Department Information */}
                    <div className="p-6">

                        <h3 className="mb-5 text-base font-semibold text-slate-800">
                            Department Information
                        </h3>


                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                            {/* Department Name */}
                            <div className="rounded-xl border border-slate-200 p-4">
                                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
                                    <FaBuilding />
                                    Department Name
                                </div>

                                <p className="font-medium text-slate-800">
                                    {Department.departmentName}
                                </p>
                            </div>


                            {/* Department Code */}
                            <div className="rounded-xl border border-slate-200 p-4">
                                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
                                    <FaCode />
                                    Department Code
                                </div>

                                <p className="font-medium text-slate-800">
                                    {Department.departmentCode}
                                </p>
                            </div>


                            {/* Department Head */}
                            <div className="rounded-xl border border-slate-200 p-4">
                                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
                                    <FaUserTie />
                                    Department Head
                                </div>

                                <p className="font-medium text-slate-800">
                                    {Department.head}
                                </p>
                            </div>


                            {/* Branch */}
                            <div className="rounded-xl border border-slate-200 p-4">
                                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
                                    <FaMapMarkerAlt />
                                    Branch
                                </div>

                                <p className="font-medium text-slate-800">
                                    {Department.branch}
                                </p>
                            </div>


                            {/* Employees */}
                            <div className="rounded-xl border border-slate-200 p-4">
                                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
                                    <FaUsers />
                                    Total Employees
                                </div>

                                <p className="font-medium text-slate-800">
                                    {Department.employees}
                                </p>
                            </div>


                            {/* Phone */}
                            <div className="rounded-xl border border-slate-200 p-4">
                                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
                                    <FaPhone />
                                    Contact Number
                                </div>

                                <p className="font-medium text-slate-800">
                                    {Department.phone}
                                </p>
                            </div>


                            {/* Status */}
                            <div className="rounded-xl border border-slate-200 p-4">
                                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
                                    <FaCheckCircle />
                                    Status
                                </div>

                                <p className="font-medium text-slate-800">
                                    {Department.status}
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