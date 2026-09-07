import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function Page() {
  return (
    <>
      <section className="max-w-[1100px] mx-auto bg-white shadow-lg border border-slate-100 rounded-xl">

        <div className="py-5 px-5 md:px-6">
          <Link
            href="/admin/employeemanagement/all-employee"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-5"
          >
            <FaArrowLeft />
            Back to Employees
          </Link>

          {/* Header */}
          <div className="border-b border-slate-100 pb-5">
            <h1 className="text-xl font-semibold text-slate-800">
              Add Employee
            </h1>

            <p className="text-sm text-slate-500 mt-1">
              Create a new employee profile
            </p>
          </div>


          {/* Main Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* ================= LEFT : PERSONAL INFORMATION ================= */}
            <div className="border border-slate-200 rounded-xl p-5">

              {/* Section Header */}
              <div className="mb-5">
                <h2 className="font-semibold text-slate-800">
                  Personal Information
                </h2>

                <p className="text-xs text-slate-500 mt-1">
                  Enter employee personal details
                </p>
              </div>


              {/* Profile Image */}
              <div className="mb-5">

                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Profile Image
                </label>

                <div className="flex items-center gap-4">

                  <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                    <span className="text-slate-400 text-2xl">
                      👤
                    </span>
                  </div>


                </div>

              </div>


              {/* First Name */}
              <div className="mb-4">

                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Upload Img
                  <span className="text-red-500 ml-1">*</span>
                </label>

                <input
                  type="file"
                  placeholder="Enter full name"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>

              <div className="mb-4">

                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                  <span className="text-red-500 ml-1">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* Email */}
              <div className="mb-4">

                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                  <span className="text-red-500 ml-1">*</span>
                </label>

                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* Phone */}
              <div className="mb-4">

                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Mobile Number
                  <span className="text-red-500 ml-1">*</span>
                </label>

                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* Date of Birth + Gender */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Date of Birth
                  </label>

                  <input
                    type="date"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />

                </div>


                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Gender
                  </label>

                  <select
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white"
                  >
                    <option value="">
                      Select Gender
                    </option>

                    <option value="Male">
                      Male
                    </option>

                    <option value="Female">
                      Female
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>

              </div>

            </div>



            {/* ================= RIGHT : EMPLOYMENT INFORMATION ================= */}
            <div className="border border-slate-200 rounded-xl p-5">

              {/* Section Header */}
              <div className="mb-5">
                <h2 className="font-semibold text-slate-800">
                  Employment Information
                </h2>

                <p className="text-xs text-slate-500 mt-1">
                  Enter employee job details
                </p>
              </div>


              {/* Employee ID */}
              <div className="mb-4">

                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Employee ID
                  <span className="text-red-500 ml-1">*</span>
                </label>

                <input
                  type="text"
                  placeholder="e.g. EMP001"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* Department */}
              <div className="mb-4">

                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Department
                  <span className="text-red-500 ml-1">*</span>
                </label>

                <select
                  className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white"
                >
                  <option value="">
                    Select Department
                  </option>

                  <option value="IT">
                    IT
                  </option>

                  <option value="HR">
                    HR
                  </option>

                  <option value="Finance">
                    Finance
                  </option>

                  <option value="Marketing">
                    Marketing
                  </option>

                  <option value="Sales">
                    Sales
                  </option>

                </select>

              </div>


              {/* Designation */}
              <div className="mb-4">

                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Designation
                  <span className="text-red-500 ml-1">*</span>
                </label>

                <input
                  type="text"
                  placeholder="e.g. Frontend Developer"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* Employment Type + Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Employment Type
                  </label>

                  <select
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white"
                  >
                    <option value="">
                      Select Type
                    </option>

                    <option value="Full Time">
                      Full Time
                    </option>

                    <option value="Part Time">
                      Part Time
                    </option>

                    <option value="Intern">
                      Intern
                    </option>

                    <option value="Contract">
                      Contract
                    </option>

                  </select>

                </div>


                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Status
                  </label>

                  <select
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white"
                  >
                    <option value="Active">
                      Active
                    </option>

                    <option value="Inactive">
                      Inactive
                    </option>

                    <option value="On Leave">
                      On Leave
                    </option>

                  </select>

                </div>

              </div>


              {/* Joining Date */}
              <div className="mb-4">

                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Joining Date
                  <span className="text-red-500 ml-1">*</span>
                </label>

                <input
                  type="date"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* Manager + Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Reporting Manager
                  </label>

                  <input
                    type="text"
                    placeholder="Manager name"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />

                </div>


                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Location
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. Jaipur"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* Footer Buttons */}
        <div className="flex justify-end gap-3 border-t border-slate-100 my-5 mx-5">

          <button
            type="button"
            className="px-5 py-2.5 rounded-lg border border-slate-300 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            type="button"
            className="px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
          >
            Add Employee
          </button>

        </div>

      </section>
    </>
  );
}