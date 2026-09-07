
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import communicationData from '@/app/data/communicatin'
import React from 'react'

export default function page() {

  let SmsData = communicationData.filter(
    (item) => item.module === "sms")

  let columns = [
    {
      key: "smsId",
      label: "sms Id"
    },
    {
      key: "mobileNumber",
      label: "mobile Number"
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
      <OrganizationTable data={SmsData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/communication/sms"
      />
    </div>
  )
}
