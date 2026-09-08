"use client";

import OrganizationTable from "@/app/components/organization/OrganizationTable";
import employees from "@/app/data/employee-management";
import React from "react";

export default function Page() {

  let History = employees.filter(
    (item) => item.module === "employee-history"
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
      key: "action",
      label: "action"
    },
    {
      key: "newValue",
      label: "new Value"
    },
    {
      key: "previousValue",
      label: "previous Value"
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
        data={History}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/employeemanagement/employee-history"
      />
    </div>
  );
}