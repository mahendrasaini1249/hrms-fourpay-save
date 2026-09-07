"use client"
import EditForm from '@/app/components/form/EditForm'
import attendanceData from '@/app/data/attendece'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let ChackinOut = attendanceData.find(
        (item) => item.id === Number(id) && item.module === "check-in-out")
    return (
        <div>
            <EditForm
                title="Edit ChackinOut"
                data={ChackinOut}
            />
        </div>
    )
}
