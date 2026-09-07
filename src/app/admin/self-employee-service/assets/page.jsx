
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import employeeSelfServiceData from '@/app/data/employeeSelfService'
import React from 'react'

export default function page() {

  let Assets = employeeSelfServiceData.filter(
    (item) => item.module === "my-assets")

  let columns = [
    {
      key: "assetId",
      label: "asset Id"
    },
    {
      key: "assetName",
      label: "asset Name  "
    },
    {
      key: "assetType",
      label: "asset Type  "
    },
    {
      key: "assignedDate",
      label: "assigned Date"
    },
    {
      key: "condition",
      label: "condition"
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
      <OrganizationTable data={Assets}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/self-employee-service/assets"
      />
    </div>
  )
}
