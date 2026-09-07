"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import attendanceData from '@/app/data/attendece'
import React from 'react'

export default function page() {

  let ChackinOut = attendanceData.filter(
    (item) => item.module === "check-in-out")

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
      key: "checkIn",
      label: "heck In"
    },
    {
      key: "checkOut",
      label: "checkOut"
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
      <OrganizationTable data={ChackinOut}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/attendance/check-in-out"
      />
    </div>
  )
}
