"use client"
import EditForm from '@/app/components/form/EditForm'
import complianceData from '@/app/data/compliance'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let Calendar = complianceData.find(
        (item) => item.id === Number(id) && item.module === "compliance-calendar")
    return (
        <div>
            <EditForm
                title="Edit Compliance Details"
                data={Calendar}
            />
        </div>
    )
} 
