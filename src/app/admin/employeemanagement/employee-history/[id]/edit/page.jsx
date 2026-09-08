"use client"
import EditForm from '@/app/components/form/EditForm'
import employees from '@/app/data/employee-management'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

  let { id } = useParams();

  let History = employees.find(
    (item) => item.id === Number(id) && item.module === "employee-history")
  return (
    <div>
      <EditForm
        title="Edit History Details"
        data={History}
      />
    </div>
  )
} 
