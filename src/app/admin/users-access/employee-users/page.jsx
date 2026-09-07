
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import userAccessData from '@/app/data/user-acces'
import React from 'react'

export default function page() {

  let Employeeuser = userAccessData.filter(
    (item) => item.module === "employee-users")

  let columns = [
    {
      key: "userName",
      label: "user Name"
    },
    {
      key: "email",
      label: "email"
    },
    {
      key: "role",
      label: "role"
    },
    {
      key: "department",
      label: "department"
    },
    {
      key: "password",
      label: "password"
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
      <OrganizationTable data={Employeeuser}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/users-access/employee-users"
      />
    </div>
  )
}
