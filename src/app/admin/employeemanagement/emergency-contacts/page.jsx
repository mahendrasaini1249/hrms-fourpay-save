"use client";

import OrganizationTable from "@/app/components/organization/OrganizationTable";
import employees from "@/app/data/employee-management";
import React from "react";

export default function Page() {

  let Contact = employees.filter(
    (item) => item.module === "emergency-contacts"
  );

  let columns = [

    {
      key: "employeeId",
      label: "Employee ID"
    },
    {
      key: "employeeName",
      label: "Employee Name"
    },
    {
      key: "contactName",
      label: "contact Name"
    },
    {
      key: "relation",
      label: "relation"
    },
    {
      key: "phone",
      label: "phone"
    },
    {
      key: "status",
      label: "Status"
    }
  ];

  const view = (row) => {
    console.log(row);
  };

  const Edit = (row) => {
    console.log(row);
  };

  const Delete = (row) => {
    console.log(row);
  };

  return (
    <div>
      <OrganizationTable
        data={Contact}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/employeemanagement/emergency-contacts"
      />
    </div>
  );
}