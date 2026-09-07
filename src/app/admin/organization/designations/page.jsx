"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import React from 'react'
import organizationData from '@/app/data/organizationdata'

export default function page() {

  let DesignationData = organizationData.filter((item) => item.module === "designation")

  let columns = [
    {
      key: "id",
      label: "Employees ID"
    },
    {
      key: "department",
      label: "Department"
    },
    {
      key: "designationCode",
      label: "Designation Code"
    },
    {
      key: "level",
      label: "Level"
    },
    {
      key: "status",
      label: "Status"
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
        data={DesignationData}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/organization/designations"
      />
    </div>
  )
}
