
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import documentsData from '@/app/data/document'
import React from 'react'

export default function page() {

  let Appointment = documentsData.filter(
    (item) => item.module === "appointment-letters")

  let columns = [
    {
      key: "letterId",
      label: "letter Id "
    },
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
      <OrganizationTable data={Appointment}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/documents/appointment-letters"
      />
    </div>
  )
}
