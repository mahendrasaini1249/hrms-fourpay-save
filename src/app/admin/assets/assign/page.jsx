"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import assetData from '@/app/data/asests'
import React from 'react'

export default function page() {

  let AssetAssgin = assetData.filter(
    (item) => item.module === "assign-asset")

  let columns = [
    {
      key: "assignmentId",
      label: "assignment Id  "
    },
    {
      key: "assetName",
      label: "asset Name"
    },
    {
      key: "employeeName",
      label: "employee Name"
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
      <OrganizationTable data={AssetAssgin}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/assets/assign"
      />
    </div>
  )
}
