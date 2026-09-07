
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import supportTickets from '@/app/data/ticket'
import React from 'react'

export default function page() {

  let Ticket = supportTickets.filter(
    (item) => item.module === "ticket")

  let columns = [
    {
      key: "ticketId",
      label: "ticket Id "
    },
    {
      key: "subject",
      label: "subject"
    },
    {
      key: "category",
      label: "category"
    },
    {
      key: "priority",
      label: "priority"
    },
    {
      key: "createdAt",
      label: "created At"
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
      <OrganizationTable data={Ticket}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/help/tickets"
      />
    </div>
  )
}
