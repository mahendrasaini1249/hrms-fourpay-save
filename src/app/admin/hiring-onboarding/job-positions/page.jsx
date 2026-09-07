"use client"
import React from 'react'
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import hiringOnboardingData from '@/app/data/hiring-onbarding'


export default function page() {

  let JobPositionData = hiringOnboardingData.filter((item) => item.module === "job-positions")

  let columns = [
    {
      key: "positionId",
      label: "position Id"
    },
    {
      key: "positionName",
      label: "positionName"
    },
    {
      key: "department",
      label: "department"
    },
    {
      key: "designation",
      label: "designation"
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
      <OrganizationTable
        columns={columns}
        data={JobPositionData}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/hiring-onboarding/job-positions"
      />

    </div>
  )
}
