"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import travelData from '@/app/data/travel'
import React from 'react'

export default function page() {

  let TravelExpenses = travelData.filter(
    (item) => item.module === "travel-expenses")

  let columns = [
    {
      key: "expenseId",
      label: "expense Id  "
    },
    {
      key: "employeeName",
      label: "employee Name"
    },
    {
      key: "travelDate",
      label: "travel Date "
    },
    {
      key: "destination",
      label: "destination"
    },
    {
      key: "travelExpenseType",
      label: "travelExpense Type "
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
      <OrganizationTable data={TravelExpenses}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/travel/travel-expenses"
      />
    </div>
  )
}
