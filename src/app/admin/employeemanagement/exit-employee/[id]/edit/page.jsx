"use client"
import EditForm from '@/app/components/form/EditForm'
import employees from '@/app/data/employee-management'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let Exit = employees.find(
        (item) => item.id === Number(id) && item.module === "exit-employees")
    return (
        <div>
            <EditForm
                title="Edit Exit Details"
                data={Exit}
            />
        </div>
    )
} 
