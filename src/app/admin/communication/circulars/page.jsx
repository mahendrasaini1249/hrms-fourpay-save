
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import communicationData from '@/app/data/communicatin'
import React from 'react'

export default function page() {

  let CircularData = communicationData.filter(
    (item) => item.module === "employee-circulars")

  let columns = [
    {
      key: "circularId",
      label: "circular Id"
    },
    {
      key: "title",
      label: "title"
    },
    {
      key: "issuedBy",
      label: "issued By"
    },
    {
      key: "issueDate",
      label: "issue Date"
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
      <OrganizationTable data={CircularData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/communication/circulars"
      />
    </div>
  )
}
