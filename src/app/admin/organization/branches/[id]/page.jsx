"use client";

import { useParams } from "next/navigation";
import organizationData from "@/app/data/organizationdata";
import Link from "next/link";

import {
    FaBuilding,
    FaUserTie,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaUsers,
    FaArrowLeft,
} from "react-icons/fa";


export default function page() {

    const { id } = useParams();

    // Current branch find
    const branch = organizationData.find(
        (item) =>
            item.module === "branch" &&
            item.id === Number(id)
    );

    // Branch not found
    if (!branch) {
        return (
            <div className="min-h-screen bg-slate-50 p-6">

                <div className="mx-auto max-w-5xl">
                    <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">

                        <h2 className="text-xl font-semibold text-slate-800">
                            Branch Not Found
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            The requested branch does not exist.
                        </p>

                        <Link href={`/admin/organization/branches`}

                            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-slate-600 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
                        >
                            <FaArrowLeft />
                            Go Back
                        </Link>

                    </div>
                </div>

            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 p-6">

            <div className="mx-auto max-w-5xl">

                {/* PAGE HEADER */}
                <div className="mb-6 flex items-center justify-between">

                    <div>
                        <p className="text-sm text-slate-500">
                            Organization / Branches
                        </p>

                        <h1 className="mt-1 text-2xl font-semibold text-slate-800">
                            Branch Details
                        </h1>
                    </div>

                    <Link href={`/admin/organization/branches`}

                        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-slate-600 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
                    >
                        <FaArrowLeft />
                        Go Back
                    </Link>

                </div>


                {/* MAIN CARD */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                    {/* CARD HEADER */}
                    <div className="flex flex-col gap-4 border-b bg-slate-50 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">

                        <div className="flex items-center gap-4">

                            {/* ICON */}
                            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                                <FaBuilding size={28} />
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-slate-800">
                                    {branch.branchName}
                                </h2>

                                <p className="mt-1 text-sm text-slate-500">
                                    Branch Code: {branch.branchCode}
                                </p>
                            </div>

                        </div>


                        {/* STATUS */}
                        <span
                            className={`w-fit rounded-full px-4 py-1.5 text-sm font-semibold ${branch.status === "Active"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-red-100 text-red-700"
                                }`}
                        >
                            {branch.status}
                        </span>

                    </div>


                    {/* CARD BODY */}
                    <div className="p-6">

                        {/* BRANCH INFORMATION */}

                        <div>
                            <h3 className="mb-4 text-lg font-semibold text-slate-800">
                                Branch Information
                            </h3>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

                                {/* Branch Code */}
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                    <p className="text-sm text-slate-500">
                                        Branch Code
                                    </p>

                                    <p className="mt-2 font-semibold text-slate-800">
                                        {branch.branchCode}
                                    </p>
                                </div>


                                {/* Branch Name */}
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                    <p className="text-sm text-slate-500">
                                        Branch Name
                                    </p>

                                    <p className="mt-2 font-semibold text-slate-800">
                                        {branch.branchName}
                                    </p>
                                </div>


                                {/* Manager */}
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                    <p className="flex items-center gap-2 text-sm text-slate-500">
                                        <FaUserTie className="text-blue-500" />
                                        Manager
                                    </p>

                                    <p className="mt-2 font-semibold text-slate-800">
                                        {branch.manager}
                                    </p>
                                </div>


                                {/* Employees */}
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                    <p className="flex items-center gap-2 text-sm text-slate-500">
                                        <FaUsers className="text-blue-500" />
                                        Total Employees
                                    </p>

                                    <p className="mt-2 font-semibold text-slate-800">
                                        {branch.employees}
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* CONTACT INFORMATION */}

                        <div className="mt-8 border-t border-slate-200 pt-6">

                            <h3 className="mb-4 text-lg font-semibold text-slate-800">
                                Contact Information
                            </h3>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                                {/* Email */}
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">

                                    <p className="flex items-center gap-2 text-sm text-slate-500">
                                        <FaEnvelope className="text-blue-500" />
                                        Email
                                    </p>

                                    <p className="mt-2 break-all font-medium text-slate-800">
                                        {branch.email}
                                    </p>

                                </div>


                                {/* Phone */}
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">

                                    <p className="flex items-center gap-2 text-sm text-slate-500">
                                        <FaPhone className="text-blue-500" />
                                        Phone
                                    </p>

                                    <p className="mt-2 font-medium text-slate-800">
                                        {branch.phone}
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* LOCATION */}

                        <div className="mt-8 border-t border-slate-200 pt-6">

                            <h3 className="mb-4 text-lg font-semibold text-slate-800">
                                Location
                            </h3>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                                {/* City */}
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">

                                    <p className="flex items-center gap-2 text-sm text-slate-500">
                                        <FaMapMarkerAlt className="text-blue-500" />
                                        City
                                    </p>

                                    <p className="mt-2 font-medium text-slate-800">
                                        {branch.city}
                                    </p>

                                </div>


                                {/* State */}
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">

                                    <p className="text-sm text-slate-500">
                                        State
                                    </p>

                                    <p className="mt-2 font-medium text-slate-800">
                                        {branch.state}
                                    </p>

                                </div>


                                {/* Country */}
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">

                                    <p className="text-sm text-slate-500">
                                        Country
                                    </p>

                                    <p className="mt-2 font-medium text-slate-800">
                                        {branch.country}
                                    </p>

                                </div>

                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </div>
    );
}