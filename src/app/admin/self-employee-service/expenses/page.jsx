
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import employeeSelfServiceData from '@/app/data/employeeSelfService'
import React from 'react'

export default function page() {

  let Myexpenses = employeeSelfServiceData.filter(
    (item) => item.module === "my-expenses")

  let columns = [
    {
      key: "expenseId",
      label: "expense Id"
    },
    {
      key: "expenseType",
      label: "expense Type "
    },
    {
      key: "expenseDate",
      label: "expense Date "
    },
    {
      key: "amount",
      label: "amount"
    },
    {
      key: "description",
      label: "description"
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
      <OrganizationTable data={Myexpenses}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/self-employee-service/expenses"
      />
    </div>
  )
}
