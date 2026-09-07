"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import performanceData from '@/app/data/performance'
import React from 'react'

export default function page() {

  let ReviewData = performanceData.filter(
    (item) => item.module === "performance-reviews")

  let columns = [
    {
      key: "reviewId",
      label: "review Id"
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
      key: "reviewPeriod",
      label: "review Period"
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
      <OrganizationTable data={ReviewData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/performance/reviews"
      />
    </div>
  )
}
