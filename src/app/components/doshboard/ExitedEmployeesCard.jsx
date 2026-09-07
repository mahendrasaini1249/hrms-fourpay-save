import React from "react";
import { FaUserMinus } from "react-icons/fa";

const ExitedEmployeesCard = ({ employees }) => {
  const exitedEmployees = employees.filter(
    (employee) => employee.employmentStatus === "Exited"
  ).length;

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">
            Exited Employees
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            {exitedEmployees}
          </h2>

          <p className="text-sm text-red-500 mt-2">
            Employees exited
          </p>
        </div>

        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
          <FaUserMinus className="text-red-600 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default ExitedEmployeesCard;