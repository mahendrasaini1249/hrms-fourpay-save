"use client"
import EditForm from '@/app/components/form/EditForm'
import shiftManagementData from '@/app/data/shift'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let Assignement = shiftManagementData.find(
        (item) => item.id === Number(id) && item.module === "shift-assignment")
    return (
        <div>
            <EditForm
                title="Edit Shifts Management Details"
                data={Assignement}
            />
        </div>
    )
} 
