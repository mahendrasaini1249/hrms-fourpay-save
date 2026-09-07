"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import performanceData from '@/app/data/performance'
import React from 'react'

export default function page() {

  let GoalsData = performanceData.filter(
    (item) => item.module === "goals-kpis")

  let columns = [
    {
      key: "goalId",
      label: "goal Id"
    },
    {
      key: "employeeName",
      label: "employee Name"
    },
    {
      key: "goalTitle",
      label: "financial Year"
    },
    {
      key: "target",
      label: "target"
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
      <OrganizationTable data={GoalsData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/performance/goals"
      />
    </div>
  )
}
