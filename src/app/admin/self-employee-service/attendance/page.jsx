
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import employeeSelfServiceData from '@/app/data/employeeSelfService'
import React from 'react'

export default function page() {

  let Attendance = employeeSelfServiceData.filter(
    (item) => item.module === "my-attendance")

  let columns = [
    {
      key: "attendanceId",
      label: "attendance Id"
    },
    {
      key: "date",
      label: "date"
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
      key: "workingHours",
      label: "working Hours"
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
      <OrganizationTable data={Attendance}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/self-employee-service/attendance"
      />
    </div>
  )
}
