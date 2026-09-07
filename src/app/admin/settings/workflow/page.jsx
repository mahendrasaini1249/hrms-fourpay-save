
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import settingsData from '@/app/data/setting'
import React from 'react'

export default function page() {

  let Workflow = settingsData.filter(
    (item) => item.module === "workflow-settings")

  let columns = [
    {
      key: "id",
      label: "id"
    },

    {
      key: "approvalLevel",
      label: "approval Level"
    },
    {
      key: "workflowType",
      label: "workflow Type"
    },
    {
      key: "updatedBy",
      label: "updated By"
    },
    {
      key: "updatedDate",
      label: " Date"
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
      <OrganizationTable data={Workflow}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/settings/workflow"
      />
    </div>
  )
}
