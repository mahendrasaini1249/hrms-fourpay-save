"use client"
import EditForm from '@/app/components/form/EditForm'
import shiftManagementData from '@/app/data/shift'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let SiftData = shiftManagementData.find(
        (item) => item.id === Number(id) && item.module === "shifts")
    return (
        <div>
            <EditForm
                title="Edit Shifts Management Details"
                data={SiftData}
            />
        </div>
    )
} 
