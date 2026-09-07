import React from "react";
import { FaUmbrellaBeach } from "react-icons/fa";

const TotalLeaveBalanceCard = ({ employees }) => {
    const totalLeaveBalance = employees.reduce(
        (total, employee) =>
            total + (employee.leaveBalance?.totalLeave || 0),
        0
    );

    return (
        <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-500">
                        Total Leave Balance
                    </p>

                    <h2 className="text-3xl font-bold text-gray-800 mt-2">
                        {totalLeaveBalance}
                    </h2>

                    <p className="text-sm text-orange-500 mt-2">
                        Remaining leaves
                    </p>
                </div>

                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <FaUmbrellaBeach className="text-orange-600 text-xl" />
                </div>
            </div>
        </div>
    );
};

export default TotalLeaveBalanceCard;