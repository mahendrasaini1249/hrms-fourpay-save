"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import payrollData from '@/app/data/payroll'
import React from 'react'

export default function page() {

  let Payslips = payrollData.filter(
    (item) => item.module === "payslips")

  let columns = [
    {
      key: "payslipId",
      label: "payslip Id"
    },
    {
      key: "employeeName",
      label: "employee Name"
    },
    {
      key: "department",
      label: "salaryMonth"
    },
    {
      key: "salaryMonth",
      label: "salary Month"
    },
    {
      key: "paymentDate",
      label: "payment Date"
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
      <OrganizationTable data={Payslips}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/payroll/payslips"
      />
    </div>
  )
}
