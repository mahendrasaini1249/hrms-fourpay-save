"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import trainingData from '@/app/data/training'
import React from 'react'

export default function page() {

  let ProgramData = trainingData.filter(
    (item) => item.module === "training-programs")

  let columns = [
    {
      key: "programId",
      label: "program "
    },
    {
      key: "programName",
      label: "program Name"
    },
    {
      key: "objectives",
      label: "objectives"
    },
    {
      key: "duration",
      label: "duration"
    },
    {
      key: "trainingMode",
      label: "training"
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
      <OrganizationTable data={ProgramData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/training/programs"
      />
    </div>
  )
}
