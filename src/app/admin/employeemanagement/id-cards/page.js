import IdCardsTable from '@/app/components/employees/IdCardsTable'
import employees from '@/app/data/employee-management'
import React from 'react'

export default function page() {
  return (
    <div>
      <IdCardsTable employees={employees} />
    </div>
  )
}
