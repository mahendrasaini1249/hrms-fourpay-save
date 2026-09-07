"use client";

import {
  FaBuilding,
  FaMapMarkerAlt,
  FaCode,
  FaCity,
  FaMap,
  FaCheckCircle,
  FaArrowLeft,
  FaRegAddressCard,
} from "react-icons/fa";

import { useParams } from "next/navigation";
import organizationData from "@/app/data/organizationdata";

export default function LocationViewPage() {

  const { id } = useParams();

  // ID + module ke basis par location find
  const locationData = organizationData.find(
    (item) =>
      item.module === "location" &&
      item.id === Number(id)
  );

  // Location nahi mili
  if (!locationData) {
    return (
      <div className="min-h-screen bg-slate-100 p-6">
        <div className="mx-auto max-w-4xl">

          <div className="rounded-2xl border border-red-200 bg-white p-10 text-center shadow-sm">

            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-500">
              <FaMapMarkerAlt size={24} />
            </div>

            <h2 className="text-xl font-semibold text-slate-800">
              Location Not Found
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              The requested Location does not exist.
            </p>

          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="mx-auto max-w-4xl">

        {/* ================= HEADER ================= */}

        <div className="mb-6">

          <h1 className="text-2xl font-semibold text-slate-800">
            Location Details
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            View complete location information
          </p>

        </div>


        {/* ================= MAIN CARD ================= */}

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">


          {/* ================= CARD HEADER ================= */}

          <div className="flex items-center gap-4 border-b border-slate-200 bg-slate-50 px-6 py-5">

            {/* Location Icon */}

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <FaBuilding size={24} />
            </div>


            {/* Location Name */}

            <div>

              <h2 className="text-xl font-semibold text-slate-800">
                {locationData.locationName}
              </h2>

              <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                <FaMapMarkerAlt size={12} />
                {locationData.city}, {locationData.state}
              </p>

            </div>


            {/* Status */}

            <div className="ml-auto">

              <span
                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold ${locationData.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
                  }`}
              >

                <FaCheckCircle size={12} />

                {locationData.status}

              </span>

            </div>

          </div>


          {/* ================= LOCATION INFORMATION ================= */}

          <div className="p-6">

            <h3 className="mb-5 text-base font-semibold text-slate-800">
              Location Information
            </h3>


            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">


              {/* Location Code */}

              <div className="rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-slate-50">

                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">

                  <FaCode className="text-blue-500" />

                  Location Code

                </div>

                <p className="font-medium text-slate-800">
                  {locationData.locationCode}
                </p>

              </div>


              {/* Location Name */}

              <div className="rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-slate-50">

                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">

                  <FaBuilding className="text-blue-500" />

                  Location Name

                </div>

                <p className="font-medium text-slate-800">
                  {locationData.locationName}
                </p>

              </div>


              {/* Branch */}

              <div className="rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-slate-50">

                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">

                  <FaRegAddressCard className="text-blue-500" />

                  Branch

                </div>

                <p className="font-medium text-slate-800">
                  {locationData.branch}
                </p>

              </div>


              {/* Address */}

              <div className="rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-slate-50">

                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">

                  <FaMapMarkerAlt className="text-blue-500" />

                  Address

                </div>

                <p className="font-medium text-slate-800">
                  {locationData.address}
                </p>

              </div>


              {/* City */}

              <div className="rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-slate-50">

                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">

                  <FaCity className="text-blue-500" />

                  City

                </div>

                <p className="font-medium text-slate-800">
                  {locationData.city}
                </p>

              </div>


              {/* State */}

              <div className="rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-slate-50">

                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">

                  <FaMap className="text-blue-500" />

                  State

                </div>

                <p className="font-medium text-slate-800">
                  {locationData.state}
                </p>

              </div>

                <div className="rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-slate-50">

                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">

                  <FaMap className="text-blue-500" />

                  Total Employees

                </div>

                <p className="font-medium text-slate-800">
                  {locationData.employees}
                </p>

              </div>

              {/* Status */}

              <div className="rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-slate-50">

                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">

                  <FaCheckCircle className="text-green-500" />

                  Status

                </div>

                <p
                  className={`font-medium ${locationData.status === "Active"
                    ? "text-green-600"
                    : "text-red-600"
                    }`}
                >
                  {locationData.status}
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