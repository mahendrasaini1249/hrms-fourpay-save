"use client";

import OrganizationTable from "@/app/components/organization/OrganizationTable";
import employees from "@/app/data/employee-management";
import React from "react";

export default function Page() {

  let employeeData = employees.filter(
    (item) => item.module === "employee-directory"
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
      key: "department",
      label: "Department"
    },
    {
      key: "designation",
      label: "Designation"
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
        data={employeeData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/employeemanagement/employee-directory"
      />
    </div>
  );
}