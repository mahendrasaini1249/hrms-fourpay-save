
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import complianceData from '@/app/data/compliance'
import React from 'react'

export default function page() {

  let Calendar = complianceData.filter(
    (item) => item.module === "compliance-calendar")

  let columns = [
    {
      key: "eventId",
      label: "event Id"
    },
    {
      key: "eventName",
      label: "event Name"
    },
    {
      key: "dueDate",
      label: "due Date"
    },
    {
      key: "department",
      label: "department"
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
      <OrganizationTable data={Calendar}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/compliance/calendar"
      />
    </div>
  )
}
