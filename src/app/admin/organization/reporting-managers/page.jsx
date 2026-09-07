"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import React from 'react'
import organizationData from '@/app/data/organizationdata'
export default function page() {

  let ReportingMangerData = organizationData.filter((item) => item.module === "reporting-manager")

  let columns = [
    {
      key: "employeeId",
      label: "Employee Id"
    },
    {
      key: "employeeName",
      label: "Employee Name"
    },
    {
      key: "designation",
      label: "Designation"
    },
    {
      key: "reportingManager",
      label: "reporting Manager"
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
        data={ReportingMangerData}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/organization/reporting-managers"
      />
    </div>
  )
}
