"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import hiringOnboardingData from '@/app/data/hiring-onbarding'
import React from 'react'

export default function page() {

  let JoiningChaclist = hiringOnboardingData.filter((item) => item.module === "joining-checklist")

  let columns = [
    {
      key: "checklistId",
      label: "checklist Id"
    },
    {
      key: "employeeName",
      label: " employee Name"
    },
    {
      key: "joiningDate",
      label: "joining Date"
    },
    {
      key: "employeeId",
      label: "employeeId"
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
      <OrganizationTable data={JoiningChaclist}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/hiring-onboarding/joining-checklist"
      />
    </div>
  )
}
