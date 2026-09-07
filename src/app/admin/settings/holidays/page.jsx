
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import settingsData from '@/app/data/setting'
import React from 'react'

export default function page() {

  let Holiday = settingsData.filter(
    (item) => item.module === "holiday-settings")

  let columns = [
    {
      key: "id",
      label: "id"
    },

    {
      key: "holidayCalendar",
      label: " Calendar"
    },
    {
      key: "totalHolidays",
      label: " Holidays"
    },
    {
      key: "year",
      label: "year"
    },
    {
      key: "updatedBy",
      label: "updated By"
    },
    {
      key: "updatedDate",
      label: " Date"
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
      <OrganizationTable data={Holiday}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/settings/holidays"
      />
    </div>
  )
}
