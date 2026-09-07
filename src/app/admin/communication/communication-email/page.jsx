
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import communicationData from '@/app/data/communicatin'
import React from 'react'

export default function page() {

  let CommunationEmail = communicationData.filter(
    (item) => item.module === "email")

  let columns = [
    {
      key: "emailId",
      label: " email Id"
    },
    {
      key: "recipient",
      label: "recipient"
    },
    {
      key: "sentDate",
      label: "sent Date"
    },
    {
      key: "sentBy",
      label: "sent By"
    },
    {
      key: "subject",
      label: "subject"
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
      <OrganizationTable data={CommunationEmail}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/communication/communication-email"
      />
    </div>
  )
}
