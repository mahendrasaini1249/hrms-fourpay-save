"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import assetData from '@/app/data/asests'
import React from 'react'

export default function page() {

  let AssetHistory = assetData.filter(
    (item) => item.module === "asset-history")

  let columns = [
    {
      key: "historyId",
      label: "history Id  "
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
      key: "action",
      label: "action"
    },
    {
      key: "performedBy",
      label: "performed By  "
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
      <OrganizationTable data={AssetHistory}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/assets/history"
      />
    </div>
  )
}
