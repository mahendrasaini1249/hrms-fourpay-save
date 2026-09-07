
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import documentsData from '@/app/data/document'
import React from 'react'

export default function page() {

  let HrPolices = documentsData.filter(
    (item) => item.module === "hr-policies")

  let columns = [
    {
      key: "policyId",
      label: "policy Id "
    },
    {
      key: "policyName",
      label: "policy Name"
    },
    {
      key: "policyType",
      label: "policy Type"
    },
    {
      key: "effectiveDate",
      label: "effective Date"
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
      <OrganizationTable data={HrPolices}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/documents/policies"
      />
    </div>
  )
}
