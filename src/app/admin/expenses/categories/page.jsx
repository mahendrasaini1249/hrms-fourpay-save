
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import expensesData from '@/app/data/expances'
import React from 'react'

export default function page() {

  let ExpensesCatData = expensesData.filter(
    (item) => item.module === "expense-categories")

  let columns = [
    {
      key: "categoryId",
      label: "certification Id "
    },
    {
      key: "categoryName",
      label: "category Name"
    },
    {
      key: "description",
      label: "description"
    },
    {
      key: "limit",
      label: "limit"
    },
    {
      key: "approvalRequired",
      label: "approval Required"
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
      <OrganizationTable data={ExpensesCatData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/expenses/categories"
      />
    </div>
  )
}
