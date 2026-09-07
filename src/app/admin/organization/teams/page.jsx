"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import React from 'react'
import organizationData from '@/app/data/organizationdata'
export default function page() {

  let TeamsData = organizationData.filter((item) => item.module === "team")

  let columns = [
    {
      key: "teamCode",
      label: "Team Code"
    },
    {
      key: "teamLead",
      label: "Team Lead"
    },
    {
      key: "teamName",
      label: "Team Name"
    },
    {
      key: "branch",
      label: "Branch"
    },
    {
      key: "status",
      label: "Status"
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
      <OrganizationTable
        columns={columns}
        data={TeamsData}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/organization/teams"
      />
    </div>
  )
}
