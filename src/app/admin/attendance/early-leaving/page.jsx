"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import attendanceData from '@/app/data/attendece'
import React from 'react'

export default function page() {

  let EarlyAttendance = attendanceData.filter(
    (item) => item.module === "early-leaving")

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
      key: "actualCheckOut",
      label: "actual Check Out"
    },
    {
      key: "earlyBy",
      label: "early By"
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
      <OrganizationTable data={EarlyAttendance}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/attendance/early-leaving"
      />
    </div>
  )
}
