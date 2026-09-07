
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import shiftManagementData from '@/app/data/shift'
import React from 'react'

export default function page() {

  let SiftData = shiftManagementData.filter(
    (item) => item.module === "shifts")

  let columns = [
    {
      key: "shiftId",
      label: "shift Id"
    },
    {
      key: "shiftName",
      label: "shift Name"
    },
    {
      key: "startTime",
      label: "start Time"
    },
    {
      key: "endTime",
      label: "end Time"
    },
    {
      key: "duration",
      label: "duration"
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
      <OrganizationTable data={SiftData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/shifts-management/shifts"
      />
    </div>
  )
}
