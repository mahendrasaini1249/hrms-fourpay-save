"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import leaveManagementData from '@/app/data/leaveData'
import React from 'react'

export default function page() {

  let LeaveApproval = leaveManagementData.filter(
    (item) => item.module === "leave-approval")

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
      key: "requestId",
      label: "request Id"
    },
    {
      key: "leaveType",
      label: "leave Type"
    },
    {
      key: "reason",
      label: "reason"
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
      <OrganizationTable data={LeaveApproval}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/leave-management/leave-approval"
      />
    </div>
  )
}
