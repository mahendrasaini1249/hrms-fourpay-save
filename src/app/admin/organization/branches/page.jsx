"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import organizationData from '@/app/data/organizationdata'
import React from 'react'


export default function page() {

  let BranchData = organizationData.filter((item) => item.module === "branch");

  const columns = [
    {
      key: "branchName",
      label: "Branch Name",
    },
    {
      key: "manager",
      label: "Manager",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "phone",
      label: "Phone",
    },
    {
      key: "city",
      label: "City",
    },
    {
      key: "employees",
      label: "Employees",
    },
  ];

  // VIEW
  const View = (row) => {
    console.log("View Branch:", row);
  };

  const Edit = (row) => {
    console.log("Edit Branch", row)
  }

  const Delete = (row) => {
    console.log("Delete Branch", row)
  }


  return (
    <div>
      <OrganizationTable
        columns={columns}
        data={BranchData}
        View={View}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/organization/branches"
      />
    </div>
  )
}
