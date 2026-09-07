"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import assetData from '@/app/data/asests'
import React from 'react'

export default function page() {

  let AssetsData = assetData.filter(
    (item) => item.module === "asset-categories")

  let columns = [
    {
      key: "categoryId",
      label: "category Id  "
    },
    {
      key: "categoryName",
      label: "category Name"
    },
    {
      key: "assetType",
      label: "asset Type  "
    },
    {
      key: "description",
      label: "description"
    },
    {
      key: "depreciationRate",
      label: "depreciation  "
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
      <OrganizationTable data={AssetsData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/assets/assets-categories"
      />
    </div>
  )
}
