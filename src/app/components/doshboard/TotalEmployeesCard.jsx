import React from "react";
import { FaUsers } from "react-icons/fa";

const TotalEmployeesCard = ({ employees }) => {
  const totalEmployees = employees.length;

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-gray-500">
            Total Employees
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            {totalEmployees}
          </h2>

          <p className="text-sm text-gray-400 mt-2">
            All employees
          </p>
        </div>

        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <FaUsers className="text-blue-600 text-xl" />
        </div>

      </div>
    </div>
  );
};

export default TotalEmployeesCard;