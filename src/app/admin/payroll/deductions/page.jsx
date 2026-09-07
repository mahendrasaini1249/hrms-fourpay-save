"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import payrollData from '@/app/data/payroll'
import React from 'react'

export default function page() {

  let Deductions = payrollData.filter(
    (item) => item.module === "deductions")

  let columns = [
    {
      key: "deductionId",
      label: "deduction Id "
    },
    {
      key: "employeeName",
      label: "employee Name"
    },
    {
      key: "department",
      label: "department"
    },
    {
      key: "deductionType",
      label: "deduction Type "
    },
    {
      key: "amount",
      label: "amount"
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
      <OrganizationTable data={Deductions}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/payroll/deductions"
      />
    </div>
  )
}
