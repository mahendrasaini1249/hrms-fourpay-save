"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import hiringOnboardingData from '@/app/data/hiring-onbarding'
import React from 'react'

export default function page() {

  let JobApplicationData = hiringOnboardingData.filter((item) => item.module === "job-applications")

  let columns = [
    {
      key: "applicationId",
      label: "application Id"
    },
    {
      key: "candidateName",
      label: "candidate Name"
    },
    {
      key: "jobPosition",
      label: "job Position"
    },
    {
      key: "appliedDate",
      label: "candidate Id"
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
      <OrganizationTable data={JobApplicationData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/hiring-onboarding/job-applications"
      />
    </div>
  )
}
