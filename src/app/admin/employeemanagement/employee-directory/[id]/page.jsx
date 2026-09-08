"use client";

import View from "@/app/components/view/View";
import employees from "@/app/data/employee-management";
import { useParams } from "next/navigation";
import React from "react";

export default function Page() {

    const { id } = useParams();


    let employeeData = employees.find((item) =>
        item.id === Number(id) && item.module === "employee-directory");

    if (!employeeData) {
        return <div>Employee not found</div>;
    }

    return (
        <div>
            <View
                title="Employee Details"
                data={employeeData}
            />
        </div>
    );
}