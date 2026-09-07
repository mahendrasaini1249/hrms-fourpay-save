import React from "react";
import { FaUserCheck } from "react-icons/fa";

const ActiveEmployeesCard = ({ employees }) => {
    const activeEmployees = employees.filter(
        (employee) => employee.employmentStatus === "Active").length;

    return (
        <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-500">
                        Active Employees
                    </p>

                    <h2 className="text-3xl font-bold text-gray-800 mt-2">
                        {activeEmployees}
                    </h2>

                    <p className="text-sm text-green-500 mt-2">
                        Currently working
                    </p>
                </div>

                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <FaUserCheck className="text-green-600 text-xl" />
                </div>
            </div>
        </div>
    );
};

export default ActiveEmployeesCard;