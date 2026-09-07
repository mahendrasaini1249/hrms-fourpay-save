"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import attendanceData from '@/app/data/attendece'
import React from 'react'

export default function page() {

  let DailyAttendance = attendanceData.filter(
    (item) => item.module === "daily")

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
      key: "designation",
      label: "designation"
    },
    {
      key: "checkIn",
      label: "check In"
    },
    {
      key: "checkOut",
      label: "check Out"
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
      <OrganizationTable data={DailyAttendance}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/attendance/daily"
      />
    </div>
  )
}
