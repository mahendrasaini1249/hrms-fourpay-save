
"use client";

import { useParams } from "next/navigation";
import organizationData from "@/app/data/organizationdata";

export default function page() {
    const params = useParams();


    // URL se id
    const id = Number(params.id);

    // ID ke basis par designation find
    const designation = organizationData.find(
        (item) => item.id === id
    );

    // Agar ID galat hai
    if (!designation) {
        return (
            <div className="min-h-screen bg-slate-100 p-6">
                <div className="mx-auto max-w-3xl rounded-xl border border-red-200 bg-white p-6 shadow-sm">
                    <h1 className="text-xl font-semibold text-red-600">
                        Designation Not Found
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Designation with ID {id} does not exist.
                    </p>

                    <button
                        onClick={() => router.back()}
                        className="mt-5 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }



    return (
        <div className="min-h-screen bg-slate-100 p-6">
            <div className="mx-auto max-w-3xl">

                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-slate-800">
                        Edit Designation
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Update designation information
                    </p>
                </div>

                {/* Form Card */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

                    <form >

                        {/* Designation Code */}
                        <div className="mb-5">
                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Designation Code
                            </label>

                            <input
                                type="text"
                                name="designationCode"

                                placeholder="Enter designation code"
                                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        {/* Department */}
                        <div className="mb-5">
                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Department
                            </label>

                            <input
                                type="text"
                                name="department"

                                placeholder="Enter department"
                                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        {/* Designation Name */}
                        <div className="mb-6">
                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Designation Name
                            </label>

                            <input
                                type="text"
                                name="designationName"

                                placeholder="Enter designation name"
                                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center justify-end gap-3 border-t border-slate-200 pt-5">

                            <button
                                type="button"
                                onClick={() => router.back()}
                                className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
                            >
                                Update Designation
                            </button>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

