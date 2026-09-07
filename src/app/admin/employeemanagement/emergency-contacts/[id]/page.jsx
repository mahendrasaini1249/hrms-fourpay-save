"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

import employees from "@/app/data/employee-management";

import {
  FaArrowLeft,
  FaEdit,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaUsers,
} from "react-icons/fa";


export default function page() {

  // URL se current id milegi
  let { id } = useParams()

  const employee = employees.find(
    (emp) => String(emp.id) === String(id)
  );

  if (!employee) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center">

          <h2 className="text-xl font-bold text-slate-800">
            Contact Not Found
          </h2>

          <p className="text-sm text-slate-500 mt-2">
            No emergency contact found for this employee.
          </p>

          <Link
            href="/admin/employeemanagement/emergency-contacts"
            className="inline-flex items-center gap-2 mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            <FaArrowLeft />
            Back to Contacts
          </Link>

        </div>

      </div>
    );
  }


  // Emergency contact
  const contact = employee.emergencyContact;


  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-5xl mx-auto">


        {/* Header */}
        <div className="flex items-center justify-between mb-6">

          <div>

            <Link
              href="/admin/employeemanagement/emergency-contacts"
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-3"
            >
              <FaArrowLeft />
              Back to Emergency Contacts
            </Link>

            <h1 className="text-2xl font-bold text-slate-800">
              Emergency Contact Details
            </h1>

            <p className="text-sm text-slate-500 mt-1">
              Complete emergency contact information
            </p>

          </div>


          <Link
            href={`/admin/employeemanagement/emergency-contacts/${employee.id}/edit`}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg"
          >
            <FaEdit />
            Edit Contact
          </Link>

        </div>


        {/* Employee Card */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 mb-6">

          <div className="flex items-center gap-5">

            <img
              src={employee.profileImage}
              alt={employee.fullName}
              className="w-24 h-24 rounded-2xl object-cover"
            />

            <div>

              <div className="flex items-center gap-3">

                <h2 className="text-xl font-bold text-slate-800">
                  {employee.fullName}
                </h2>

                <h2 className="text-sm text-blue-600 mt-1">
                  {employee.employeeId}
                </h2>

              </div>

              <p className="text-sm text-blue-600 mt-1">
                {employee.designation}
              </p>

              <p className="text-sm text-slate-500 mt-1">
                {employee.department}
              </p>

            </div>

          </div>

        </div>


        {/* Emergency Contact Card */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

          {/* Card Header */}
          <div className="px-6 py-5 border-b border-slate-200">

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <FaUsers />
              </div>

              <div>

                <h2 className="text-lg font-bold text-slate-800">
                  Emergency Contact
                </h2>

                <p className="text-xs text-slate-500">
                  Emergency contact information
                </p>

              </div>

            </div>

          </div>


          {/* Details */}
          <div className="p-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


              <Detail
                icon={<FaUser />}
                label="Contact Person"
                value={contact?.name}
              />


              {/* Relation */}
              <Detail
                icon={<FaUsers />}
                label="Relationship"
                value={contact?.relation}
              />


              {/* Phone */}
              <Detail
                icon={<FaPhone />}
                label="Phone Number"
                value={contact?.phone}
              />


              {/* Alternate Phone */}
              <Detail
                icon={<FaPhone />}
                label="Alternate Phone"
                value={
                  contact?.alternatePhone}
              />

            </div>


            {/* Employee Contact Information */}
            <div className="mt-6 pt-6 border-t border-slate-200">

              <h3 className="font-semibold text-slate-800 mb-4">
                Employee Contact Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <Detail
                  icon={<FaEnvelope />}
                  label="Employee Email"
                  value={employee.email}
                />

                <Detail
                  icon={<FaPhone />}
                  label="Employee Phone"
                  value={employee.phone}
                />

              </div>

            </div>


            {/* Address */}
            <div className="mt-6 pt-6 border-t border-slate-200">

              <div className="flex items-center gap-3 mb-4">

                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <h3 className="font-semibold text-slate-800">
                    Employee Address
                  </h3>

                  <p className="text-xs text-slate-500">
                    Registered employee address
                  </p>

                </div>

              </div>


              <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">

                <p className="text-sm font-medium text-slate-700">

                  {employee.address?.street},{" "}
                  {employee.address?.city},{" "}
                  {employee.address?.state}

                </p>

                <p className="text-sm text-slate-500 mt-1">

                  {employee.address?.country} -{" "}
                  {employee.address?.pincode}

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}


/* Detail Component */

function Detail({ icon, label, value }) {

  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">

      <div className="w-10 h-10 shrink-0 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
        {icon}
      </div>

      <div className="min-w-0">

        <p className="text-xs text-slate-400 mb-1">
          {label}
        </p>

        <p className="text-sm font-semibold text-slate-700 break-words">
          {value || "Not provided"}
        </p>

      </div>

    </div>
  );
}