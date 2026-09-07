
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import trainingData from '@/app/data/training'
import React from 'react'

export default function page() {

  let Certifications = trainingData.filter(
    (item) => item.module === "certifications")

  let columns = [
    {
      key: "certificationId",
      label: "certification Id "
    },
    {
      key: "employeeName",
      label: "employee Name"
    },
    {
      key: "certificationName",
      label: "certification Name"
    },
    {
      key: "issueDate",
      label: "issue Date"
    },
    {
      key: "score",
      label: "score"
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
      <OrganizationTable data={Certifications}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/training/certifications"
      />
    </div>
  )
}
