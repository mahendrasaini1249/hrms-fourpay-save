
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import shiftManagementData from '@/app/data/shift'
import React from 'react'

export default function page() {

  let Roster = shiftManagementData.filter(
    (item) => item.module === "weekly-schedule")

  let columns = [
    {
      key: "scheduleId",
      label: "schedule Id"
    },
    {
      key: "employeeName",
      label: "employee Name"
    },
    {
      key: "monday",
      label: "monday"
    },
    {
      key: "tuesday",
      label: "tuesday"
    },
    {
      key: "wednesday",
      label: "wednesday"
    },
    {
      key: "sunday",
      label: "sunday"
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
      <OrganizationTable data={Roster}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/shifts-management/schedule"
      />
    </div>
  )
}
