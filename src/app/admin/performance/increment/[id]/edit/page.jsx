"use client"
import EditForm from '@/app/components/form/EditForm'
import performanceData from '@/app/data/performance'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let IncrementData = performanceData.find(
        (item) => item.id === Number(id) && item.module === "increment")
    return (
        <div>
            <EditForm
                title="Edit Performance"
                data={IncrementData}
            />
        </div>
    )
} 
