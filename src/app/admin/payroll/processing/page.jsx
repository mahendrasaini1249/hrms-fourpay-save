"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import payrollData from '@/app/data/payroll'
import React from 'react'

export default function page() {

  let PayrollProcessing = payrollData.filter(
    (item) => item.module === "payroll-processing")

  let columns = [
    {
      key: "payrollId",
      label: "payroll Id"
    },
    {
      key: "employeeId",
      label: "employee Id"
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
      key: "netSalary",
      label: "net Salary"
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
      <OrganizationTable data={PayrollProcessing}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/payroll/processing"
      />
    </div>
  )
}
