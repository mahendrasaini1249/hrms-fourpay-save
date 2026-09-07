"use client"
import React from 'react'
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import hiringOnboardingData from '@/app/data/hiring-onbarding'


export default function page() {

  let JobPostsData = hiringOnboardingData.filter((item) => item.module === "job-posts")

  let columns = [
    {
      key: "jobPostId",
      label: "jobPostId"
    },
    {
      key: "jobTitle",
      label: "jobTitle"
    },
    {
      key: "department",
      label: "department"
    },
    {
      key: "postedDate",
      label: "postedDate"
    },
    {
      key: "closingDate",
      label: "closingDate"
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
        data={JobPostsData}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/hiring-onboarding/job-posts"
      />

    </div>
  )
}
