import EmployeeHistoryTable from '@/app/components/employees/EmployeeHistoryTable'
import employees from '@/app/data/employee-management'
import React from 'react'

export default function page() {
  return (
    <>
      <EmployeeHistoryTable emplyees={employees} />
    </>
  )
}
