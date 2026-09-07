
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import employeeSelfServiceData from '@/app/data/employeeSelfService'
import React from 'react'

export default function page() {

  let PaySlips = employeeSelfServiceData.filter(
    (item) => item.module === "my-payslips")

  let columns = [
    {
      key: "leaveId",
      label: "leave Id"
    },
    {
      key: "leaveType",
      label: "leave Type"
    },
    {
      key: "fromDate",
      label: "from Date"
    },
    {
      key: "toDate",
      label: "to Date"
    },

    {
      key: "days",
      label: "days"
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
      <OrganizationTable data={PaySlips}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/self-employee-service/payslips"
      />
    </div>
  )
}
