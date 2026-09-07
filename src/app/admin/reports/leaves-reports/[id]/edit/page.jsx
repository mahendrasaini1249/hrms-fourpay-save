"use client"
import EditForm from '@/app/components/form/EditForm'
import reportsData from '@/app/data/reports'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let Reports = reportsData.find(
        (item) => item.id === Number(id) && item.module === "leave-reports")
    return (
        <div>
            <EditForm
                title="Edit Reports Details"
                data={Reports}
            />
        </div>
    )
} 
