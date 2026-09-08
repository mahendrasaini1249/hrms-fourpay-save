"use client";

import React from "react";

export default function IdCard({ data }) {

    if (!data) {
        return <div>ID Card not found</div>;
    }

    return (
        <div className="bg-gray-100 flex justify-center items-center p-8">

            <div className="w-[380px] bg-white rounded-2xl shadow-xl overflow-hidden border">

                {/* Header */}
                <div className="bg-blue-600 text-white text-center p-5">

                    <h1 className="text-2xl font-bold">
                        Fourpay Save Solution
                    </h1>

                    <p className="text-sm mt-1">
                        EMPLOYEE ID CARD
                    </p>

                </div>


                {/* Profile */}
                <div className="flex flex-col items-center p-4">

                    <img
                        src={data.profileImage}
                        alt={data.employeeName}
                        className="w-25 h-25 rounded-full object-cover border-4 border-blue-500"
                    />

                    <h2 className="text-xl font-bold mt-2">
                        {data.employeeName}
                    </h2>

                    <p className="text-gray-500">
                        {data.designation}
                    </p>

                </div>


                {/* Employee Details */}
                <div className="px-6 pb-6 space-y-3">

                    <div className="flex justify-between border-b pb-1">
                        <span className="text-gray-500">
                            Employee ID
                        </span>

                        <span className="font-semibold">
                            {data.employeeId}
                        </span>
                    </div>


                    <div className="flex justify-between border-b pb-1">
                        <span className="text-gray-500">
                            Department
                        </span>

                        <span className="font-semibold">
                            {data.department}
                        </span>
                    </div>


                    <div className="flex justify-between border-b pb-1">
                        <span className="text-gray-500">
                            Card Number
                        </span>

                        <span className="font-semibold">
                            {data.cardNumber}
                        </span>
                    </div>


                    <div className="flex justify-between border-b pb-1">
                        <span className="text-gray-500">
                            Issue Date
                        </span>

                        <span>
                            {data.issueDate}
                        </span>
                    </div>


                    <div className="flex justify-between">
                        <span className="text-gray-500">
                            Expiry Date
                        </span>

                        <span>
                            {data.expiryDate}
                        </span>
                    </div>

                </div>


                {/* Status */}
                {/* <div className="border-t bg-gray-50 text-center py-4">

                    <span className="font-semibold text-green-600">
                        {data.status}
                    </span>

                </div> */}

            </div>

        </div>
    );
}