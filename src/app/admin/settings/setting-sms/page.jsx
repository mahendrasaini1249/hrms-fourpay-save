
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import settingsData from '@/app/data/setting'
import React from 'react'

export default function page() {

  let Sms = settingsData.filter(
    (item) => item.module === "sms-settings")

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
      key: "provider",
      label: "provider"
    },
    {
      key: "senderId",
      label: "sender Id"
    },
    {
      key: "updatedBy",
      label: "updated By"
    },
    {
      key: "updatedDate",
      label: "updated Date"
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
      <OrganizationTable data={Sms}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/settings/setting-sms"
      />
    </div>
  )
}
