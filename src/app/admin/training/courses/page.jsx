"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import trainingData from '@/app/data/training'
import React from 'react'

export default function page() {

  let CouresesData = trainingData.filter(
    (item) => item.module === "courses")

  let columns = [
    {
      key: "courseId",
      label: "course Id "
    },
    {
      key: "courseName",
      label: "course Name"
    },
    {
      key: "category",
      label: "category"
    },
    {
      key: "trainingMode",
      label: "training Mode"
    },
    {
      key: "trainerName",
      label: "trainer Name"
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
      <OrganizationTable data={CouresesData}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/training/courses"
      />
    </div>
  )
}
