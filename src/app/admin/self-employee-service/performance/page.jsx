
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import employeeSelfServiceData from '@/app/data/employeeSelfService'
import React from 'react'

export default function page() {

  let Performance = employeeSelfServiceData.filter(
    (item) => item.module === "my-performance")

  let columns = [
    {
      key: "reviewId",
      label: "review Id"
    },
    {
      key: "reviewPeriod",
      label: "review Period  "
    },
    {
      key: "reviewer",
      label: "reviewer"
    },
    {
      key: "rating",
      label: "rating"
    },
    {
      key: "reviewDate",
      label: "review Date"
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
      <OrganizationTable data={Performance}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/self-employee-service/performance"
      />
    </div>
  )
}
