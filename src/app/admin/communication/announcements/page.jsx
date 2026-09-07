
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import communicationData from '@/app/data/communicatin'
import React from 'react'

export default function page() {

  let AnnouncementsData = communicationData.filter(
    (item) => item.module === "announcements")

  let columns = [
    {
      key: "announcementId",
      label: " announcement Id"
    },
    {
      key: "title",
      label: "title"
    },
    {
      key: "message",
      label: "message"
    },
    {
      key: "publishedBy",
      label: "publishedBy"
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
      <OrganizationTable data={AnnouncementsData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/communication/announcements"
      />
    </div>
  )
}
