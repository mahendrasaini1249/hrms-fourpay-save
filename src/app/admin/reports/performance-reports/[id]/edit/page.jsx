"use client"
import EditForm from '@/app/components/form/EditForm'
import reportsData from '@/app/data/reports'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let Performance = reportsData.find(
        (item) => item.id === Number(id) && item.module === "performance-reports")
    return (
        <div>
            <EditForm
                title="Edit Reports Details"
                data={Performance}
            />
        </div>
    )
} 
