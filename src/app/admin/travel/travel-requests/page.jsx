"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import travelData from '@/app/data/travel'
import React from 'react'

export default function page() {

  let TravelRequest = travelData.filter(
    (item) => item.module === "travel-requests")

  let columns = [
    {
      key: "requestId",
      label: "request Id "
    },
    {
      key: "employeeName",
      label: "employee Name"
    },
    {
      key: "travelType",
      label: "travel Type"
    },
    {
      key: "destination",
      label: "destination"
    },
    {
      key: "estimatedCost",
      label: "estimated Cost"
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
      <OrganizationTable data={TravelRequest}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/travel/travel-requests"
      />
    </div>
  )
}
