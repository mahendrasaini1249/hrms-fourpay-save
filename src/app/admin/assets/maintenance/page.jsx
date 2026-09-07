"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import assetData from '@/app/data/asests'
import React from 'react'

export default function page() {

  let Maintenance = assetData.filter(
    (item) => item.module === "asset-maintenance")

  let columns = [
    {
      key: "maintenanceId",
      label: "maintenance Id"
    },
    {
      key: "assetName",
      label: "asset Name"
    },
    {
      key: "maintenanceType",
      label: "maintenance Type"
    },
    {
      key: "requestDate",
      label: "request Date"
    },
    {
      key: "technician",
      label: "technician"
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
      <OrganizationTable data={Maintenance}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/assets/maintenance"
      />
    </div>
  )
}
