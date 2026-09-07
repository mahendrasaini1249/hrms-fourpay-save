"use client";

import organizationData from "@/app/data/organizationdata";
import {
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaIdCard,
  FaFileInvoice,
} from "react-icons/fa";

export default function CompanyCard() {

  let CompanyData = organizationData.find((item) => item.module === "company")

  return (
    <div className="w-full max-w-5xl mx-auto">

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

        {/* HEADER */}
        <div className="bg-slate-50 border-b px-6 py-6 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <FaBuilding size={28} />
            </div>

            <div>
              <h1 className="text-xl font-semibold text-slate-800">
                {CompanyData.companyName}
              </h1>

              <p className="text-sm text-slate-500 mt-1">
                {CompanyData.industry}
              </p>
            </div>

          </div>

          {/* STATUS */}
          <div className="p-4 rounded-xl bg-slate-50">
            <p className="text-sm text-slate-500">
              Status
            </p>

            <p className="mt-2 font-medium text-green-500">
              {CompanyData.status}
            </p>
          </div>
        </div>


        {/* COMPANY INFORMATION */}
        <div className="p-6">

          <h2 className="text-lg font-semibold text-slate-800 mb-5">
            Company Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {/* LEGAL NAME */}
            <div className="p-4 rounded-xl bg-slate-50 border">
              <p className="text-sm text-slate-500">
                Legal Name
              </p>

              <p className="mt-2 font-medium text-slate-800">
                {CompanyData.legalName}
              </p>
            </div>


            {/* INDUSTRY */}
            <div className="p-4 rounded-xl bg-slate-50 border">
              <p className="text-sm text-slate-500">
                Industry
              </p>

              <p className="mt-2 font-medium text-slate-800">
                {CompanyData.industry}
              </p>
            </div>


            {/* COMPANY SIZE */}
            <div className="p-4 rounded-xl bg-slate-50 border">
              <p className="text-sm text-slate-500">
                Company Size
              </p>

              <p className="mt-2 font-medium text-slate-800">
                {CompanyData.companySize}
              </p>
            </div>


            {/* FOUNDED YEAR */}
            <div className="p-4 rounded-xl bg-slate-50 border">
              <p className="text-sm text-slate-500 flex items-center gap-2">
                <FaCalendarAlt className="text-blue-500" />
                Founded Year
              </p>

              <p className="mt-2 font-medium text-slate-800">
                {CompanyData.foundedYear}
              </p>
            </div>


            {/* REGISTRATION NUMBER */}
            <div className="p-4 rounded-xl bg-slate-50 border">
              <p className="text-sm text-slate-500 flex items-center gap-2">
                <FaIdCard className="text-blue-500" />
                Registration Number
              </p>

              <p className="mt-2 font-medium text-slate-800 break-all">
                {CompanyData.registrationNumber}
              </p>
            </div>


            {/* TAX ID */}
            <div className="p-4 rounded-xl bg-slate-50 border">
              <p className="text-sm text-slate-500 flex items-center gap-2">
                <FaFileInvoice className="text-blue-500" />
                Tax ID
              </p>

              <p className="mt-2 font-medium text-slate-800">
                {CompanyData.taxId}
              </p>
            </div>

          </div>


          {/* CONTACT INFORMATION */}
          <div className="border-t mt-8 pt-6">

            <h2 className="text-lg font-semibold text-slate-800 mb-5">
              Contact Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

              {/* EMAIL */}
              <div className="p-4 rounded-xl bg-slate-50 border">
                <p className="text-sm text-slate-500 flex items-center gap-2">
                  <FaEnvelope className="text-blue-500" />
                  Email
                </p>

                <p className="mt-2 font-medium text-slate-800 break-all">
                  {CompanyData.email}
                </p>
              </div>


              {/* PHONE */}
              <div className="p-4 rounded-xl bg-slate-50 border">
                <p className="text-sm text-slate-500 flex items-center gap-2">
                  <FaPhone className="text-blue-500" />
                  Phone
                </p>

                <p className="mt-2 font-medium text-slate-800">
                  {CompanyData.phone}
                </p>
              </div>


              {/* WEBSITE */}
              <div className="p-4 rounded-xl bg-slate-50 border">
                <p className="text-sm text-slate-500 flex items-center gap-2">
                  <FaGlobe className="text-blue-500" />
                  Website
                </p>

                <p className="mt-2 font-medium text-slate-800">
                  {CompanyData.website}
                </p>
              </div>

            </div>

          </div>


          {/* ADDRESS */}
          <div className="border-t mt-8 pt-6">

            <h2 className="text-lg font-semibold text-slate-800 mb-5">
              Address
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

              {/* ADDRESS */}
              <div className="p-4 rounded-xl bg-slate-50 border lg:col-span-2">
                <p className="text-sm text-slate-500 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-500" />
                  Address
                </p>

                <p className="mt-2 font-medium text-slate-800">
                  {CompanyData.address}
                </p>
              </div>


              {/* CITY */}
              <div className="p-4 rounded-xl bg-slate-50 border">
                <p className="text-sm text-slate-500">
                  City
                </p>

                <p className="mt-2 font-medium text-slate-800">
                  {CompanyData.city}
                </p>
              </div>


              {/* STATE */}
              <div className="p-4 rounded-xl bg-slate-50 border">
                <p className="text-sm text-slate-500">
                  State
                </p>

                <p className="mt-2 font-medium text-slate-800">
                  {CompanyData.state}
                </p>
              </div>


              {/* COUNTRY */}
              <div className="p-4 rounded-xl bg-slate-50 border">
                <p className="text-sm text-slate-500">
                  Country
                </p>

                <p className="mt-2 font-medium text-slate-800">
                  {CompanyData.country}
                </p>
              </div>


              {/* POSTAL CODE */}
              <div className="p-4 rounded-xl bg-slate-50 border">
                <p className="text-sm text-slate-500">
                  Postal Code
                </p>

                <p className="mt-2 font-medium text-slate-800">
                  {CompanyData.postalCode}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}