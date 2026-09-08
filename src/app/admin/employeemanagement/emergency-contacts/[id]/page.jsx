"use client";

import View from "@/app/components/view/View";
import employees from "@/app/data/employee-management";
import { useParams } from "next/navigation";
import React from "react";

export default function Page() {

  const { id } = useParams();

  const Contact = employees.find(
    (item) =>
      item.id === Number(id) &&
      item.module === "emergency-contacts"
  );

  if (!Contact) {
    return (
      <div className="p-6">
        ID Card not found
      </div>
    );
  }

  return (
    <div>
      <View title="Details"
        data={Contact} />
    </div>
  );
}