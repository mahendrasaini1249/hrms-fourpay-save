
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import communicationData from '@/app/data/communicatin'
import React from 'react'

export default function page() {

  let MessageData = communicationData.filter(
    (item) => item.module === "internal-messages")

  let columns = [
    {
      key: "messageId",
      label: "message Id"
    },
    {
      key: "sender",
      label: "sender"
    },
    {
      key: "receiver",
      label: "receiver"
    },
    {
      key: "subject",
      label: "subject"
    },
    {
      key: "sentDate",
      label: "sent Date"
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
      <OrganizationTable data={MessageData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/communication/messages"
      />
    </div>
  )
}
