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

export default function page() {

  const { id } = useParams();


  // ID ke basis par location find
  const locationData = organizationData.find(
    (item) =>
      item.module === "location" &&
      item.id === Number(id)
  );

  // Agar location nahi mili
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

        <div className="mb-6 flex items-center justify-between">

          <div>

            <h1 className="text-2xl font-semibold text-slate-800">
              Edit Location
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Update location information
            </p>

          </div>


          {/* Add Location */}

          {/* <Link
            href="/admin/organization/locations/addlocation"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <FaPlus size={12} />
            Add Location
          </Link> */}

        </div>


        {/* ================= FORM CARD ================= */}

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">


          {/* Card Header */}

          <div className="flex items-center gap-4 border-b border-slate-200 bg-slate-50 px-6 py-5">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <FaBuilding size={24} />
            </div>

            <div>

              <h2 className="text-xl font-semibold text-slate-800">
                {locationData.locationName}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {locationData.locationCode}
              </p>

            </div>

          </div>


          {/* ================= FORM ================= */}

          <form className="p-6">

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* Location Code */}
              <div>

                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">

                  <FaCode className="text-blue-500" />

                  Location Code

                </label>

                <input
                  type="text"
                  name="locationCode"
                  placeholder="Enter location code"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* Location Name */}

              <div>

                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">

                  <FaBuilding className="text-blue-500" />

                  Location Name

                </label>

                <input
                  type="text"
                  name="locationName"
                  placeholder="Enter location name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* Branch */}

              <div>

                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">

                  <FaRegAddressCard className="text-blue-500" />

                  Branch

                </label>

                <input
                  type="text"
                  name="branch"
                  placeholder="Enter branch"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* Address */}

              <div>

                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">

                  <FaMapMarkerAlt className="text-blue-500" />

                  Address

                </label>

                <input
                  type="text"
                  name="address"
                  placeholder="Enter address"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* City */}

              <div>

                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">

                  <FaCity className="text-blue-500" />

                  City

                </label>

                <input
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>
              {/* State */}

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                  <FaMap className="text-blue-500" />
                  State
                </label>

                <input
                  type="text"
                  name="state"
                  placeholder="Enter state"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>
              {/* Status */}
              <div>

                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">

                  <FaCheckCircle className="text-green-500" />

                  Status

                </label>

                <select
                  name="status"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
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
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Update Location
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}