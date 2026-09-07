"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import payrollData from '@/app/data/payroll'
import React from 'react'

export default function page() {

  let EmployeeSalary = payrollData.filter(
    (item) => item.module === "employee-salary")

  let columns = [
    {
      key: "employeeId",
      label: "employee Id"
    },
    {
      key: "employeeName",
      label: "employee Name"
    },
    {
      key: "department",
      label: "department"
    },
    {
      key: "basicSalary",
      label: "basic Salary"
    },
    {
      key: "pf",
      label: "pf"
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
      <OrganizationTable data={EmployeeSalary}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/payroll/employee-salary"
      />
    </div>
  )
}
