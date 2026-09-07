
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import settingsData from '@/app/data/setting'
import React from 'react'

export default function page() {

  let GenralSetting = settingsData.filter(
    (item) => item.module === "general-settings")

  let columns = [
    {
      key: "id",
      label: "id"
    },
    {
      key: "settingName",
      label: "setting Name"
    },
    {
      key: "description",
      label: "description"
    },
    {
      key: "updatedDate",
      label: "updated Date"
    },
    {
      key: "updatedBy",
      label: "updated By"
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
      <OrganizationTable data={GenralSetting}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/settings/general"
      />
    </div>
  )
}
