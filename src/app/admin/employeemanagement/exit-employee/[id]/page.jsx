"use client";

import View from "@/app/components/view/View";
import employees from "@/app/data/employee-management";
import { useParams } from "next/navigation";
import React from "react";

export default function Page() {

    const { id } = useParams();

    const Exit = employees.find(
        (item) =>
            item.id === Number(id) &&
            item.module === "exit-employees"
    );

    if (!Exit) {
        return (
            <div className="p-6">
                ID Card not found
            </div>
        );
    }

    return (
        <div>
            <View title="Details"
                data={Exit} />
        </div>
    );
}