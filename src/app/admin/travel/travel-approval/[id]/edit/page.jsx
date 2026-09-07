"use client"
import EditForm from '@/app/components/form/EditForm'
import travelData from '@/app/data/travel'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let TravelApprovel = travelData.find(
        (item) => item.id === Number(id) && item.module === "travel-approval")
    return (
        <div>
            <EditForm
                title="Edit Travel Details"
                data={TravelApprovel}
            />
        </div>
    )
} 
