"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import employees from "@/app/data/employee-management";

import {
  FaArrowLeft,
  FaUser,
  FaUsers,
  FaPhone,
  FaSave,
  FaTimes,
  FaIdBadge,
} from "react-icons/fa";


export default function page() {

  const { id } = useParams();


  const employee = employees.find((emp) => String(emp.id) === String(id)
  );


  if (!employee) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center">

          <h1 className="text-xl font-bold text-slate-800">
            Employee Not Found
          </h1>

          <p className="text-sm text-slate-500 mt-2">
            No employee found for ID: {id}
          </p>

          <Link
            href="/admin/employeemanagement/emergency-contacts"
            className="inline-flex items-center gap-2 mt-5 bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm"
          >
            <FaArrowLeft />
            Back to Contacts
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-4xl mx-auto">

        <div className="mb-6">

          <Link
            href="/admin/employeemanagement/emergency-contacts"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition mb-4"
          >
            <FaArrowLeft />
            Back to Emergency Contacts
          </Link>


          <h1 className="text-2xl font-bold text-slate-800">
            Edit Emergency Contact
          </h1>


          <p className="text-sm text-slate-500 mt-1">
            Update emergency contact information for this employee
          </p>

        </div>


        {/* ================================================= */}
        {/* MAIN FORM CARD */}
        {/* ================================================= */}

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">


          {/* ================= CARD HEADER ================= */}

          <div className="px-6 py-5 border-b border-slate-200">

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">

                <FaUsers className="text-lg" />

              </div>


              <div>

                <h2 className="text-lg font-semibold text-slate-800">
                  Emergency Contact Information
                </h2>

                <p className="text-xs text-slate-500 mt-0.5">
                  Update the contact details below
                </p>

              </div>

            </div>

          </div>


          {/* ================= EMPLOYEE INFO ================= */}

          <div className="px-6 py-5 bg-slate-50 border-b border-slate-200">

            <div className="flex items-center gap-4">


              {/* Profile */}

              <img
                src={employee.profileImage}
                alt={employee.fullName}
                className="w-14 h-14 rounded-xl object-cover border border-slate-200"
              />


              <div className="flex-1">

                <div className="flex flex-wrap items-center gap-2">

                  <h3 className="font-semibold text-slate-800">
                    {employee.fullName}
                  </h3>


                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-semibold">

                    <FaIdBadge />

                    {employee.employeeId}

                  </span>

                </div>


                <p className="text-xs text-slate-500 mt-1">
                  {employee.designation} • {employee.department}
                </p>

              </div>

            </div>

          </div>


          {/* ================= FORM ================= */}

          <form>

            <div className="p-6">


              {/* ================= SECTION TITLE ================= */}

              <div className="mb-5">

                <h3 className="text-base font-semibold text-slate-800">
                  Contact Details
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  Enter the person who should be contacted during an emergency.
                </p>

              </div>


              {/* ================= FORM GRID ================= */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


                {/* Contact Person */}

                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Contact Person Name
                  </label>

                  <div className="relative">

                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter contact person name"
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                      required
                    />

                  </div>

                </div>


                {/* Relationship */}

                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Relationship
                  </label>

                  <div className="relative">

                    <FaUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none" />

                    <select
                      name="relation"
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm bg-white outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                      required
                    >

                      <option value="">
                        Select relationship
                      </option>

                      <option value="Father">
                        Father
                      </option>

                      <option value="Mother">
                        Mother
                      </option>

                      <option value="Spouse">
                        Spouse
                      </option>

                      <option value="Brother">
                        Brother
                      </option>

                      <option value="Sister">
                        Sister
                      </option>

                      <option value="Son">
                        Son
                      </option>

                      <option value="Daughter">
                        Daughter
                      </option>

                      <option value="Other">
                        Other
                      </option>

                    </select>

                  </div>

                </div>


                {/* Phone */}

                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>

                  <div className="relative">

                    <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number"
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                      required
                    />

                  </div>

                </div>


                {/* Alternate Phone */}

                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Alternate Phone
                  </label>

                  <div className="relative">

                    <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />

                    <input
                      type="tel"
                      name="alternatePhone"
                      placeholder="Enter alternate phone"
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                    />

                  </div>

                  <p className="text-xs text-slate-400 mt-1.5">
                    Optional
                  </p>

                </div>

              </div>

            </div>


            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">


              {/* Cancel */}

              <Link
                href="/admin/employeemanagement/emergency-contacts"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-600 hover:bg-slate-100 text-sm font-medium transition"
              >
                <FaTimes />
                Cancel
              </Link>

              {/* Update */}

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition"
              >
                <FaSave />
                Update Contact
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}