"use client";

import Link from "next/link";
import { FaArrowLeft } from 'react-icons/fa'


export default function page() {

  return (
    <>
      <Link
        href="/admin/employeemanagement/employee-history"
        className="w-[150px] justify-center inline-flex items-center gap-2 mt-5 px-3 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium transition"
      >
        <FaArrowLeft className="text-xs" />
        Back to History
      </Link>
      <div className="min-h-screen bg-slate-100 p-6">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200">

          {/* Header */}
          <div className="px-6 py-5 border-b border-slate-200">
            <h1 className="text-xl font-semibold text-slate-800">
              Edit Employee History
            </h1>

            <p className="text-sm text-slate-500 mt-1">
              Update employee history record
            </p>
          </div>

          {/* Form */}
          <form className="p-6 space-y-5">

            {/* Action */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Action
              </label>

              <select
                name="action"
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-500"
              >
                <option value="">Select Action</option>
                <option value="Joined">Joined</option>
                <option value="Promoted">Promoted</option>
                <option value="Transferred">Transferred</option>
                <option value="Department Changed">
                  Department Changed
                </option>
                <option value="Designation Changed">
                  Designation Changed
                </option>
                <option value="Salary Updated">
                  Salary Updated
                </option>
                <option value="Status Changed">
                  Status Changed
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Date
              </label>

              <input
                type="date"
                name="date"
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Description
              </label>

              <textarea
                name="description"
                rows={4}
                placeholder="Enter history details..."
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-500 resize-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-3">

              <button
                type="button"
                className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Update History
              </button>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}