"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import performanceData from '@/app/data/performance'
import React from 'react'

export default function page() {

  let AppraisalsData = performanceData.filter(
    (item) => item.module === "appraisals")

  let columns = [
    {
      key: "appraisalId",
      label: "appraisal Id"
    },
    {
      key: "employeeName",
      label: "employee Name"
    },
    {
      key: "designation",
      label: "designation"
    },
    {
      key: "currentRating",
      label: "current Rating"
    },
     {
      key: "overallScore",
      label: "overall Score"
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
      <OrganizationTable data={AppraisalsData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/performance/appraisals"
      />
    </div>
  )
}
