
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import communicationData from '@/app/data/communicatin'
import React from 'react'

export default function page() {

  let NotificationData = communicationData.filter(
    (item) => item.module === "notifications")

  let columns = [
    {
      key: "notificationId",
      label: " notification Id"
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
      key: "recipient",
      label: "recipient"
    },
    {
      key: "type",
      label: "type"
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
      <OrganizationTable data={NotificationData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/communication/notifications"
      />
    </div>
  )
}
