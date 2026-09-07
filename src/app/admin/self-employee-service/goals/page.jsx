
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import employeeSelfServiceData from '@/app/data/employeeSelfService'
import React from 'react'

export default function page() {

  let MyGoals = employeeSelfServiceData.filter(
    (item) => item.module === "my-goals")

  let columns = [
    {
      key: "goalId",
      label: "goal Id"
    },
    {
      key: "goalTitle",
      label: "goal Title  "
    },
    {
      key: "targetDate",
      label: "target Date"
    },
    {
      key: "progress",
      label: "progress"
    },
    {
      key: "priority",
      label: "priority"
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
      <OrganizationTable data={MyGoals}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/self-employee-service/goals"
      />
    </div>
  )
}
