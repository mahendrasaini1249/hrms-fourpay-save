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

import { useParams } from "next/navigation";
import organizationData from "@/app/data/organizationdata";

export default function page() {

  const { id } = useParams();

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

          </div>

        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="mx-auto max-w-4xl">

        {/* ================= PAGE HEADER ================= */}

        <div className="mb-6">

          <h1 className="text-2xl font-semibold text-slate-800">
            Reporting Manager Details
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            View complete reporting manager information
          </p>

        </div>


        {/* ================= MAIN CARD ================= */}

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">


          {/* ================= CARD HEADER ================= */}

          <div className="flex items-center gap-4 border-b border-slate-200 bg-slate-50 px-6 py-5">

            {/* Profile Icon */}

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <FaUserTie size={25} />
            </div>


            {/* Manager Name */}

            <div>

              <h2 className="text-xl font-semibold text-slate-800">
                {ReportingManagerData.reportingManager}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {ReportingManagerData.designation}
              </p>

            </div>


            {/* Status */}

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


          {/* ================= MANAGER INFORMATION ================= */}

          <div className="p-6">

            <h3 className="mb-5 text-base font-semibold text-slate-800">
              Manager Information
            </h3>


            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">


              {/* Employee ID */}

              <div className="rounded-xl border border-slate-200 p-4">

                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
                  <FaUser className="text-blue-500" />
                  Employee ID
                </div>

                <p className="font-medium text-slate-800">
                  {ReportingManagerData.employeeId}
                </p>

              </div>

              {/* Department */}

              <div className="rounded-xl border border-slate-200 p-4">

                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
                  <FaBuilding className="text-blue-500" />
                  Department
                </div>

                <p className="font-medium text-slate-800">
                  {ReportingManagerData.department}
                </p>

              </div>
              {/* managerDesignation */}
              <div className="rounded-xl border border-slate-200 p-4">

                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
                  <FaBuilding className="text-blue-500" />
                  Department
                </div>

                <p className="font-medium text-slate-800">
                  {ReportingManagerData.managerDesignation}
                </p>

              </div>


              {/* Status */}

              <div className="rounded-xl border border-slate-200 p-4">

                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
                  <FaCheckCircle className="text-green-500" />
                  Status
                </div>

                <p
                  className={`font-medium ${ReportingManagerData.status === "Active"
                    ? "text-green-600"
                    : "text-red-600"
                    }`}
                >
                  {ReportingManagerData.status}
                </p>

              </div>

            </div>

          </div>


          {/* ================= FOOTER ================= */}

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