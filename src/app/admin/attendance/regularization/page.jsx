
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import attendanceData from '@/app/data/attendece'
import React from 'react'

export default function page() {

  let RegularizationData = attendanceData.filter(
    (item) => item.module === "regularization")

  let columns = [
    {
      key: "employeeId",
      label: "employee Id"
    },
    {
      key: "employeeName",
      label: "employee Name"
    },
    {
      key: "department",
      label: "department"
    },
    {
      key: "issueType",
      label: "issue Type"
    },
    {
      key: "requestedCheckIn",
      label: "requested Check In"
    },
    {
      key: "status",
      label: "status"
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
      <OrganizationTable data={RegularizationData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/attendance/regularization"
      />
    </div>
  )
}
