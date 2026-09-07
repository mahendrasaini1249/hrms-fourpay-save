
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import expensesData from '@/app/data/expances'
import React from 'react'

export default function page() {

  let ApprovalData = expensesData.filter(
    (item) => item.module === "expense-approval")

  let columns = [
    {
      key: "approvalId",
      label: "approval Id "
    },
    {
      key: "employeeName",
      label: "employee Name"
    },
    {
      key: "category",
      label: "category"
    },
    {
      key: "amount",
      label: "amount"
    },
    {
      key: "approver",
      label: "approver"
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
      <OrganizationTable data={ApprovalData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/expenses/approval"
      />
    </div>
  )
}
