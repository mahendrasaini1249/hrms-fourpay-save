
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import shiftManagementData from '@/app/data/shift'
import React from 'react'

export default function page() {

  let Assignement = shiftManagementData.filter(
    (item) => item.module === "shift-assignment")

  let columns = [
    {
      key: "assignmentId",
      label: "assignment Id"
    },
    {
      key: "employeeName",
      label: "employee Name"
    },
    {
      key: "shiftName",
      label: "shift Name"
    },
    {
      key: "assignedDate",
      label: "assignedDate"
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
      <OrganizationTable data={Assignement}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/shifts-management/assignment"
      />
    </div>
  )
}
