"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import travelData from '@/app/data/travel'
import React from 'react'

export default function page() {

  let PlansData = travelData.filter(
    (item) => item.module === "travel-plans")

  let columns = [
    {
      key: "planId",
      label: "plan Id  "
    },
    {
      key: "employeeName",
      label: "employee Name"
    },
    {
      key: "travelPurpose",
      label: "travel Purpose"
    },
    {
      key: "destination",
      label: "destination"
    },
    {
      key: "departureDate",
      label: "departure Date "
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
      <OrganizationTable data={PlansData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/travel/plans"
      />
    </div>
  )
}
