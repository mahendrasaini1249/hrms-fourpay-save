"use client"
import EditForm from '@/app/components/form/EditForm'
import trainingData from '@/app/data/training'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let ProgramData = trainingData.find(
        (item) => item.id === Number(id) && item.module === "trainers")
    return (
        <div>
            <EditForm
                title="Edit Training Details"
                data={ProgramData}
            />
        </div>
    )
} 
