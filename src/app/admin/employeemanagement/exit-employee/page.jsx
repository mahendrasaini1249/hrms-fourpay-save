import ExitEmployeeTable from '@/app/components/employees/ExitEmployeeTable'
import employees from '@/app/data/employee-management'
import React from 'react'

export default function page() {
  return (
    <div>
      <ExitEmployeeTable employees={employees} />
    </div>
  )
}