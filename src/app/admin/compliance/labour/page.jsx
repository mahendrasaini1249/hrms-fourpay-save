
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import complianceData from '@/app/data/compliance'
import React from 'react'

export default function page() {

  let LabourData = complianceData.filter(
    (item) => item.module === "labour-compliance")

  let columns = [
    {
      key: "complianceId",
      label: "compliance Id"
    },
    {
      key: "complianceName",
      label: "compliance Name"
    },
    {
      key: "department",
      label: "department"
    },
    {
      key: "dueDate",
      label: "due Date"
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
      <OrganizationTable data={LabourData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/compliance/labour"
      />
    </div>
  )
}
