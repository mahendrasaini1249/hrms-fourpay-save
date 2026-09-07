
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import complianceData from '@/app/data/compliance'
import React from 'react'

export default function page() {

  let EsiData = complianceData.filter(
    (item) => item.module === "esi")

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
      key: "esiNumber",
      label: "esi Number"
    },
    {
      key: "employeeContribution",
      label: "employee Contribution"
    },
    {
      key: "employerContribution",
      label: " employer Contribution"
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
      <OrganizationTable data={EsiData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/compliance/esi"
      />
    </div>
  )
}
