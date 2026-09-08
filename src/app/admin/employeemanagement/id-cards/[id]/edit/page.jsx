"use client"
import EditForm from '@/app/components/form/EditForm'
import employees from '@/app/data/employee-management'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let IdData = employees.find(
        (item) => item.id === Number(id) && item.module === "employee-id-cards")
    return (
        <div>
            <EditForm
                title="Edit Id Details"
                data={IdData}
            />
        </div>
    )
} 
