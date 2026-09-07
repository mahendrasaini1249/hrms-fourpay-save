"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import hiringOnboardingData from '@/app/data/hiring-onbarding'
import React from 'react'

export default function page() {

  let BackgroundData = hiringOnboardingData.filter((item) => item.module === "background-verification")

  let columns = [
    {
      key: "candidateId",
      label: "candidate Id"
    },
    {
      key: "candidateName",
      label: "candidate Name"
    },
    {
      key: "verificationDate",
      label: "verification Date"
    },
    {
      key: "verificationType",
      label: "verification Type"
    },
    {
      key: "result",
      label: "result"
    },

    {
      key: "status",
      label: "Status"
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
      <OrganizationTable data={BackgroundData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/hiring-onboarding/background-verification"
      />
    </div>
  )
}
