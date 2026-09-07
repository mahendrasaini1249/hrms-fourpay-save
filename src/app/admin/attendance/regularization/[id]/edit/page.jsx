"use client"
import EditForm from '@/app/components/form/EditForm'
import attendanceData from '@/app/data/attendece'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let RegularizationData = attendanceData.find(
        (item) => item.id === Number(id) && item.module === "regularization")
    return (
        <div>
            <EditForm
                title="Edit Regularization Attendnce"
                data={RegularizationData}
            />
        </div>
    )
} 
