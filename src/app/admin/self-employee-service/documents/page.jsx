
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import employeeSelfServiceData from '@/app/data/employeeSelfService'
import React from 'react'

export default function page() {

  let Document = employeeSelfServiceData.filter(
    (item) => item.module === "my-documents")

  let columns = [
    {
      key: "documentId",
      label: "document Id"
    },
    {
      key: "documentName",
      label: "document Name"
    },
    {
      key: "documentType",
      label: "document Type"
    },
    {
      key: "uploadDate",
      label: "uploadDate"
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
      <OrganizationTable data={Document}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/self-employee-service/documents"
      />
    </div>
  )
}
