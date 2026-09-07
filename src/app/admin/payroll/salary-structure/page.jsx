"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import payrollData from '@/app/data/payroll'
import React from 'react'

export default function page() {

  let SalaryStru = payrollData.filter(
    (item) => item.module === "salary-structure")

  let columns = [
    {
      key: "structureName",
      label: "structure Name"
    },
    {
      key: "structureCode",
      label: "structure Code"
    },
    {
      key: "applicableFor",
      label: "applicable For"
    },
    {
      key: "payFrequency",
      label: "pay Frequency"
    },
    {
      key: "pfApplicable",
      label: "pf Applicable"
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
      <OrganizationTable data={SalaryStru}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/payroll/salary-structure"
      />
    </div>
  )
}
