"use client";

import EditForm from "@/app/components/form/EditForm";
import employees from "@/app/data/employee-management";
import { useParams } from "next/navigation";
import React from "react";

export default function Page() {

    const { id } = useParams();

    let employeeData = employees.find((item) =>
        item.id === Number(id) && item.module === "employee-directory");


    return (
        <div>
            <EditForm
                title="Edit Employee"
                data={employeeData}
            />
        </div>
    );
}