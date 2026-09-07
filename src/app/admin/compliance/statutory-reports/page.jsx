
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import complianceData from '@/app/data/compliance'
import React from 'react'

export default function page() {

  let Statutory = complianceData.filter(
    (item) => item.module === "statutory-reports")

  let columns = [
    {
      key: "reportId",
      label: "report Id"
    },
    {
      key: "reportName",
      label: "report Name"
    },
    {
      key: "reportingMonth",
      label: "reporting Month"
    },
    {
      key: "submittedDate",
      label: "submitted Date"
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
      <OrganizationTable data={Statutory}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/compliance/statutory-reports"
      />
    </div>
  )
}
