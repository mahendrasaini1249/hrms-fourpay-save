import EmployeeTable from "@/app/components/employees/EmployeeTable";
import employees from "@/app/data/employee-management";
import React from "react";
import {
  FaSearch,
} from "react-icons/fa";

export default function page() {
  return (
    <div className="w-full min-h-screen bg-slate-50 md:p-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Employee Directory
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            Manage and view all employees in your organization
          </p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm mb-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          {/* Search */}
          <div className="relative md:col-span-2">
            <FaSearch
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search employee by name, email or ID..."
              className="w-full h-11 border border-slate-200 rounded-lg pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Department */}
          <select
            className="h-11 border border-slate-200 rounded-lg px-3 text-sm text-slate-600 outline-none focus:border-blue-500"
          >
            <option>All Departments</option>
            <option>IT</option>
            <option>HR</option>
            <option>Finance</option>
            <option>Sales</option>
            <option>Marketing</option>
          </select>

          {/* Status */}
          <select
            className="h-11 border border-slate-200 rounded-lg px-3 text-sm text-slate-600 outline-none focus:border-blue-500"
          >
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>On Leave</option>
          </select>

        </div>
      </div>

      {/* Employee Table */}
      <EmployeeTable employees={employees} showAllDetails={true} />

    </div>
  );
};