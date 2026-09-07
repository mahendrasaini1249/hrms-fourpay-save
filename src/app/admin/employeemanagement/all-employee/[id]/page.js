import employees from "@/app/data/employee-management";
import Link from "next/link";
import {
    FaArrowLeft,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaBuilding,
    FaBriefcase,
    FaCalendarAlt,
    FaUserTie,
    FaMapMarkerAlt,
    FaIdBadge,
} from "react-icons/fa";

export default async function EmployeeDetails({ params }) {

    const { id } = await params;

    const employee = employees.find(
        (emp) => String(emp.id) === String(id)
    );

    if (!employee) {
        return (
            <div className="p-6">
                <div className="bg-white rounded-xl shadow p-8 text-center">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Employee Not Found
                    </h1>

                    <p className="text-gray-500 mt-2">
                        The employee you are looking for does not exist.
                    </p>

                    <Link
                        href="/admin/employeemanagement/all-employee"
                        className="inline-block mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Back to Employees
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 md:p-6">

            {/* Back Button */}
            <Link
                href="/admin/employeemanagement/all-employee"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-5"
            >
                <FaArrowLeft />
                Back to Employees
            </Link>

            {/* Page Heading */}
            <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Employee Profile
                </h1>

                <p className="text-gray-500 mt-1">
                    View complete information about this employee.
                </p>
            </div>

            {/* Profile Header */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">

                <div className="flex flex-col md:flex-row md:items-center gap-5">

                    {/* Profile Image */}
                    <div>
                        <img
                            src={employee.profileImage}
                            alt={employee.fullName}
                            className="w-28 h-28 rounded-full object-cover border-4 border-blue-50"
                        />
                    </div>

                    {/* Employee Basic Info */}
                    <div className="flex-1">

                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">

                            <h2 className="text-2xl font-bold text-gray-800">
                                {employee.fullName}
                            </h2>

                            <span
                                className={`w-fit px-3 py-1 rounded-full text-xs font-medium ${employee.employmentStatus === "Active"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                                    }`}
                            >
                                {employee.employmentStatus}
                            </span>

                        </div>

                        <p className="text-gray-500 mt-1">
                            {employee.designation}
                        </p>

                        <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">

                            <span className="flex items-center gap-2">
                                <FaIdBadge className="text-blue-500" />
                                {employee.id}
                            </span>

                            <span className="flex items-center gap-2">
                                <FaBuilding className="text-blue-500" />
                                {employee.department}
                            </span>

                            <span className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-blue-500" />
                                {employee.location}
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Personal Information */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100">

                    <div className="p-5 border-b border-gray-100">
                        <div className="flex items-center gap-3">

                            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                <FaUser className="text-blue-600" />
                            </div>

                            <div>
                                <h2 className="font-semibold text-gray-800">
                                    Personal Information
                                </h2>

                                <p className="text-xs text-gray-500">
                                    Employee contact details
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="p-5 space-y-4">

                        <DetailRow
                            icon={<FaUser />}
                            label="Full Name"
                            value={employee.fullName}
                        />

                        <DetailRow
                            icon={<FaEnvelope />}
                            label="Email"
                            value={employee.email}
                        />

                        <DetailRow
                            icon={<FaPhone />}
                            label="Phone"
                            value={employee.phone}
                        />

                        <DetailRow
                            icon={<FaMapMarkerAlt />}
                            label="Location"
                            value={employee.location}
                        />

                    </div>

                </div>

                {/* Employment Information */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100">

                    <div className="p-5 border-b border-gray-100">
                        <div className="flex items-center gap-3">

                            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                                <FaBriefcase className="text-purple-600" />
                            </div>

                            <div>
                                <h2 className="font-semibold text-gray-800">
                                    Employment Information
                                </h2>

                                <p className="text-xs text-gray-500">
                                    Job and employment details
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="p-5 space-y-4">

                        <DetailRow
                            icon={<FaIdBadge />}
                            label="Employee ID"
                            value={employee.id}
                        />

                        <DetailRow
                            icon={<FaBuilding />}
                            label="Department"
                            value={employee.department}
                        />

                        <DetailRow
                            icon={<FaBriefcase />}
                            label="Designation"
                            value={employee.designation}
                        />

                        <DetailRow
                            icon={<FaBriefcase />}
                            label="Employment Type"
                            value={employee.employmentType}
                        />

                        <DetailRow
                            icon={<FaCalendarAlt />}
                            label="Joining Date"
                            value={employee.joiningDate}
                        />

                        <DetailRow
                            icon={<FaUserTie />}
                            label="Manager"
                            value={employee.manager}
                        />

                    </div>

                </div>

            </div>

        </div>
    );
}

/* Reusable Detail Row */

function DetailRow({ icon, label, value }) {

    return (
        <div className="flex items-center justify-between gap-4 py-2">

            <div className="flex items-center gap-3 min-w-0">

                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 shrink-0">
                    {icon}
                </div>

                <span className="text-sm text-gray-500">
                    {label}
                </span>

            </div>

            <span className="text-sm font-medium text-gray-800 text-right break-words">
                {value || "N/A"}
            </span>

        </div>
    );
}