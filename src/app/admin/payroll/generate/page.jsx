"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import payrollData from '@/app/data/payroll'
import React from 'react'

export default function page() {

  let GenratePayrolls = payrollData.filter(
    (item) => item.module === "generate-payroll")

  let columns = [
    {
      key: "payrollId",
      label: "payroll Id"
    },
    {
      key: "payrollMonth",
      label: "payroll Month "
    },
    {
      key: "payrollYear",
      label: "payroll Year"
    },
    {
      key: "totalEmployees",
      label: "total Employees"
    },
    {
      key: "processedEmployees",
      label: "processed Employees"
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
      <OrganizationTable data={GenratePayrolls}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/payroll/generate"
      />
    </div>
  )
}
