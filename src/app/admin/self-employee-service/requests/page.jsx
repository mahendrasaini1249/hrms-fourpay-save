
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import employeeSelfServiceData from '@/app/data/employeeSelfService'
import React from 'react'

export default function page() {

  let Requests = employeeSelfServiceData.filter(
    (item) => item.module === "my-requests")

  let columns = [
    {
      key: "requestId",
      label: "request Id"
    },
    {
      key: "requestType",
      label: "request Type"
    },
    {
      key: "requestDate",
      label: "request Date"
    },
    {
      key: "description",
      label: "description"
    },
    {
      key: "priority",
      label: "priority"
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
      <OrganizationTable data={Requests}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/self-employee-service/requests"
      />
    </div>
  )
}
