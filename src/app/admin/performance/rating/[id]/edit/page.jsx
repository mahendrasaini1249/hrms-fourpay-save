"use client"
import EditForm from '@/app/components/form/EditForm'
import performanceData from '@/app/data/performance'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let RatingData = performanceData.find(
        (item) => item.id === Number(id) && item.module === "performance-rating")
    return (
        <div>
            <EditForm
                title="Edit Performance"
                data={RatingData}
            />
        </div>
    )
} 
