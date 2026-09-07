
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import expensesData from '@/app/data/expances'
import React from 'react'

export default function page() {

  let SubmitData = expensesData.filter(
    (item) => item.module === "submit-expense")

  let columns = [
    {
      key: "expenseId",
      label: "expense Id "
    },
    {
      key: "employeeName",
      label: "employee Name"
    },
    {
      key: "expenseDate",
      label: "expense Date"
    },
    {
      key: "amount",
      label: "amount"
    },
    {
      key: "paymentMode",
      label: "payment Mode"
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
      <OrganizationTable data={SubmitData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/expenses/submit"
      />
    </div>
  )
}
