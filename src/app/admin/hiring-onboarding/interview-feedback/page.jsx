"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import hiringOnboardingData from '@/app/data/hiring-onbarding'
import React from 'react'

export default function page() {

  let InterviewFeedback = hiringOnboardingData.filter((item) => item.module === "interview-feedback")

  let columns = [
    {
      key: "candidateId",
      label: "interview Id"
    },
    {
      key: "candidateName",
      label: "candidate Name"
    },
    {
      key: "position",
      label: "Position"
    },
    {
      key: "interviewRound",
      label: "interview Round"
    },
    {
      key: "rating",
      label: "rating"
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
      <OrganizationTable data={InterviewFeedback}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/hiring-onboarding/interview-feedback"
      />
    </div>
  )
}
