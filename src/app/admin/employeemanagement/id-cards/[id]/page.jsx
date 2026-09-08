"use client";

import IdCard from "@/app/components/employee/IdCard";
import employees from "@/app/data/employee-management";
import { useParams } from "next/navigation";
import React from "react";

export default function Page() {

  const { id } = useParams();

  const IdData = employees.find(
    (item) =>
      item.id === Number(id) &&
      item.module === "employee-id-cards"
  );

  if (!IdData) {
    return (
      <div className="p-6">
        ID Card not found
      </div>
    );
  }

  return (
    <div>
      <IdCard data={IdData} />
    </div>
  );
}