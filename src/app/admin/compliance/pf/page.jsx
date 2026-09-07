
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import complianceData from '@/app/data/compliance'
import React from 'react'

export default function page() {

  let PfData = complianceData.filter(
    (item) => item.module === "pf")

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
      key: "uanNumber",
      label: "uan Number"
    },
    {
      key: "pfAmount",
      label: "pf Amount"
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
      <OrganizationTable data={PfData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/compliance/pf"
      />
    </div>
  )
}
