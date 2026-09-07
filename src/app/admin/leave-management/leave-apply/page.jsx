"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import leaveManagementData from '@/app/data/leaveData'
import React from 'react'

export default function page() {

  let LeaveApply = leaveManagementData.filter(
    (item) => item.module === "leave-apply")

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
      key: "leaveType",
      label: "leave Type"
    },
    {
      key: "totalDays",
      label: "total Days"
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
      <OrganizationTable data={LeaveApply}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/leave-management/leave-apply"
      />
    </div>
  )
}
