"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import trainingData from '@/app/data/training'
import React from 'react'

export default function page() {

  let TrainerData = trainingData.filter(
    (item) => item.module === "trainers")

  let columns = [
    {
      key: "trainerId",
      label: "trainer Id "
    },
    {
      key: "trainerName",
      label: "trainer Name"
    },
    {
      key: "specialization",
      label: "specialization"
    },
    {
      key: "experience",
      label: "experience"
    },
    {
      key: "qualification",
      label: "qualification"
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
      <OrganizationTable data={TrainerData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/training/trainers"
      />
    </div>
  )
}
