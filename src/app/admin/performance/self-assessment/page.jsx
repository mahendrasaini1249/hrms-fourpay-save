"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import performanceData from '@/app/data/performance'
import React from 'react'

export default function page() {

  let SelfAssistmance = performanceData.filter(
    (item) => item.module === "self-assessment")

  let columns = [
    {
      key: "assessmentId",
      label: "assessment Id"
    },
    {
      key: "employeeName",
      label: "employee Name"
    },
    {
      key: "department",
      label: "department"
    },
    {
      key: "communication",
      label: "communication"
    },
    {
      key: "goalAchievement",
      label: "goal Achievement"
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
      <OrganizationTable data={SelfAssistmance}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/performance/self-assessment"
      />
    </div>
  )
}
