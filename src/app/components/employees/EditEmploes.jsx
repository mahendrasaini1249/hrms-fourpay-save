import Link from "next/link";
import {
    FaArrowLeft,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaIdBadge,
    FaBriefcase,
    FaCalendarAlt,
    FaVenusMars,
} from "react-icons/fa";

export default function EditEmployee() {
    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-6">

            {/* Back Button */}
            <Link
                href="/admin/employeemanagement/all-employee"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-5"
            >
                <FaArrowLeft size={14} />
                Back to Employees
            </Link>

            {/* Page Header */}
            <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Edit Employee
                </h1>

                <p className="text-gray-500 mt-1">
                    Update employee information and employment details.
                </p>
            </div>

            {/* Main Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">

                <form>

                    {/* Profile Section */}
                    <div className="p-6 border-b border-gray-100">

                        <div className="flex items-center gap-3 mb-6">

                            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                <FaUser className="text-blue-600" />
                            </div>

                            <div>
                                <h2 className="font-semibold text-gray-800">
                                    Profile Information
                                </h2>

                                <p className="text-xs text-gray-500">
                                    Update employee profile information
                                </p>
                            </div>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/* Profile Image */}
                            <div className="md:col-span-2">

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Profile Image
                                </label>

                                <input
                                    type="file"
                                    accept="image/*"
                                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500"
                                />

                            </div>

                            {/* Full Name */}
                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>

                                <div className="relative">

                                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        type="text"
                                        placeholder="Enter full name"
                                        className="w-full border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                    />

                                </div>

                            </div>

                            {/* Email */}
                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>

                                <div className="relative">

                                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        type="email"
                                        placeholder="Enter email address"
                                        className="w-full border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                    />

                                </div>

                            </div>

                            {/* Phone */}
                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>

                                <div className="relative">

                                    <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        type="tel"
                                        placeholder="Enter phone number"
                                        className="w-full border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                    />

                                </div>

                            </div>

                            {/* Gender */}
                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Gender
                                </label>

                                <div className="relative">

                                    <FaVenusMars className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <select
                                        className="w-full border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Employment Information */}
                    <div className="p-6 border-b border-gray-100">

                        <div className="flex items-center gap-3 mb-6">

                            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                                <FaBriefcase className="text-purple-600" />
                            </div>

                            <div>
                                <h2 className="font-semibold text-gray-800">
                                    Employment Information
                                </h2>

                                <p className="text-xs text-gray-500">
                                    Update job and employment details
                                </p>
                            </div>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/* Employee ID */}
                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Employee ID
                                </label>

                                <div className="relative">

                                    <FaIdBadge className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        type="text"
                                        placeholder="Enter employee ID"
                                        className="w-full border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                    />

                                </div>

                            </div>
                            {/* Designation */}
                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Designation
                                </label>

                                <div className="relative">

                                    <FaBriefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        type="text"
                                        placeholder="Enter designation"
                                        className="w-full border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                    />

                                </div>
                            </div>

                            {/* Joining Date */}
                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Joining Date
                                </label>

                                <div className="relative">

                                    <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        type="date"
                                        className="w-full border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                    />

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Form Actions */}
                    <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 p-6">

                        <Link
                            href="/admin/employeemanagement/all-employee"
                            className="px-5 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 text-center"
                        >
                            Cancel
                        </Link>

                        <button
                            type="submit"
                            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                        >
                            Update Employee
                        </button>

                    </div>

                </form>

            </div>
        </div>
    );
}