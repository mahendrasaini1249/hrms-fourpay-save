"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import leaveManagementData from '@/app/data/leaveData'
import React from 'react'

export default function page() {

  let LeaveType = leaveManagementData.filter(
    (item) => item.module === "leave-types")

  let columns = [
    {
      key: "leaveTypeName",
      label: "leave Type Name"
    },
    {
      key: "leaveCode",
      label: "leave Code"
    },
    {
      key: "yearlyLimit",
      label: "yearly Limit"
    },
    {
      key: "paidLeave",
      label: "paid Leave"
    },
    {
      key: "carryForward",
      label: "carry Forward"
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
      <OrganizationTable data={LeaveType}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/leave-management/leave-types"
      />
    </div>
  )
}
