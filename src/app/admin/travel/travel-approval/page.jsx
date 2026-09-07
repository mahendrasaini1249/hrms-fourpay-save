"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import travelData from '@/app/data/travel'
import React from 'react'

export default function page() {

  let TravelApprovel = travelData.filter(
    (item) => item.module === "travel-approval")

  let columns = [
    {
      key: "approvalId",
      label: "approval Id "
    },
    {
      key: "employeeName",
      label: "employee Name"
    },
    {
      key: "approver",
      label: "approver"
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
      <OrganizationTable data={TravelApprovel}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/travel/travel-approval"
      />
    </div>
  )
}
