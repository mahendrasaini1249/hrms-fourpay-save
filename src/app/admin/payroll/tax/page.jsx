"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import payrollData from '@/app/data/payroll'
import React from 'react'

export default function page() {

  let taxData = payrollData.filter(
    (item) => item.module === "tax-tds")

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
      key: "financialYear",
      label: "financial Year"
    },
    {
      key: "panNumber",
      label: "pan Number"
    },
    {
      key: "taxableIncome",
      label: "taxable Income"
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
      <OrganizationTable data={taxData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/payroll/tax"
      />
    </div>
  )
}
