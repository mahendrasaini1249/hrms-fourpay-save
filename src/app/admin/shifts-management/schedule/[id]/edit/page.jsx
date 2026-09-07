"use client"
import EditForm from '@/app/components/form/EditForm'
import shiftManagementData from '@/app/data/shift'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let Roster = shiftManagementData.find(
        (item) => item.id === Number(id) && item.module === "weekly-schedule")
    return (
        <div>
            <EditForm
                title="Edit Shifts Management Details"
                data={Roster}
            />
        </div>
    )
} 
