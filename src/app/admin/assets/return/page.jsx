"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import assetData from '@/app/data/asests'
import React from 'react'

export default function page() {

  let ReturnAsset = assetData.filter(
    (item) => item.module === "return-asset")

  let columns = [
    {
      key: "returnId",
      label: "return Id  "
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
      key: "returnDate",
      label: "return Date"
    },
    {
      key: "reason",
      label: "reason"
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
      <OrganizationTable data={ReturnAsset}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/assets/return"
      />
    </div>
  )
}
