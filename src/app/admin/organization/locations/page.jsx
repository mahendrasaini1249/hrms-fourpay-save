"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import React from 'react'
import organizationData from '@/app/data/organizationdata'
export default function page() {

  let LocationData = organizationData.filter((item) => item.module === "location")

  let columns = [
    {
      key: "locationCode",
      label: "Location Code"
    },
    {
      key: "locationName",
      label: "Location Name"
    },
    {
      key: "branch",
      label: "Branch"
    },
    {
      key: "city",
      label: "City"
    },
    {
      key: "employees",
      label: "Employees"
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
        data={LocationData}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/organization/locations"
      />
    </div>
  )
}
