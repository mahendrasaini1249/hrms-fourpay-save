
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import settingsData from '@/app/data/setting'
import React from 'react'

export default function page() {

  let Payroll = settingsData.filter(
    (item) => item.module === "payroll-settings")

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
      key: "payrollCycle",
      label: "payroll Cycle"
    },
    {
      key: "salaryDate",
      label: "salaryDate"
    },
    {
      key: "currency",
      label: "currency"
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
      <OrganizationTable data={Payroll}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/settings/payroll"
      />
    </div>
  )
}
