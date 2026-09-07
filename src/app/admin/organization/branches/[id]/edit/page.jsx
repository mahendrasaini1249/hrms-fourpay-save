"use client";

import { useParams } from "next/navigation";
import organizationData from "@/app/data/organizationdata";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import Link from "next/link";

export default function page() {

  const { id } = useParams();

  const branch = organizationData.find(
    (item) =>
      item.module === "branch" &&
      item.id === Number(id)
  );

  if (!branch) {
    return (
      <div className="p-6">
        <div className="rounded-xl border bg-white p-6 text-center">
          Branch not found
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">

      <div className="mx-auto max-w-4xl">

        {/* HEADER */}
        <div className="mb-5 flex items-center justify-between">

          <div>
            <p className="text-sm text-slate-500">
              Organization / Branches
            </p>

            <h1 className="mt-1 text-xl font-semibold text-slate-800">
              Edit Branch
            </h1>
          </div>

          <Link href={`/admin/organization/branches`}

            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-slate-600 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
          >
            <FaArrowLeft />
            Go Back
          </Link>


        </div>


        {/* FORM CARD */}
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

          <form className="p-5">

            {/* BRANCH INFORMATION */}
            <h2 className="mb-4 text-base font-semibold text-slate-800">
              Branch Information
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              {/* Branch Code */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Branch Code
                </label>

                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>


              {/* Branch Name */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Branch Name
                </label>

                <input
                  type="text"

                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>


              {/* Manager */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Manager
                </label>

                <input
                  type="text"

                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>


              {/* Employees */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Employees
                </label>

                <input
                  type="number"

                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

            </div>


            {/* CONTACT */}
            <div className="mt-6 border-t pt-5">

              <h2 className="mb-4 text-base font-semibold text-slate-800">
                Contact Information
              </h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                {/* Email */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Email
                  </label>

                  <input
                    type="email"

                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>


                {/* Phone */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Phone
                  </label>

                  <input
                    type="text"

                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

              </div>

            </div>


            {/* LOCATION */}
            <div className="mt-6 border-t pt-5">

              <h2 className="mb-4 text-base font-semibold text-slate-800">
                Location
              </h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                {/* City */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    City
                  </label>

                  <input
                    type="text"

                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>


                {/* State */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    State
                  </label>

                  <input
                    type="text"

                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>


                {/* Country */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Country
                  </label>

                  <input
                    type="text"

                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

              </div>

            </div>

            {/* STATUS */}
            <div className="mt-6 border-t pt-5">

              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Status
              </label>

              <select

                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 md:w-1/2"
              >
                <option value="Active">
                  Active
                </option>

                <option value="Inactive">
                  Inactive
                </option>
              </select>

            </div>


            {/* ACTIONS */}
            <div className="mt-6 flex justify-end gap-3 border-t pt-5">

              <button
                type="button"
                onClick={() => router.back()}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                <FaSave size={13} />
                Save Changes
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}