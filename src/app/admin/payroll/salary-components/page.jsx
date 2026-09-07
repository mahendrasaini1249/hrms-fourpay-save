"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import payrollData from '@/app/data/payroll'
import React from 'react'

export default function page() {

  let SalaryComponents = payrollData.filter(
    (item) => item.module === "salary-components")

  let columns = [
    {
      key: "componentName",
      label: "component Name"
    },
    {
      key: "componentCode",
      label: "component Code"
    },
    {
      key: "componentType",
      label: "component Type"
    },
    {
      key: "calculationType",
      label: "calculation Type"
    },
    {
      key: "value",
      label: "value"
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
      <OrganizationTable data={SalaryComponents}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/payroll/salary-components"
      />
    </div>
  )
}
