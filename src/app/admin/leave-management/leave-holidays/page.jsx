"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import leaveManagementData from '@/app/data/leaveData'
import React from 'react'

export default function page() {

  let LeaveHolidays = leaveManagementData.filter(
    (item) => item.module === "leave-holidays")

  let columns = [
    {
      key: "holidayName",
      label: "holiday Name"
    },
    {
      key: "holidayDate",
      label: "holiday Date"
    },
    {
      key: "day",
      label: "day"
    },
    {
      key: "holidayType",
      label: "holiday Type"
    },
    {
      key: "location",
      label: "location"
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
      <OrganizationTable data={LeaveHolidays}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/leave-management/leave-holidays"
      />
    </div>
  )
}
