"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import payrollData from '@/app/data/payroll'
import React from 'react'

export default function page() {

  let LoanData = payrollData.filter(
    (item) => item.module === "loans-advances")

  let columns = [
    {
      key: "loanId",
      label: "loan Id"
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
      key: "loanType",
      label: "loan Type "
    },
    {
      key: "approvedAmount",
      label: "approved Amount"
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
      <OrganizationTable data={LoanData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/payroll/loans"
      />
    </div>
  )
}
