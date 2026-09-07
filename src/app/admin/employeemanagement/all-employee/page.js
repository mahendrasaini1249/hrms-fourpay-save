
import EmployeeTable from '@/app/components/employees/EmployeeTable'
import employees from '@/app/data/employee-management'
import React from 'react'

export default function page() {
  return (
    <div>
      <EmployeeTable employees={employees}/>
    </div>
  )
}
