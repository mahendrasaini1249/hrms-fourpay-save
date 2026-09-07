
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import settingsData from '@/app/data/setting'
import React from 'react'

export default function page() {

  let Attendance = settingsData.filter(
    (item) => item.module === "attendance-settings")

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
      key: "workingHours",
      label: "working Hours"
    },
    {
      key: "lateMarkAfter",
      label: "late Mark"
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
      <OrganizationTable data={Attendance}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/settings/attendance"
      />
    </div>
  )
}
