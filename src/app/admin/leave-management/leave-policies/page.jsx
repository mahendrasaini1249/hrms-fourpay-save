"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import leaveManagementData from '@/app/data/leaveData'
import React from 'react'

export default function page() {

  let LeavePolices = leaveManagementData.filter(
    (item) => item.module === "leave-policies")

  let columns = [
    {
      key: "policyName",
      label: "policy Name"
    },
    {
      key: "leaveType",
      label: "leave Type"
    },
    {
      key: "yearlyLimit",
      label: "yearly Limit"
    },
    {
      key: "monthlyLimit",
      label: "monthly Limit"
    },
    {
      key: "noticePeriod",
      label: "notice Period"
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
      <OrganizationTable data={LeavePolices}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/leave-management/leave-policies"
      />
    </div>
  )
}
