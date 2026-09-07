"use client"
import React from 'react'
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import organizationData from '@/app/data/organizationdata'


export default function page() {

  let DepartmentData = organizationData.filter((item) => item.module === "department")

  let columns = [
    {
      key: "departmentName",
      label: "Department Name"
    },
    {
      key: "head",
      label: "Head"
    },
    {
      key: "phone",
      label: "Phone"
    },
    {
      key: "branch",
      label: "Branch"
    },
    {
      key: "employees",
      label: "Employees"
    },
  ]

  const view = (row) => {
    console.log(row)
  }

  const Edit = (row) => {
    console.log(row)
  }

  const Delete = (row) => {
    console.log(row)
  }
  return (
    <div>
      <OrganizationTable
        columns={columns}
        data={DepartmentData}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/organization/departments"
      />

    </div>
  )
}
