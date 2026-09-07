
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import expensesData from '@/app/data/expances'
import React from 'react'

export default function page() {

  let RequestData = expensesData.filter(
    (item) => item.module === "expense-requests")

  let columns = [
    {
      key: "requestId",
      label: "request Id "
    },
    {
      key: "employeeName",
      label: "employee Name"
    },
    {
      key: "requestDate",
      label: "request Date"
    },
    {
      key: "amount",
      label: "amount"
    },
    {
      key: "priority",
      label: "priority"
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
      <OrganizationTable data={RequestData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/expenses/requests"
      />
    </div>
  )
}
