import ContactTable from '@/app/components/employees/ContactTable'
import employees from '@/app/data/employee-management'
import React from 'react'

export default function page() {
  return (
    <>
      <ContactTable employees={employees} />
    </>
  )
}
