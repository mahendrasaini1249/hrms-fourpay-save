
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import trainingData from '@/app/data/training'
import React from 'react'

export default function page() {

  let Employeetraining = trainingData.filter(
    (item) => item.module === "training-calendar")

  let columns = [
    {
      key: "eventId",
      label: "event Id "
    },
    {
      key: "trainingTitle",
      label: "training Title"
    },
    {
      key: "trainerName",
      label: "trainer Name"
    },
    {
      key: "duration",
      label: "duration"
    },
    {
      key: "participants",
      label: "participants"
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
      <OrganizationTable data={Employeetraining}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/training/calendar"
      />
    </div>
  )
}
