"use client";

import {
    FaUserTie,
    FaUser,
    FaBuilding,
    FaBriefcase,
    FaEnvelope,
    FaPhone,
    FaCheckCircle,
    FaArrowLeft,
} from "react-icons/fa";

import { useParams, useRouter } from "next/navigation";

import organizationData from "@/app/data/organizationdata";

export default function EditReportingManagerPage() {

    const { id } = useParams();
    const router = useRouter();

    // ID ke basis par Reporting Manager find
    const ReportingManagerData = organizationData.find(
        (item) =>
            item.module === "reporting-manager" &&
            item.id === Number(id)
    );

    // Data nahi mila
    if (!ReportingManagerData) {
        return (
            <div className="min-h-screen bg-slate-100 p-6">

                <div className="mx-auto max-w-4xl">

                    <div className="rounded-2xl border border-red-200 bg-white p-10 text-center shadow-sm">

                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-500">
                            <FaUserTie size={24} />
                        </div>

                        <h2 className="text-xl font-semibold text-slate-800">
                            Reporting Manager Not Found
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            The requested Reporting Manager does not exist.
                        </p>

                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white"
                        >
                            <FaArrowLeft size={13} />
                            Go Back
                        </button>

                    </div>

                </div>

            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-100 p-6">

            <div className="mx-auto max-w-4xl">


                {/* ================= HEADER ================= */}

                <div className="mb-6 flex items-center justify-between">

                    <div>

                        <h1 className="text-2xl font-semibold text-slate-800">
                            Edit Reporting Manager
                        </h1>

                        <p className="mt-1 text-sm text-slate-500">
                            Update reporting manager information
                        </p>

                    </div>


                    {/* Add Reporting Manager */}

                    {/* <Link
                        href="/admin/organization/reporting-manager/addreportingmanager"
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                    >
                        <FaPlus size={12} />
                        Add Reporting Manager
                    </Link> */}

                </div>


                {/* ================= MAIN CARD ================= */}

                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">


                    {/* Card Header */}

                    <div className="flex items-center gap-4 border-b border-slate-200 bg-slate-50 px-6 py-5">

                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                            <FaUserTie size={25} />
                        </div>

                        <div>

                            <h2 className="text-xl font-semibold text-slate-800">
                                {ReportingManagerData.managerName}
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                {ReportingManagerData.designation}
                            </p>

                        </div>

                        <div className="ml-auto">

                            <span
                                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold ${ReportingManagerData.status === "Active"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                                    }`}
                            >
                                <FaCheckCircle size={12} />
                                {ReportingManagerData.status}
                            </span>

                        </div>

                    </div>


                    {/* ================= FORM ================= */}

                    <form className="p-6">
                        <h3 className="mb-5 text-base font-semibold text-slate-800">
                            Manager Information
                        </h3>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                            {/* Employee ID */}

                            <div>

                                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                                    <FaUser className="text-blue-500" />
                                    Employee ID
                                </label>

                                <input
                                    type="text"
                                    name="employeeId"
                                    placeholder="Enter employee ID"
                                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />

                            </div>


                            {/* Manager Name */}

                            <div>

                                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                                    <FaUserTie className="text-blue-500" />
                                    Manager Name
                                </label>

                                <input
                                    type="text"
                                    name="managerName"
                                    placeholder="Enter manager name"
                                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />

                            </div>


                            {/* Department */}

                            <div>

                                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                                    <FaBuilding className="text-blue-500" />
                                    Department
                                </label>

                                <input
                                    type="text"
                                    name="department"
                                    placeholder="Enter department"
                                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />

                            </div>


                            {/* Designation */}

                            <div>

                                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                                    <FaBriefcase className="text-blue-500" />
                                    Designation
                                </label>

                                <input
                                    type="text"
                                    name="designation"
                                    placeholder="Enter designation"
                                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />

                            </div>


                            {/* Email */}

                            <div>

                                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                                    <FaEnvelope className="text-blue-500" />
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />

                            </div>


                            {/* Phone */}

                            <div>

                                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                                    <FaPhone className="text-blue-500" />
                                    Phone
                                </label>

                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Enter phone number"
                                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />

                            </div>


                            {/* Status */}

                            <div>

                                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                                    <FaCheckCircle className="text-green-500" />
                                    Status
                                </label>

                                <select name="status" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" >
                                    <option value="Active">
                                        Active
                                    </option>

                                    <option value="Inactive">
                                        Inactive
                                    </option>

                                </select>

                            </div>

                        </div>


                        {/* ================= FOOTER ================= */}

                        <div className="mt-6 flex items-center justify-end gap-3 border-t border-slate-200 pt-5">

                            <button
                                type="button"
                                onClick={() => router.back()}
                                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                            >
                                <FaArrowLeft size={13} />
                                Cancel
                            </button>


                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                            >
                                <FaCheckCircle size={14} />
                                Update Reporting Manager
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}