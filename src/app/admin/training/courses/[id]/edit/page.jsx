"use client"
import EditForm from '@/app/components/form/EditForm'
import trainingData from '@/app/data/training'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let CouresesData = trainingData.find(
        (item) => item.id === Number(id) && item.module === "courses")
    return (
        <div>
            <EditForm
                title="Edit Training Details"
                data={CouresesData}
            />
        </div>
    )
} 
